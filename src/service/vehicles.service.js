const db = require('../models')
const Vehicles = db.Vehicles
exports.create = async (req,res) => 
{
    try{
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
        if(!checkID)
        {
            res.send(`Vehicles with Vehicle_ID: ${vehicles.Vehicle_ID} already exist`)
        }
        else
        {
            await Vehicles.create(vehicles)
            res.redirect('/vehicles')
        }
    }
    catch(err)
    {
        console.log("Error due to ",err)
    }
}

exports.findAll = (req, res) => {
    Vehicles.findAll()
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
          res.redirect('/vehicles')
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
            res.redirect('/vehicles')
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
