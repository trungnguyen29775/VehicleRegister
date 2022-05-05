module.exports = app =>
{
    const people = require('../service/peolple.service')
    var router = require('express').Router();
    router.get('/create/people',(req,res)=>
    {
        res.render('peopleCreate')
    })

    router.post('/create/people',people.create)
    router.get('/retrieve-people',people.findAll)
    router.get('/update/people',(req,res)=>
    {
        res.render('people.update')
    })
    router.put('/update/people',people.update)
    router.get('/delete/people',(req,res)=>
    {
        res.render('people.delete')
    })
    router.delete('/delete/people',people.destroy)
    app.use('/',router);
}

