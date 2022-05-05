const express = require('express')
const port = 3000
const path = require('path')
const app = express()
const {engine} = require('express-handlebars')
const db = require("./models");
db.sequelize.sync();
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))

app.engine('hbs',engine({
    extname:'.hbs'
}))

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources//views'))

app.get('/',(req,res)=>
{
    res.render('home')
})

app.get('/create',(req,res)=>
{
    res.render('create')
})

app.get('/retrieve',(req,res)=>
{
    res.render('retrieve')
})

require('./controller/peopler.controller')(app)

app.listen(port,()=>{

})