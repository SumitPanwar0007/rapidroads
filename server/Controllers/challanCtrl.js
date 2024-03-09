const challanModel= require('../models/challanModel')
// var moment = require("moment");
// const { v4: uuidv4 } = require('uuid');
// const router = require('express').Router();

const getChallan= async(req,res)=>{
    try{
        let data= await challanModel.getAll()
        res.status(200).json({data})
    }
    catch(error){
        console.log(error)
        res.status(500).send("Error in Sending Data")
    }

}

module.exports={
    getChallan
}