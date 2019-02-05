1//  -- Ray Onishi, Qian Zhou
// SoftDev2 pd7
// K #03: 
// 2019-02-06


c = document.getElementById("playground");
ctx = c.getContext("2d");


var circle=document.getElementById("circle");
var stop = document.getElementById("stop");

var clear = function(e){
    ctx.clearRect( 0, 0, c.width, c.height );
};

var requestID;
var radius=0;
var growing=true;

var draw=function(){
    clear();
    if (radius==c.width/2){
	growing=false;
    }
    ctx.beginPath();
    ctx.fillStyle="#00ffff";
    ctx.arc(c.width/2, c.height/2,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    if (growing){
	radius+=1;
	
    }
    else{
	radius-=1;
	if (radius==0){
	    growing=true;
	}
    }
    
    requestID=window.requestAnimationFrame(draw);
    //console.log(requestID);
};



circle.addEventListener( "click" , function(){
    window.cancelAnimationFrame(requestID);//making sure does not go double speed
    requestID=window.requestAnimationFrame(draw);
});

var stopIt=function(){
    
    window.cancelAnimationFrame(requestID);
    
};

stop.addEventListener('click',stopIt);




