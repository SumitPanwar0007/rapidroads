const express= require('express')

const {getAllTrans,addTrans,editTrans,deleteTrans}= require('../Controllers/transCtrl')

//router object
const router=express.Router();

//router
router.post('/transection',getAllTrans);

//add_challan
router.post('/addTransection',addTrans);

//edit challan
router.post('/editTransection',editTrans)

//delete challan
router.post('/deleteTransection',deleteTrans)
module.exports=router;