
const userModel= require('../models/userModel')
//login Callback

const loginCtrl= async(req,res)=>{
    try{
        const{email,password}=req.body
             
        const user=await userModel.findOne({
                            email,password
        })
        if(!user){
            return res.status(404).json({
                success:false,message:"user not found"
            });
        }
        res.status(200).json({
            success:true, message:'Login success',user
        })

    }
    catch(error){
        res.status(500).json({
            success:false,message:'error occured'
        });
        console.log(error);
    }

}


//register Callback(
// const registerCtrl =()=>{
//     console.log("hello form contraol")
// }

const registerCtrl=async(req,res)=>{
    try{
        console.log("hello inside ctrl");
        const newUser= new userModel(req.body);
        await newUser.save();
        res.status(201).json({
            success:true,
            newUser,
        })
    }
    catch(error){
        res.status(400).json({
            success : false ,  error :"Error in saving data",
        })
        console.log(error)
    }

}


module.exports={registerCtrl ,loginCtrl};