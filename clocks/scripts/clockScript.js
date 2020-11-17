var setTime = setInterval(timeFunction,  1000);
function timeFunction()
{

	var time = new Date();
	document.getElementById('currentTime').innerHTML = time.toLocaleTimeString()
}