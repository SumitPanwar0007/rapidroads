const mongoose = require('mongoose');

//design schema
const TansitionSchema=new mongoose.Schema({
    loc_name: {
      type:  String,
    required:[true,"name is required"]
    },
    cam_id:{
      type:  String,
        required:[true,"id is required"]
    },
    date:{
     type:   String,
        required:[true,'date is required']
    }
},{timestamp:true})

//define model

const transectionModel= mongoose.model('transection',TansitionSchema);

//export
module.export=transectionModel; 