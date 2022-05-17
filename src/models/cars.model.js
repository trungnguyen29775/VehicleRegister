
module.exports = (sequelize, Sequelize) => {
    const Cars = sequelize.define("cars", {
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
      HorsePower: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      EmptyWeight: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      Origin: {
        type: Sequelize.STRING,
        allowNull:false
      },
      SeatCapacity: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
    },
    {
      timestamps: false
    }
    );
    return Cars;
  };