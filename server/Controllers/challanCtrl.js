
    const challanModel = require('../models/challanModel');

    const getChallan = async (req, res) => {
        try {
            // console.log("the res data of challan is here", res);
            let data = await challanModel.find(); // Use find() to fetch all documents
            console.log("the challan data is here--------------------------", data);
            res.status(200).json(data); // Directly send data
        } catch (error) {
            console.log(error);
            res.status(500).send("Error in Sending Data");
        }
    };
    
    module.exports = {
        getChallan
    };
    
