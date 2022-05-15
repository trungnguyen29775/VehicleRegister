module.exports = app =>
{
    const trucks = require('../service/trucks.service')
    var router = require('express').Router();
    router.get('/create',(req,res)=>
    {
        res.render('trucks/create')
    })

    router.post('/create',trucks.create)
    router.get('/retrieve',trucks.findAll)
    router.get('/update',(req,res)=>
    {
        res.render('trucks/update')
    })
    router.post('/update',trucks.update)
    router.get('/delete',(req,res)=>
    {
        res.render('trucks/delete')
    })
    router.post('/delete',trucks.destroy)
    app.use('/trucks',router);
}

