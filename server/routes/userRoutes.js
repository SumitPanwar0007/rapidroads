
const express= require('express');
const {loginCtrl,registerCtrl }=require('../Controllers/userCtrls')


//router
const router= express.Router();

//routers
//POstlogin
router.post('/login',loginCtrl);

//post register
router.post('/register',registerCtrl)
// router.post('/register',()=>{console.log("hello from register")})




module.exports=router