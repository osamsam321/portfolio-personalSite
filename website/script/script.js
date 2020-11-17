var backgroundImgWrapper = document.getElementById('background_img_wrapper');
var backgroundImg = document.getElementById('mainImg');
var personalImgWidth = 474;
var personalImgHeight = 710;

var imageWidth = 1920;
function resize()
{
	var OdiPic = document.getElementById("personalImg");
	OdiPic.style.height = personalImgHeight + "px";
	OdiPic.style.width = personalImgWidth + "px";
	OdiPic.style.margin = "50px 0px 0px 50vw";

	if(imageWidth < window.innerWidth)
	{
		backgroundImgWrapper.style.margin = "0px 0px 0px " + ((window.innerWidth - imageWidth)  / 2) + "px"; 
		// backgroundImg.style.margin = "10px 0px 0px " + ((window.innerWidth - imageWidth)  / 2) + "px"; 
	}
	else
	{
		backgroundImgWrapper.style.margin = "0px 0px 0px 0px"; 
		 //backgroundImg.style.margin = "10px 0px 0px 0px"; 
	}
} 
function doResize() {
	resize();
}
	window.addEventListener("load", doResize);
	window.addEventListener("resize", doResize);

