const mongoose = require('mongoose');
const { validate } = require('./userModel');

//design schema
const ChallanSchema = new mongoose.Schema({
    challanNo: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
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
const challanModel= mongoose.model('challan',ChallanSchema)

//export 

module.exports = challanModel;