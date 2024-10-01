import express from 'express'
 
import dotenv from 'dotenv'
import mongoose from 'mongoose';

const app = express();

dotenv.config();
const PORT: number = 3600;


//database
const mongoURI = 'mongodb+srv://syamnandhu3:syam%40yumhive@yumhive.42uda.mongodb.net/?retryWrites=true&w=majority&appName=YumHIve';
mongoose.connect(mongoURI)
    .then((res) => console.log('db connection extablished'));

app.listen(PORT,() => {

    console.log('The server running on port 3600')
});

