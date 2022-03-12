
const res = require("express/lib/response");
const Product=require("../Models/productModel")
//n importi el model bech n3adih 3ala controleur
module.exports={
    addProduct: async (req, res)=>{
        //requet feha head w body w(fih eli bech nzidhom nom/categori /prix)
        const {name,categories,prix}= req.body;
        //lasyncron 3andha try w catch
try{
    const Products = new Product({
        name,
        categories,
        prix,
    }) ;
    //hedha bech tsauvgardilek el bech nzidou tawa name categories et prix fi base de donnee
    await Products.save();
    //reponse bech yab3athlek sous forme json
    res.json(Products);

}
//ken fama haja ghalta raja3li message
catch(error){
    console.error(error.message)
}

    },
    //async fonction bech tjewbek eseque el produit tzed o non

//getprduct
getproduct : async(req,res)=>
{
    try{ const product=await Product.find()
        res.json(product)
    

}
catch (error){
    console.error(error.message)

}

},
//deleteProduct
deleteProduct:async(req,res)=>{
    try{
        product=await Product.findByIdAndDelete(req.params.id)
        res.json("product deleted")

    }
    catch(error){
        console.error(error.message)
    }

    
},
//updateProduct
updateProduct:async(req,res)=>{
    try
    {
      const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})

        res.json(product)
        
        

    }
    catch(error){
        console.error(error.message)
}

}
}
