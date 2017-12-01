//Dependencies
// ===========================================

//Sequelize package
var Sequelize = require("sequelize");

//Database connection
var sequelize = require("../config/connection.js");

//create a meals model
var Meal = sequelize.define("meal", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	mealtime: {
		type: Sequelize.STRING
	},
	foodEaten: {
		type: Sequelize.STRING
	},
	calories: {
		type: Sequelize.INTEGER
	},
	fullness: {
		type: Sequelize.STRING
	}
}, {
		timestamps: true
});

//sync with db
Meal.sync();

//export meals model
module.exports = Meal;