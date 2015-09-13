function fotoLeft(counter,maximg,imgset,imgsetcounter) 
{
	if(counter >1)
	{
		counter -= 1;
		imgset.src = "img/" + counter +".jpg";
		document.getElementById('number'+imgsetcounter).innerHTML = counter +"/"+maximg;
	}
}
function fotoRight(counter,maximg,imgset,imgsetcounter)
{
		if(counter <maximg)
	{
		counter += 1;
		imgset.src = "img/" + counter +".jpg";
		document.getElementById('number'+imgsetcounter).innerHTML = counter +"/"+maximg;
	}
}