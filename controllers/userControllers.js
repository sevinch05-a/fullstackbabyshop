const User= require('../models/userModel')

const fetchUsers=async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const fetchUserById= async  (req, res) => {
    try{
    const userId = req.params.id
    const userById = await userModel.findById(userId);
   // console.log(User)
    res.json({userById: userById});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }

};
const newUser = async (req, res) => {
    
       const name = req.body.name;
    
         const email = req.body.email;
   
         const password = req.body.password;
  
         const rating= req.body.rating;
    

    try {
        const user = await userModel.create({
            name: name,

             email: email,
   
             password: password,
     
             rating:rating,
        });

        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const updateUser= async (req, res) => {

    const userId = req.params.id;
   
      const name = req.body.name;
  
     const  email= req.body.email;
   
     const  password= req.body.password;

     const rating= req.body.rating;

    
    try {
        const updatedUser = await userModel.findByIdAndUpdate(userId,{
            name: name,

            email: email,
   
            password: password,
    
            rating:rating,
        });
        
           
      
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteUser= async (req, res) => {
    const UserId = req.params.id 
    try {
        await userModel.findByIdAndDelete(UserId)
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {fetchUsers,fetchUserById, newUser, updateUser, deleteUser};
