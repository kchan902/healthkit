$("#add-btn").on("click", function(event){
	event.preventDefault();

	var newMeal = {
		mealtime: $("mealtime").val().trim(),
		foodEaten: $("foodEaten").val().trim(),
		calories: $("calories").val().trim(),
		fullness: $("fullness").val().trim()
	};

	$.post("/api/new", newMeal)
	.done(function(data){
		console.log(data);
	});

	$("mealtime").val("");
	$("foodEaten").val("");
	$("calories").val("");
	$("fullness").val("");
});