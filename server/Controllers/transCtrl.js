const transectionModel = require('../models/transectionModel')
const getAllTrans=async(req,res)=>{
   try{
    const transection=await transectionModel.find({cam_id:req.body.cam_id})
    res.status(200).json(transection)

   }
   catch(error){
    console.log(error);
    res.status(500).json(error);
   }
}
const addTrans= async(req,res)=>{
    try{

        const newTrans= new transectionModel(req.body);
        await newTrans.save();
        res.status(201).send("trsnsecton added");
    }
    catch(error){
        console.log("Error in adding trans",error);
        res.status(500).json(error);
    }
}

module.exports={getAllTrans, addTrans}