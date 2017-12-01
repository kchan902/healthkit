//********************************************
//routes for displaying and saving data to db
//********************************************

//Dependencies
//========================================

//require the meal model
var Meal = require("../models/meal.js");

//routes
//=========================================
module.exports = function(app){
	//show all meals
	app.get("/api/all", function(req, res){
		Meal.findAll({}).then(function(results){
			res.json(results);
		});
	});

	//show a specific meal based on food eaten
	app.get("/api/:meal", function(req, res){
		if (req.params.meal){
			Meal.findAll({
				where: {
					foodEaten: req.params.meal
				}
			}).then(function(results){
				res.json(results);
			});
		}
	});

	//show a specific meal based on mealtime
	app.get("/api/:meal", function(req, res){
		if (req.params.meal){
			Meal.findAll({
				where: {
					mealtime: req.params.meal
				}
			}).then(function(results){
				res.json(results);
			});
		}
	});	

	//add a meal
	app.post("/api/new", function(req, res){

		Meal.create({
			mealtime: req.body.mealtime,
			foodEaten: req.body.foodEaten,
			calories: req.body.calories,
			fullness: req.body.fullness
		});
	})

	//delete a meal
	app.post("/api/delete", function(req, res){

		Meal.destroy({
			where: {
				id: req.body.id
			}
		});
	});

	//search for food
};