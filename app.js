const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


const postsRoute = require('./routes/posts')

app.use(cors())
app.use(express.json());
app.use('/posts', postsRoute)
 
app.get('/', (req,res)=>{
    res.send("We are on home")
})

mongoose.connect('mongodb+srv://tanupriya2199:xSU8NvpRutnLlJR0@cluster0.g8mvp.mongodb.net/devNodeTutorial?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(res=>{ 
    console.log("database connected successfully")
})

app.listen(3500)