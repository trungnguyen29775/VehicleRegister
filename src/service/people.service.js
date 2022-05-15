const db = require('../models')
const People = db.People
exports.create = async (req,res) => 
{
  
    try{
        const people = 
        {
            Identify_card_ID:req.body.Identify_card_ID,
            Name: req.body.Name,
            Dob: req.body.Dob,
            Address: req.body.Address,
            Nationality: req.body.Nationality,
        }
        const checkID= await People.findOne({where:{Identify_card_ID:people.Identify_card_ID}})
        if(checkID)
        {
            res.send(`Person with Identify_card_ID: ${people.Identify_card_ID} already exist`)
        }
        else
        {
            await People.create(people)
            res.redirect('/people')
        }
    }
    catch(err)
    {
        console.log("Error due to ",err)
    }
}

exports.findAll = async (req, res) => {
  // res.render('people/retrieve')
  const people = await People.findAll();
  res.json(people)
};

exports.update = async (req,res)=>
{
    const Identify_card_ID = req.body.Identify_card_ID;
    const newPerson = await People.findOne({where:{Identify_card_ID:Identify_card_ID}})
    console.log(Identify_card_ID)
    if(!newPerson)
    {
      res.send('Could not find this person')
    }
    else
    {
      newPerson.Name = req.body.Name;
      newPerson.Address=req.body.Address;
      newPerson.Dob=req.body.Dob;
      newPerson.Nationality=req.body.Nationality;
      try
      {
        await newPerson.save();
        res.redirect('/people')
      }
      catch(err)
      {
        console.log('Some thing went wrong due to ',err)
      }
    }
}

exports.destroy = async (req,res)=>
{
    const Identify_card_ID = req.body.Identify_card_ID;
    try
    {
      const person = await People.findOne({where:{Identify_card_ID: Identify_card_ID}})
      if(!person)
      {
        res.send('This person is not exist')
      }
      else{
        People.destroy({where:{Identify_card_ID:person.Identify_card_ID}
      })
      }
      res.redirect('/people')
    }
    catch(err)
    {
      res.send('Error due to ',err)
    }
   
}
