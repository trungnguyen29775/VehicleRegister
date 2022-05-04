module.exports = (sequelize, Sequelize) => {
    const People = sequelize.define("people", {
      Identify_card_ID: {
        type: Sequelize.STRING,
        primaryKey:true
      },
      Name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      Dob: {
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      Address: {
        type: Sequelize.STRING,
        allowNull:false
      },
      Nationality: {
        type: Sequelize.STRING,
        allowNull:false
      },
      
    });
    return People;
  };