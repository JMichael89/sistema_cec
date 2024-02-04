const Sequelize = require("sequelize");
const sequelize = new Sequelize('sistema_cec', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize,
    sequelize
}