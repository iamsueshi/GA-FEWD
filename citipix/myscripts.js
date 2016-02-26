$(document).ready(function(){
	//prevents a page from reloading after you hit submit
	$('#submit-btn').click(function(){
		event.preventDefault();
	});
	function cityPic(){
		//defines the city variable and stores the text in #city-type
		var city = $('#city-type').val();
		
		// Check to see the city variable
		console.log("var city = " + city)
		
		//if statement to see if 1 of 3 new york combinations match
		if (city === 'New York' || city === 'New York City' || city === 'NYC') {
			
			//Check to see if the city matches
			console.log("The city input matches")

			//takes the body css element and selects the attribute of class. changes the class attribute value to nyc. it will look like body .nyc in html
			$('body').attr('class','nyc')
		};

		if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
			$('body').attr('class','sf')
		};

		if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
			$('body').attr('class','la')
		};

		if (city === 'Austin' || city === 'ATX') {
			$('body').attr('class','austin')
		};

		if (city === 'Sydney' || city === 'SYD') {
			$('body').attr('class','sydney')
		};
		
	}

	$('#submit-btn').click(cityPic);

})
