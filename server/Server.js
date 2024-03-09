const morgan = require("morgan");
const dotenv=require("dotenv")
const express= require("express")
const cors=require("cors");
const ConnectDb = require("./Config/connectDb");
const useRoutes= require("./routes/userRoutes")
const transectionRoutes=require('./routes/transectionRoutes')
const challanRoutes = require('./routes/challanRoutes')


//config dot env file
dotenv.config();



//rest object
const app= express();

//middlewares

app.use(express.json())
app.use(cors());
app.use(morgan("dev"));

//router post
// app.get('/',(req,res)=>{
//     res.send("<h1>Hwlo to backend of rapid roads</h1>")
// })

app.use('/users',useRoutes);


//transection route
app.use('/transection',transectionRoutes);

//challan route
app.use('/challan',challanRoutes)

//database call 
ConnectDb();

//port
const PORT= 8081||process.env.PORT;

//listen

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})