const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { User } = require("./models/User")
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended:true})); //application/www form data
app.use(bodyParser.json());      //application/json

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log('MongoDB connected . . .'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world ~'))
app.listen(port, () => console.log(`example listening port ${port}!`))

app.post('/register',(req, res)=>{
    //회원가입 정보를 client 에서 가져오면
    //데이터베이스에 넣음
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success :false, err})
        return res.status(200).json({

            success:true
        })
    })

})