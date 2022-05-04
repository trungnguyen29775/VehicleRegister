const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.People = require("./people.model.js")(sequelize, Sequelize);
db.Vehicles = require("./vehicles.model.js")(sequelize, Sequelize);
db.Owners = require("./owners.model.js")(sequelize, Sequelize);

db.Cars = require("./cars.model.js")(sequelize, Sequelize);
db.Trucks = require("./trucks.model.js")(sequelize, Sequelize);
db.Motorbikes = require("./motorbike.model.js")(sequelize, Sequelize);

module.exports = db;