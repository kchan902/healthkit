// ************************************
// CONNECTION TO MYSQL
// ************************************

//Dependencies
var Sequelize = require("sequelize");

//Create mySQL connection using sequelize
//Contains database information

var sequelize = new Sequelize ("databse name", "username", "password", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

//export connection to other files
module.exports = sequelize;

