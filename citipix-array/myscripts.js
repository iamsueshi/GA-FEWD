$(document).ready(function(){
	//prevents a page from reloading after you select an option
	$('#city-type').click(function(){
		event.preventDefault();
	});

	//define the array as cities
	var cities = ['NYC','SF','LA','ATX','SYD'];
	console.log(cities.length)

	//run loop 5 times
	for (var i = 0; i < cities.length; i++) {
		console.log(cities[i])

		//add more options to the html. add one city at a time
		$('#city-type').append('<option>' + cities[i] + '</option>')
	};


	function cityPic(){
		
		//defines the city variable and stores the text in #city-type
		var city = $('#city-type').val();
		
		// Check to see the city variable
		console.log("var city = " + city)
		
		//if statement to see if 1 of 3 new york combinations match
		if (city === 'NYC') {
			
			//Check to see if the city matches
			console.log("The city input matches")

			//takes the body css element and selects the attribute of class. changes the class attribute value to nyc. it will look like body .nyc in html
			$('body').attr('class','nyc')
		};

		if (city === 'SF') {
			$('body').attr('class','sf')
		};

		if (city === 'LA') {
			$('body').attr('class','la')
		};

		if (city === 'ATX') {
			$('body').attr('class','austin')
		};

		if (city === 'SYD') {
			$('body').attr('class','sydney')
		};
		
	}

	//when you change the drop down, run the cityPic function
	$('#city-type').change(cityPic);

})
