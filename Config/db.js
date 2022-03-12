//mongoose traducteur language entre node.js et nosql(language de mongos Db)npm i mongoose il faut instale
const mongoose=require("mongoose")
//3ayatna lel mongoose b require
//mongoo db deux version fama local w enligne(mongo db atlas)
const connectDB=async()=>
{
    //try bech ne3mel connection m3a base de donnee
    try{
        //password nhoti eli hatineh fi sites mongodb bech nconectiw 3ala serveur
        await mongoose.connect("mongodb+srv://sondes:azizhanin@cluster0.9bh3d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            //configuration lelebase de donne
useNewUrlParser: true,
useUnifiedTopology: true,

        })
        //ken base de donne connecte yraja3lek se message
        console.log("database.connected...");
    }
    // sinon catchjh t5arajli erre
    catch(error){
        console.error(error.message);
        //kol chay theb texecutih fi serveur.js
    }
}//l5edma lkol bech nhotha f connectDb 
module.exports=connectDB