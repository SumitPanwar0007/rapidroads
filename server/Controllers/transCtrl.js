const transectionModel = require('../models/transectionModel')
 const moment= require('moment')

const getAllTrans=async(req,res)=>{
   try{
    const {frequency,selectDate}= req.body
    
    const transection=await transectionModel.find({
        ...(frequency !== 'custom'?{
            date:{
                $gt:moment().subtract(Number(frequency),"d").toDate(),
           }
        }:
        {
            date:{
                $gte:selectDate[0],
                $lte: selectDate[1]
            }
        })
       
    })
   
    res.status(200).json(transection)

   }
   catch(error){
    console.log(error);
    res.status(500).json(error);
   }
}

const editTrans= async(req,res)=>{
    let {id,...data}=req.body;
    console.log(id)
    try{
        await transectionModel.findOneAndUpdate({_id: id}, data);
        res.Status(200).send("Transection Edited successfully");

    }
    catch(error){
        console.log("Error in editing the transaction",error);
        res.Status(500).send("Transection not Edited:")
    }
}

const addTrans= async(req,res)=>{
    try{

        const newTrans= new transectionModel(req.body);
        await newTrans.save();
        res.status(201).send("transecton added");
    }
    catch(error){
        console.log("Error in adding trans",error);
        res.status(500).json(error);
    }
}

const deleteTrans = async (req,res)=>{
    const {id}= req.body;
    try{
        const removeData=await  transectionModel.findOneAndDelete({_id :id});
        console.log("the removed data is: ",removeData)
        if(!removeData) return res.status(404).json('No such Data')
        res.status(200).json({message:"deleted successfully from server :)",data: removeData});

    }
    catch(error){
        console.log("error in deleting: ",error)
        res.status(500).json({error:"internal server error :)"});

    }

}

module.exports={getAllTrans, addTrans,editTrans,deleteTrans}