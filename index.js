import express from "express";
import bodyParser from "body-parser";
import hallRoutes from "./routes/hall.js";

const app = express(); //initialise usage of express package
const PORT = 5000; //port number

app.use(bodyParser.json()); //indicating that we are going to use JSON data in project

app.use('/hall',hallRoutes);

//test message
app.get('/',(req,res)=>{
    res.send("Successfully running!")
});

app.listen(PORT,()=>{
    console.log(`Successfully running on: http://localhost:${PORT}`);
});
