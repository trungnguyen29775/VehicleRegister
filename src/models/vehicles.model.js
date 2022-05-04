module.exports = (sequelize, Sequelize) => {
    const Vehicles = sequelize.define("vehicles", {
        Vehicle_ID: {
            type: Sequelize.STRING,
            primaryKey:true
          },
        Name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      CertificateID:
      {
          type:Sequelize.STRING,
          reference:
          {
              model:'owner',
              key:'CertificateID'
          }
      },
      RegistrationDate:
      {
        type: Sequelize.DATEONLY ,
        allowNull:false
      },
      Type: {
        type: Sequelize.STRING,
        allowNull:false
      },
      License_plate: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
    });
    return Vehicles;
  };