window.addEventListener("load",function(){

var maximg = 4;
var counter1 = 1;
var counter2 = 1;
var counter3 = 1;

var imgset;
var imgsetcounter;

var left1 = document.getElementById('left1');
var right1 = document.getElementById('right1');
var image1 = document.getElementById('images1');
var number1 = document.getElementById('number1');

var left2 = document.getElementById('left2');
var right2 = document.getElementById('right2');
var image2 = document.getElementById('images2');
var number2 = document.getElementById('number2');

var left3 = document.getElementById('left3');
var right3 = document.getElementById('right3');
var image3 = document.getElementById('images3');
var number3 = document.getElementById('number3');

left1.addEventListener('click',function()
	{
		imgset = image1;
		imgsetcounter = 1;
		checkCounter();
		var R1 = new fotoLeft(counter1,maximg,imgset,imgsetcounter);
		counter1-=1;
	});
right1.addEventListener('click',function()
	{
		imgset = image1;
		imgsetcounter = 1;
		checkCounter();
		var R1 = new fotoRight(counter1,maximg,imgset,imgsetcounter);
		counter1+=1;
	});

left2.addEventListener('click',function()
	{
		imgset = images2;
		imgsetcounter = 2;
		checkCounter();
		var R1 = new fotoLeft(counter2,maximg,imgset,imgsetcounter);
		counter2-=1;
	});
right2.addEventListener('click',function()
	{
		imgset = image2;
		imgsetcounter = 2;
		checkCounter();
		var R1 = new fotoRight(counter2,maximg,imgset,imgsetcounter);
		counter2+=1;
	});

left3.addEventListener('click',function()
	{
		imgset = images3;
		imgsetcounter = 3;
		checkCounter();
		var R1 = new fotoLeft(counter3,maximg,imgset,imgsetcounter);
		counter3-=3;
	});
right3.addEventListener('click',function()
	{
		imgset = image3;
		imgsetcounter = 3;
		checkCounter();
		var R1 = new fotoRight(counter3,maximg,imgset,imgsetcounter);
		counter3+=1;
	});
function checkCounter()
{
	if(counter1 < 1)
	{
		counter1 = 1
	}
	else if (counter1 > maximg)
	{
		counter1 = maximg;
	}
	if(counter2 < 1)
	{
		counter2 = 1
	}
	else if (counter2 > maximg)
	{
		counter2 = maximg;
	}
	if(counter3 < 1)
	{
		counter3 = 1
	}
	else if (counter3 > maximg)
	{
		counter3 = maximg;
	}	
}
});