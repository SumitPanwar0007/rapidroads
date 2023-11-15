const express= require('express')

const {getAllTrans,addTrans}= require('../Controllers/transCtrl')

//router object
const router=express.Router();

//router
router.post('/transection',getAllTrans);


router.post('/addTransection',addTrans);

module.exports=router;