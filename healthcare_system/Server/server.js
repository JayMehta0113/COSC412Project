
require("dotenv").config({path: "./config.env"});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');


const app = express();
app.use(bodyParser.json());
app.listen(5000, () =>console.log('server running on port 5000'));
app.use(bodyParser.json());

//get login data to databse
try{
mongoose.connect();

const db = 'prolink';
const collection = 'User-Data';

const userSchema = new mongoose.Schema({
    userId: String,
    password: String
})

const User = mongoose.model('User', userSchema, collection)


app.post('/api/signUp', async (req, res)=>{
    console.log(req.body);

    const{userId, password} = req.body;

    try {
        // Create a new user document and save it to the database
        const tryUser = await User.findOne({userId})
        if(tryUser === null){
        const newUser = await User.create({ userId, password });
        res.status(201).json({ message: 'User created successfully', user: newUser });
        }
        else{
           res.status(404).json({message: 'username already exists'})
        }

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
    
})

app.post('/api/login', async (req, res)=>{
    const{userId, password} = req.body;

    const tryLogin = await User.findOne({userId});
    if(tryLogin == null){
        res.status(404).json({message: "User doesnt exist"})
    }
    if(tryLogin.password == password){
        res.status(200).json({message: 'login completed'})
    }
    else{
        res.status(404).json({message: 'password incorrect'})
    }


})


}
catch(error){
    console.log('error connecting to database');
}
