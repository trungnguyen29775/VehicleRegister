const db = require('../models')
const People = db.People
exports.create = (req,res) => 
{
  
    try{
    ;(async function()
    {
        const people = 
        {
            Identify_card_ID:req.body.Identify_card_ID,
            Name: req.body.Name,
            Dob: req.body.Dob,
            Address: req.body.Address,
            Nationality: req.body.Nationality,
        }
        const checkID=People.findOne({where:{Identify_card_ID:people.Identify_card_ID}})
        if(checkID.Identify_card_ID=="")
        {
            res.send(`Person with Identify_card_ID: ${people.Identify_card_ID} already exist`)
        }
        else
        {
            People.create(people)
        }
    })()
    }
    catch(err)
    {
        console.log("Error due to ",err)
    }
}

exports.findAll = (req, res) => {
    People.findAll({
        attributes: ['Identify_card_ID', 'Name','Dob','Address','Nationality','createAt','updateAt']
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving people."
        });
      });
};

exports.update = (req,res)=>
{
    const Identify_card_ID = req.body.Identify_card_ID;
    Tutorial.update(req.body, {
      where: { Identify_card_ID: Identify_card_ID }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "People was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update People with id=${id}. Maybe People was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating People with Identify_card_ID=" + Identify_card_ID
        });
      });
}

exports.destroy = (req,res)=>
{
    const Identify_card_ID = req.body.Identify_card_ID;
    People.destroy({
        where: { Identify_card_ID: Identify_card_ID }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "People was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete People with id=${Identify_card_ID}. Maybe People was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete People with Identify_card_ID=" + Identify_card_ID
          });
        });
}
