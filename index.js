const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://injo:1234@injomongodb.yrtku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB connected . . .'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world'))
app.listen(port, () => console.log(`example listening port ${port}!`))