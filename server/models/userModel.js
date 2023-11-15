const mongoose=require('mongoose')



//design Schema
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type: String ,
        unique :[ true,"email is required "],
    },
    password:{
        type:String,
        required:[true,'password is required']
    }
},{timestamps:true})


//mongoose model

const UserModel=mongoose.model('users',UserSchema)




//export

module.exports=UserModel