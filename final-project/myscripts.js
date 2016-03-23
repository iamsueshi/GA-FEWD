$('input').click(function(event){
    event.preventDefault();
});

function calcMagic(){
	var lastqtr = $('#lastqtr').val();
	var currentqtr = $('#currentqtr').val();
	var smspend = $('#smspend').val();
	var magicnumber = $('#magicnumber').val();



	lastqtr = parseFloat(lastqtr);
	currentqtr = parseFloat(currentqtr);
	smspend = parseFloat(smspend);
	magicnumber = parseFloat(magicnumber);

	magicnumber = ((currentqtr-lastqtr)*4)/smspend
	$('.mnpopup').append('Magic Number: '+magicnumber);
	$('#magicnumber').val(magicnumber);	
	$('.mnpopup').css('margin', '20px 0px');
	$('.mnpopup').css('padding', '20px');

	advice(magicnumber);

};

function advice(number){
	if (number>0.7) {
		$('body').attr('class','spark');
		$('.mnpopup').append('<br><font color="black" size="4">Above Average! Spend more $ to accelerate growth.</font>');
	} else {
		console.log('sad face')
	}
}

$('#submit').click(calcMagic);

function calcGrowth(){
	var growthcurrent = $('#growthcurrent').val();
	var growthlast = $('#growthlast').val();
	var growthrate = $('#growthrate').val();

	growthcurrent = parseFloat(growthcurrent);
	growthlast = parseFloat(growthlast);
	growthrate = parseFloat(growthrate);

	growthrate = (growthcurrent/growthlast)-1
	console.log(growthrate);
	$('.grpopup').append('Growth Rate: '+growthrate+'x');
	$('#growthrate').val(growthrate);	
	$('.grpopup').css('margin', '20px 0px');
	$('.grpopup').css('padding', '20px');

};

$('#calc').click(calcGrowth);

