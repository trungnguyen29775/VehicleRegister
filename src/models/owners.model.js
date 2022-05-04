module.exports = (sequelize, Sequelize) => {
    const Owners = sequelize.define("owners", {
        Certificate_ID: {
            type: Sequelize.STRING,
            primaryKey:true
          },
        Identify_card_ID: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {
            model: 'people', // 'fathers' refers to table name
            key: 'Identify_card_ID', // 'id' refers to column name in fathers table
         }
      },
      Vehicle_ID: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {
            model: 'vehicles', // 'fathers' refers to table name
            key: 'Vehicle_ID', // 'id' refers to column name in fathers table
         }
      },
      Date_Register:
      {
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      Address:
      {
        type: Sequelize.STRING,
        allowNull:false
      },
    });
    return Owners;
  };