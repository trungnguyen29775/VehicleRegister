const db = require('../models')
const Owners = db.Owners
exports.create = async (req,res) => 
{
  
    try{
        const owners = 
        {
            Certificate_ID:req.body.Certificate_ID,
            Identify_card_ID: req.body.Identify_card_ID,
            Vehicle_ID: req.body.Vehicle_ID,
            Date_Register: req.body.Date_Register,
            Address: req.body.Address,
        }
        const checkID= await Owners.findOne({where:{Certificate_ID:owners.Certificate_ID}})
        if(checkID)
        {
            res.send(`Person with Certificate_ID: ${owners.Certificate_ID} already exist`)
        }
        else
        {
            await Owners.create(owners)
            res.redirect('/owners')
        }
    }
    catch(err)
    {
        console.log("Error due to ",err)
    }
}

exports.findAll = async (req, res) => {
  const owners = await Owners.findAll();
  res.json(owners)
};

exports.update = async (req,res)=>
{
    const Certificate_ID = req.body.Certificate_ID;
    const newOwner = await Owners.findOne({where:{Certificate_ID:Certificate_ID}})
    console.log(Certificate_ID)
    if(!newOwner)
    {
      res.send('Could not find this person')
    }
    else
    {
      newOwner.Identify_card_ID = req.body.Identify_card_ID;
      newOwner.Date_Register=req.body.Date_Register;
      newOwner.Vehicle_ID=req.body.Vehicle_ID;
      newOwner.Address=req.body.Address;
      try
      {
        await newOwner.save();
        res.redirect('/owners')
      }
      catch(err)
      {
        console.log('Some thing went wrong due to ',err)
      }
    }
}

exports.destroy = async (req,res)=>
{
    const Certificate_ID = req.body.Certificate_ID;
    try
    {
      const person = await Owners.findOne({where:{Certificate_ID: Certificate_ID}})
      if(!person)
      {
        res.send('This person is not exist')
      }
      else{
        owners.destroy({where:{Certificate_ID:person.Certificate_ID}
      })
      }
      res.redirect('/owners')
    }
    catch(err)
    {
      res.send('Error due to ',err)
    }
   
}
