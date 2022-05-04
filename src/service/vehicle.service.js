const Vehicles = require('../models/vehicles.model')

exports.create = (req,res) => 
{
    try{
    ;(async function()
    {
        const vehicles = 
        {
            Vehicle_ID:req.body.Vehicle_ID,
            Name: req.body.Name,
            CertificateID: req.body.CertificateID,
            RegistrationDate: req.body.RegistrationDate,
            Type: req.body.Type,
            License_plate: req.body.License_plate,
        }
        const checkID=Vehicles.findOne({where:{Vehicle_ID:vehicles.Vehicle_ID}})
        if(checkID!=null)
        {
            res.send(`Vehicles with Vehicle_ID: ${Vehicle_ID} already exist`)
        }
        else
        {
            Vehicles.create(vehicles)
        }
    })()
    }
    catch(err)
    {
        console.log("Error due to ",err)
    }
}

exports.findAll = (req, res) => {
    Vehicles.findAll({
        attributes: ['Vehicle_ID', 'Name','CertificateID','RegistrationDate','Type','License_plate','createAt','updateAt']
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving vehicles."
        });
      });
};

exports.update = (req,res)=>
{
    const Vehicle_ID = req.body.Vehicle_ID;
    Vehicles.update(req.body, {
      where: { Vehicle_ID: Vehicle_ID }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Vehicle was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Vehicle with id=${id}. Maybe Vehicle was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Vehicle with Vehicle_ID=" + Vehicle_ID
        });
      });
}

exports.destroy = (req,res)=>
{
    const Vehicle_ID = req.body.Vehicle_ID;
    Vehicles.destroy({
        where: { Vehicle_ID: Vehicle_ID }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Vehicle was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Vehicle with Vehicle_ID=${Vehicle_ID}. Maybe Vehicle was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Vehicle with Vehicle_ID=" + Vehicle_ID
          });
        });
}
