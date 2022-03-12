
//3ayatna lel pakiedj eli houwa framework express

const express=require("express");
const app=express();
//connexion avec Db
const connectDB=require("./Config/db");
connectDB()
//importi json men express
app.use(express.json());
//import router
const productRouter=require("./Router/productRouter")
//hedha instance bech ne5dem beha
app.use("/project",productRouter)


//port ken l9it port reserver 5oudh 4000 dima el port e5er wehed
const PORT=process.env.PORT||"5000"

//configuration de server lezmou port

app.listen(PORT,(err)=>{
    if (err){
        //ken 4000n dispo 5arajli runnig sinon t3ada lele port le5erv w ken fama mochkol 5rajli err
        console.log("server is not running");
    }
    else {
        console.log(`serveur is running on port ${PORT}`);
    }

});