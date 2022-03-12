const express=require("express")
const router=express.Router()
//path el controle win mawjoud
const product=require("../Controllers/productController")
//express nesta3mlouh bech n3aytou le rout w bma ana bech nzidou haja nesta3mlou post
router.post("/addProduct",product.addProduct);
//getProduct
router.get("/getProduct",product.getproduct)
//deleteProduct
router.delete("/deleteProduct/:id",product.deleteProduct)
//updateProduct
router.put("/updateProduct/:id",product.updateProduct)
module.exports = router;