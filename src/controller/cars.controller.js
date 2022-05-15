module.exports = app =>
{
    const cars = require('../service/cars.service')
    var router = require('express').Router();
    router.get('/create',(req,res)=>
    {
        res.render('cars/create')
    })

    router.post('/create',cars.create)
    router.get('/retrieve',cars.findAll)
    router.get('/update',(req,res)=>
    {
        res.render('cars/update')
    })
    router.post('/update',cars.update)
    router.get('/delete',(req,res)=>
    {
        res.render('cars/delete')
    })
    router.post('/delete',cars.destroy)
    app.use('/cars',router);
}

