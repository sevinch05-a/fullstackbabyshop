const Product= require('../models/product')

const fetchProducts=async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
///////////////////////////////////////////////////
const fetchProduct = async  (req, res) => {
    const productId = req.params.id
    const product = await Product.findById(productId)
    console.log(product)
    res.json({product:product});

}
/////////////////////////////////////////////////////////////
const newProduct = async (req, res) => {
    
       const name = req.body.name;
    
         const description = req.body.description;
   
         const price = req.body.price;
  
         const image = req.body.image;
    
       const category = req.body.category;
     
    

    try {
        const product = await Product.create({
            name: name,
            description:description,
            price: price,
            image:image, // Здесь будет храниться путь к изображению
            category: category,
        });

        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
///////////////////////////////////////////////////////////////
const updateProduct= async (req, res) => {
   
       name = req.body.name;
  
        description = req.body.description;
   
        price = req.body.price;
   
        image = req.body.image;
  
      category = req.body.category;
   
    const productId = req.params.id 
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId,{
            name: name,
            description: description,
            price: price,
            image: image,
            category: category
        }
              
        )
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

///////////////////////////////////////////////////////////////////////////////
const deleteProduct = async (req, res) => {
    const productId = req.params.id 
    try {
        await Product.findByIdAndDelete(productId)
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {fetchProducts,fetchProduct, newProduct, updateProduct, deleteProduct};
