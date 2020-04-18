const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const morgan = require('morgan')
const cors = require('cors')
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(session({
    name:'my-little-session',
    secret:'My ultraMEGA SECRET',
    cookie:{
        maxAge: 1000000,
        secure: false,
        sameSite:true
    },
    resave:false,
    saveUninitialized:false
}))

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))
require('./auth.routes')(app)
app.get('/',(req,res)=>{
    const {userId} = req.session
    res.json(req.session)
})

const PORT = process.env.PORT || 3002
server.listen(PORT,()=> console.log(`Listening on port ${PORT} `))