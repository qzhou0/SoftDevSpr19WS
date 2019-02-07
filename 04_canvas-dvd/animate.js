// Smooth Sailing -- Ray Onishi, Qian Zhou
// SoftDev2 pd7
// K04 -- What is it saving the screen from?
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
  // Clears the canvas before generating every new frame
  clear();
  // Checking if the circle reaches the edge of the canvas
  // If it is at the edge, growing is set to false to make it shrink
  if (radius==c.width/2){
    growing=false;
  }
  // Creating the circle
  ctx.beginPath();
  ctx.fillStyle="#00ffff";
  ctx.arc(c.width/2, c.height/2,radius,0,2*Math.PI);
  ctx.stroke();
  ctx.fill();
  // If the circle is growing, increase radius by 1 on every frame
  if (growing){
    radius+=1;
  }
  // Otherwise decrease the radius by 1 on every frame
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

//stop
var stopIt=function(){
  window.cancelAnimationFrame(requestID);
};

stop.addEventListener('click',stopIt);

//k04
var dvd = document.getElementById("dvd");

var dvdLogoSetup=function(){
  window.cancelAnimationFrame(requestID);

  // Dimensions of the DVD logo
  var rectWidth=100; var rectHeight=50;

  var rectX = Math.floor(Math.random()*(c.width-rectWidth));
  var rectY=Math.floor(Math.random()*(c.height-rectHeight));
  console.log(rectX);

  var xVel=1;
  var yVel=1;

  var logo=new Image();
  logo.src="logo_dvd.jpg"

  var dvdLogo = function(){
    window.cancelAnimationFrame(requestID);
    clear();

    // If the dvd logo hits the left border or right border of the canvas
    if (rectX==c.width-rectWidth||rectX==0){
      // Negate the velocity in the x direction
      xVel*=-1;
    }
    // If the dvd logo hits the upper border or bottom border of the canvas
    if (rectY==0||rectY==c.height-rectHeight){
      // Negate the velocity in the y direction
      yVel*=-1;
    }

    // Drawing the logo
    ctx.drawImage(logo,rectX,rectY,rectWidth,rectHeight);

    // Shifting the position of the logo by x and y velocity respectively
    rectX+=xVel;rectY+=yVel;
    // console.log(rectX);

    requestID=window.requestAnimationFrame(dvdLogo);
  };

  dvdLogo();
};

dvd.addEventListener('click',dvdLogoSetup);
