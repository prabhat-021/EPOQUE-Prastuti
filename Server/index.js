const express = require('express')
const app =express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors')
const userRouter  = require('./routes/users')
dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DB connected succesfully")
}).catch((err)=>{console.log(err)});

app.use(cors());
app.use(express.json());
app.use('/api',userRouter);
app.listen(process.env.PORT,()=>{
    console.log("server is running on port")
})