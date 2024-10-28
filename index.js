//setting up server here
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //use to interact with mongo db server


const app = express();
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connection Successfull");
}).catch((err)=>{
    console.log(err.message);
});

app.use(cors());
app.use(express.json());

const server = app.listen(process.env.PORT,()=>{console.log(`Server started on port ${process.env.PORT}`)})