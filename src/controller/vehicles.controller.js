module.exports = app =>
{
    const vehicles = require('../service/vehicles.service')
    var router = require('express').Router();
    router.get('/create',(req,res)=>
    {
        res.render('vehicles/create')
    })

    router.post('/create',vehicles.create)
    router.get('/retrieve',vehicles.findAll)
    router.get('/update',(req,res)=>
    {
        res.render('vehicles/update')
    })
    router.post('/update',vehicles.update)
    router.get('/delete',(req,res)=>
    {
        res.render('vehicles/delete')
    })
    router.post('/delete',vehicles.destroy)
    app.use('/vehicles',router);
}

