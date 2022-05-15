module.exports = app =>
{
    const owners = require('../service/owners.service')
    var router = require('express').Router();
    router.get('/create',(req,res)=>
    {
        res.render('owner/create')
    })

    router.post('/create',owners.create)
    router.get('/retrieve',owners.findAll)
    router.get('/update',(req,res)=>
    {
        res.render('owner/update')
    })
    router.post('/update',owners.update)
    router.get('/delete',(req,res)=>
    {
        res.render('owner/delete')
    })
    router.post('/delete',owners.destroy)
    app.use('/owners',router);
}

