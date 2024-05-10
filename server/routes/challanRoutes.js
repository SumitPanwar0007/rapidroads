const express=require('express')

const {getChallan } = require('../Controllers/challanCtrl')

//router object
const router= express.Router();

//router
router.get('/challan', getChallan);

// router.get('/images/:fileId', async (req, res) => {
//     try {
//         const fileId = new mongoose.Types.ObjectId(req.params.fileId);
//         const gfs = getGfs();  // Access the GridFS bucket

//         const downloadStream = gfs.openDownloadStream(fileId);

//         downloadStream.on('data', (chunk) => res.write(chunk));
//         downloadStream.on('error', () => res.status(404).send('Not found'));
//         downloadStream.on('end', () => res.end());

//     } catch (error) {
//         console.error(`Error serving file: ${error}`);
//         res.status(500).send('Server error');
//     }
// });


module.exports =  router;