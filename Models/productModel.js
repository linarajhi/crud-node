//modele (archetecture)bech ykoun bd 3andou nom/categorie/prix  bech ne5dmouh be json {key,value} weli 3andou 3ale9a bel base de donnee c le mongoos
const mongoose=require("mongoose")
const schema=mongoose.Schema;
const productSchema=new schema({
    name:{
        type:String,
       require:true,
    },
    categories:{
        type:String,
        require:true,

    },
    prix:{
        type:Number,
        require:false,
    },
});
module.exports=product=mongoose.model("product",productSchema);
//houwa eli bech nhot fih el modele mte3i