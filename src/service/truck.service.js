const Trucks = require('../models/trucks.model')

exports.create = (req,res) => 
{
    try{
    ;(async function()
    {
        const Trucks = 
        {   
            Name: req.body.Name,
            Vehicle_ID:req.body.Vehicle_ID,
            Brand: req.body.Brand,
            Color: req.body.RegistrationDate,
            HorsePower: req.body.HorsePower,
            EmptyWeight: req.body.EmptyWeight,
            Origin: req.body.Origin,
            SeatCapacity: req.body.SeatCapacity,

        }
        const checkID=Trucks.findOne({where:{Vehicle_ID:Trucks.Vehicle_ID}})
        if(checkID!=null)
        {
            res.send(`Trucks with Vehicle_ID: ${Vehicle_ID} already exist`)
        }
        else
        {
            Trucks.create(Trucks)
        }
    })()
    }
    catch(err)
    {
        console.log("Error due to ",err)
    }
}

exports.findAll = (req, res) => {
    Trucks.findAll({
        attributes: ['Name', 'Vehicle_ID','Brand','Color','HorsePower','EmptyWeight','Origin','SeatCapacity','createAt','updateAt']
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Trucks."
        });
      });
};

exports.update = (req,res)=>
{
    const Vehicle_ID = req.body.Vehicle_ID;
    Trucks.update(req.body, {
      where: { Vehicle_ID: Vehicle_ID }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Truck was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Truck with id=${id}. Maybe Truck was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Truck with Vehicle_ID=" + Vehicle_ID
        });
      });
}

exports.destroy = (req,res)=>
{
    const Vehicle_ID = req.body.Vehicle_ID;
    Trucks.destroy({
        where: { Vehicle_ID: Vehicle_ID }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Truck was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Truck with Vehicle_ID=${Vehicle_ID}. Maybe Vehicle was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Truck with Vehicle_ID=" + Vehicle_ID
          });
        });
}
