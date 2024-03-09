const express=require('express')

const {getChallan } = require('../Controllers/challanCtrl')

//router object
const router= express.Router();

//router
router.post('/challan', getChallan);


module.exports =  router;