const mongoose = require('mongoose');

 
//design schema
const TransectionSchema=new mongoose.Schema({
    loc_name: {
      type:  String,
    required:[true,"name is required"]
    },
    cam_id:{
      type:  String,
        required:[true,"id is required"]
    },
    date:{
     type:   Date,
        required:[true,'date is required']
    },
    numberPlate:{
      type: String,
      required:[true,"Number plate is required"]
    },
    price:{
      type: Number,
      required:[true,"Challan Price is required"]
    },
    status :{
      type:String ,
      enum:['paid','unpaid'],
      default:'unpaid'

    },
    image:{
      data : {
          type: Buffer,
          required:true,
          validate:{
              validator: function (value){
                  return value.length>0;
              },
              message:'Image data is required.',
          }
      },
      contentType:{
          type:String,
          required:true,
      },

     
  }

},{timestamp:true})

//define model

const transectionModel= mongoose.model('transection',TransectionSchema);

//export
module.exports=transectionModel; 