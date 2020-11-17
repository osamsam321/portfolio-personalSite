$(window).on('scroll', function(){
	if($(window).scrollTop()  > 580){
		$('#topNav').addClass("JsNavBackgroundColor");
		$('#topNav p').addClass('JsNavPColor');
		$('#topNav h5').addClass('JsNavH5Margin');
		$('#topNav p').addClass("JsNavPMargin");
	
	}
	else{
			$('#topNav').removeClass("JsNavBackgroundColor");
		$('#topNav p').removeClass('JsNavPColor');
		$('#topNav h5').removeClass('JsNavH5Margin').delay(2000);
		$('#topNav p').removeClass("JsNavPMargin").delay(2000);
		}
	if($(window).scrollTop() > 110){
		$('#topTitleName').fadeOut(500);
		$('#row1 h1').fadeOut(500);
			$('#row1 h2').fadeOut(500);
	}
	if($(window).scrollTop() < 100){
		$('#topTitleName').fadeIn(500);
		$('#row1 h1').fadeIn(500);
			$('#row1 h2').fadeIn(500);
	}
	
	});

$("#navHome").click(function(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

});
$("#navAbout").click(function(){
	document.body.scrollTop = 585;
	document.documentElement.scrollTop = 585;

});

$("#navGoals").click(function(){
	document.body.scrollTop = 1200;
	document.documentElement.scrollTop = 1200;

});
$("#navSkills").click(function(){
	document.body.scrollTop = 1600;
	document.documentElement.scrollTop = 1660;

});
$("#navPortfolio").click(function(){
	document.body.scrollTop = 1650;
	document.documentElement.scrollTop = 1650;

});

$("#topOdisho").click(function(){
	document.body.scrollTop = 585;
	document.documentElement.scrollTop = 585;

});
