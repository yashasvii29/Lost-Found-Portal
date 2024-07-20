
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
var cors = require('cors');
const Users = require('./models/User');

const authRoutes = require('./routes/authRoutes');

const itemRoutes = require('./routes/itemRoutes');

mongoose.connect('mongodb://127.0.0.1:27017/Lost-Found-Portal')
.then(()=>{
    // console.log(`DB connected successfully ${mongoose.connection.host}`);
    console.log("db connected successfully");
})
.catch((err)=>{
    console.log("DB error"); 
    console.log(err)
})

app.use(cors({origin:['http://localhost:5173']}));

app.use(express.urlencoded({extended:true})); // form data

app.use(express.json());  // json data

app.use(authRoutes);
app.use(itemRoutes);

app.get('/' , (req,res)=>{
    res.send('Welcome to lost-found-app');
})
// seedDB();
const server = app.listen(8080 , (req,res)=>{
    console.log("Server connected at port 8080");
})
