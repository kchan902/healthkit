$.get("/api/all", function(data){
	console.log(data);
	for (var i=0; i<data.length; i++){
		var well = $("<div>");
		well.addClass("well");
		well.attr("id", "meal-well-" + i);
		$("well").append(well);

		$("meal-well-" + i).append("<h2>" + (i + 1)+ ". " + data[i].mealtime + <h2>);
		$("meal-well-" + i).append("<h3>Food Eaten: " + data[i].foodEaten + "<h3>");
		$("meal-well-" + i).append("<h3>Calories: " + data[i].calories + "<h3>");
		$("meal-well-" + i).append("<h3>Fullness: " + data[i].fullness + "<h3>");


	}
});