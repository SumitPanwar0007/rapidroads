const mongoose= require("mongoose")
const { GridFSBucket } = require("mongodb");

let gfs;  // This will hold the GridFS bucket

const ConnectDb= async()=>{
    try{
        
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`server Running on ${mongoose.connection.host}`);

          // Initialize GridFS Bucket once the connection is open
          const db = mongoose.connection.db;
          gfs = new GridFSBucket(db, {
              bucketName: 'fs'
          });
  
          console.log("GridFS Bucket has been initialized");
    }
    catch(error){
        console.log("error---",`${error}`);
        process.exit(1); // Exit process with failure

        
    }
}

// Function to access the GridFS bucket
const getGfs = () => {
    if (!gfs) {
        throw new Error("GridFS Bucket is not initialized yet");
    }
    return gfs;
};


module.exports={ConnectDb,getGfs}




