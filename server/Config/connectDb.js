const mongoose= require("mongoose")


const ConnectDb= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`server Running on ${mongoose.connection.host}`);
    }
    catch(error){
        console.log(`${error}`);
    }
}



module.exports=ConnectDb




