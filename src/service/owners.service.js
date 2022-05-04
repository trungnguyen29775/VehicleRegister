const Owners = require('../models/owners.model')

exports.create = (req,res) => 
{
    try{
    ;(async function()
    {
        const Owners = 
        {
            Certificate_ID:req.body.Certificate_ID,
            Identify_card_ID: req.body.Identify_card_ID,
            Certificate_ID: req.body.Certificate_ID,
            Date_Register: req.body.Date_Register,
            Address: req.body.Address,
        }
        const checkID=Owners.findOne({where:{Certificate_ID:Owners.Certificate_ID}})
        if(checkID!=null)
        {
            res.send(`Owners with Certificate_ID: ${Certificate_ID} already exist`)
        }
        else
        {
            Owners.create(Owners)
        }
    })()
    }
    catch(err)
    {
        console.log("Error due to ",err)
    }
}

exports.findAll = (req, res) => {
    Owners.findAll({
        attributes: ['Certificate_ID', 'Identify_card_ID','Vehicle_ID','Date_Register','Address','createAt','updateAt']
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Owners."
        });
      });
};

exports.update = (req,res)=>
{
    const Certificate_ID = req.body.Certificate_ID;
    Owners.update(req.body, {
      where: { Certificate_ID: Certificate_ID }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Owner was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Owner with id=${id}. Maybe Owner was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Vehicle with Certificate_ID=" + Certificate_ID
        });
      });
}

exports.destroy = (req,res)=>
{
    const Certificate_ID = req.body.Certificate_ID;
    Owners.destroy({
        where: { Certificate_ID: Certificate_ID }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Owner was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Owner with Certificate_ID=${Certificate_ID}. Maybe Owner was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Vehicle with Certificate_ID=" + Certificate_ID
          });
        });
}
