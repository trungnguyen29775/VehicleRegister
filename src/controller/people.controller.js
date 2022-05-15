module.exports = app =>
{
    const people = require('../service/people.service')
    var router = require('express').Router();
    router.get('/create',(req,res)=>
    {
        res.render('people/create')
    })

    router.post('/create',people.create)
    router.get('/retrieve',people.findAll)
    router.get('/update',(req,res)=>
    {
        res.render('people/update')
    })
    router.post('/update',people.update)
    router.get('/delete',(req,res)=>
    {
        res.render('people/delete')
    })
    router.post('/delete',people.destroy)
    app.use('/people',router);
}

