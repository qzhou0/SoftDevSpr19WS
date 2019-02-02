// team Northpoint (Ivan Zhang, Qian Zhou)
// SoftDev2 pd7
// K #02: Connecting the Dots
// 2019-02-01


c = document.getElementById("playground");
ctx = c.getContext("2d");

var clear = document.getElementById("clear");

clear.addEventListener( "click" , function() {

    ctx.clearRect( 0, 0, c.width, c.height );
    //event.preventDefault();
    ctx.beginPath();

});

c.addEventListener( "click" , function(event) {
    var x = event.offsetX
    var y = event.offsetY
    
    ctx.lineTo(x, y);//draw a line from last starting point
    ctx.stroke();
    ctx.beginPath();//circumvent fill() that may result in space between lines filling up
    ctx.fillStyle="#ff0000"
    ctx.ellipse( x, y, 10, 10, 0, 0, 2 * Math.PI );
    ctx.fill();
    ctx.beginPath();//prevent stroke() above from drawing border of circle
    ctx.moveTo(x,y)//go back to center of circle


});
