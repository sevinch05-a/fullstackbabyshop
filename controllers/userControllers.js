const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user')



const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
      res.status(400)
      throw new Error('User already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id) 
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

      // Check for user email
      const user = await User.findOne({email})

      if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id) 
        })
      } else {
        res.status(400)
        throw new Error('Invalid credentials')
      }
})


const getMe = asyncHandler(async (req, res) => {
    res.json({ message: ' User data display' })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};


module.exports = {
   registerUser,
   loginUser,
   getMe,
}









































// const User= require('../models/userModel')

// const fetchUsers=async (req, res) => {
//     try {
//         const users = await userModel.find();
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };
// const fetchUserById= async  (req, res) => {
//     try{
//     const userId = req.params.id
//     const userById = await userModel.findById(userId);
//    // console.log(User)
//     res.json({userById: userById});
//     } catch (err) {
//         res.status(500).json({ message: err.message});
//     }

// };
// const newUser = async (req, res) => {
    
//        const name = req.body.name;
    
//          const email = req.body.email;
   
//          const password = req.body.password;
  
//          const rating= req.body.rating;
    

//     try {
//         const user = await userModel.create({
//             name: name,

//              email: email,
   
//              password: password,
     
//              rating:rating,
//         });

//         res.status(201).json(user);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };
// const updateUser= async (req, res) => {

//     const userId = req.params.id;
   
//       const name = req.body.name;
  
//      const  email= req.body.email;
   
//      const  password= req.body.password;

//      const rating= req.body.rating;

    
//     try {
//         const updatedUser = await userModel.findByIdAndUpdate(userId,{
//             name: name,

//             email: email,
   
//             password: password,
    
//             rating:rating,
//         });
        
           
      
//         res.status(200).json(updatedUser);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// const deleteUser= async (req, res) => {
//     const UserId = req.params.id 
//     try {
//         await userModel.findByIdAndDelete(UserId)
//         res.json({ message: 'User deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }


// module.exports = {fetchUsers,fetchUserById, newUser, updateUser, deleteUser};
