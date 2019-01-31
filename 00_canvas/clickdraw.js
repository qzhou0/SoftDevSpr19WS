/***********************
Qian Zhou
SoftDev2 pd07
K00 -- I See a Red Door...
2019-01-30
**************************/

// drawing on canvas 
var c = document.getElementById("slate");

var ctx = c.getContext("2d");

var rectangle = true;

c.addEventListener('click',function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if (rectangle){
	ctx.fillRect(x,y,50,100);
    }
    else{
	ctx.beginPath();
	ctx.ellipse(x,y,2,2,0,0,2*Math.PI);
	ctx.fill();
    }
    
});


//buttons (clear and rectangles)

var clear=document.getElementById("clear");
clear.addEventListener('click', function(){
    ctx.clearRect(0,0,600,600);
});

var s=document.getElementById("switch");
s.addEventListener('click',function(){
    rectangle=(!rectangle);
    if (rectangle){
	s.innerHTML="Now Rectangle";
    }
    else{
	s.innerHTML="Now Dot";
    }
});
		   
