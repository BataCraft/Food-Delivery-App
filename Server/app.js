const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');



const app = express();
dotenv.config();
const PORT = process.env.PORT 

// Database;
const mongodb = require('./config/DB');
mongodb();

app.get('/', (req, res)=>{
    res.send(`The server has been started at ${PORT}`)
    
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // React app running on port 3000
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.json())

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/Login")); //For login user

app.listen(PORT, ()=>{
    console.log(`The server has been started at ${PORT}`);
    
});