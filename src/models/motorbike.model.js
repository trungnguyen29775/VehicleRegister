
module.exports = (sequelize, Sequelize) => {
    const Motorbikes = sequelize.define("motorbikes", {
        Name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      Vehicle_ID: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {
            model: 'vehicles', // 'fathers' refers to table name
            key: 'Vehicle_ID', // 'id' refers to column name in fathers table
         }
      },
      Brand:
      {
        type: Sequelize.STRING,
        allowNull:false
      },
      Color: {
        type: Sequelize.STRING,
        allowNull:false
      },
      Origin: {
        type: Sequelize.STRING,
        allowNull:false
      },
      Capacity: {
        type: Sequelize.STRING,
        allowNull:false
      },
    });
    return Motorbikes;
  };