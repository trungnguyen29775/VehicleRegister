module.exports = app =>
{
    const motorbikes = require('../service/motorbikes.service')
    var router = require('express').Router();
    router.get('/create',(req,res)=>
    {
        res.render('motorbikes/create')
    })

    router.post('/create',motorbikes.create)
    router.get('/retrieve',motorbikes.findAll)
    router.get('/update',(req,res)=>
    {
        res.render('motorbikes/update')
    })
    router.post('/update',motorbikes.update)
    router.get('/delete',(req,res)=>
    {
        res.render('motorbikes/delete')
    })
    router.post('/delete',motorbikes.destroy)
    app.use('/motorbikes',router);
}

