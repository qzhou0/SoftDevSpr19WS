/***********************
Northpoint--Ivan Zhang, Qian Zhou
SoftDev2 pd07
K01 -- ...and I want to Paint It Better
2019-01-31
**************************/

// drawing on canvas 
var c = document.getElementById("slate");
var ctx = c.getContext("2d");//get context of canvas

var rectangle = true;

c.addEventListener('click',function(e){

    //e.preventDefault(); // Disable activation of event
    var x = e.offsetX;//event.offsetX/Y=>coordinates of mouse relative to stuff
    var y = e.offsetY;
    if (rectangle){//rectangle

	ctx.fillRect(x,y,50,100);//(x,y,width, height)
    }
    else{//ellipse
	ctx.beginPath();//empty list of saved subpaths
	ctx.ellipse(x,y,10,10,0,0,2*Math.PI);//(x,y,a,b,rotation,start_theta, end_theta)
	ctx.fill();//fills in stuff drawn before
    }
    
});


//buttons (clear and rectangles)
//clear canvas
var clear=document.getElementById("clear");

clear.addEventListener('click', function(){

    ctx.clearRect(0,0,c.width,c.height);
});

//toggle--switch between rects and not rect
var s=document.getElementById("switch");

s.addEventListener('click',function(){

    rectangle=(!rectangle);
});
		   
