const db = require('../models')
const Motorbikes = db.Motorbikes  
exports.create = async (req,res) => 
{
    try{
    {
        const motorbikes = 
        {   
            Name: req.body.Name,
            Vehicle_ID:req.body.Vehicle_ID,
            Brand: req.body.Brand,
            Color: req.body.Color,
            Origin: req.body.Origin,
            Capacity: req.body.SeatCapacity,

        }
        const checkID=Motorbikes.findOne({where:{Vehicle_ID:motorbikes.Vehicle_ID}})
        if(!checkID)
        {
            res.send(`Motorbikes with Vehicle_ID: ${Vehicle_ID} already exist`)
        }
        else
        {
            await Motorbikes.create(motorbikes)
            res.redirect('/motorbikes')
        }
    }
  }
    catch(err)
    {
        console.log("Error due to ",err)
    }
}

exports.findAll = (req, res) => {
    Motorbikes.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving motorbikes."
        });
      });
};

exports.update = (req,res)=>
{
    const Vehicle_ID = req.body.Vehicle_ID;
    Motorbikes.update(req.body, {
      where: { Vehicle_ID: Vehicle_ID }
    })
      .then(num => {
        if (num == 1) {
          res.redirect('/motorbikes');
        } else {
          res.send({
            message: `Cannot update motorbike with id=${id}. Maybe motorbike was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating motorbike with Vehicle_ID=" + Vehicle_ID
        });
      });
}

exports.destroy = (req,res)=>
{
    const Vehicle_ID = req.body.Vehicle_ID;
    motorbikes.destroy({
        where: { Vehicle_ID: Vehicle_ID }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "motorbike was deleted successfully!"
            });
          } else {
            res.redirect('/motorbikes');
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete motorbike with Vehicle_ID=" + Vehicle_ID
          });
        });
}
