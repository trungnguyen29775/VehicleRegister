const express = require('express')
const port = 3000
const path = require('path')
const app = express()
const {engine} = require('express-handlebars')
const db = require("./models");
// db.sequelize.sync({alter:true});
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

app.get('/people',(req,res)=>
{
    res.render('people/peopleHome')
})

app.get('/owners',(req,res)=>
{
    res.render('owner/ownerHome')
})

app.get('/vehicles',(req,res)=>
{
    res.render('vehicles/vehiclesHome')
})

app.get('/cars',(req,res)=>
{
    res.render('cars/carsHome')
})

app.get('/trucks',(req,res)=>
{
    res.render('trucks/trucksHome')
})

app.get('/motorbikes',(req,res)=>
{
    res.render('motorbikes/motorbikesHome')
})

require('./controller/people.controller')(app)
require('./controller/owners.controller')(app)
require('./controller/vehicles.controller')(app)
require('./controller/cars.controller')(app)
require('./controller/trucks.controller')(app)
require('./controller/motorbikes.controller')(app)


app.listen(port,()=>{

})