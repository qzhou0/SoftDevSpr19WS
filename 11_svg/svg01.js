/*
Qian Zhou
SoftDev pd07
K11 --  Ask Circles [Change || Die] ¡­While On The Go
2019-03-15w
*/
/*----------code from LCT -----------*/
var pic = document.getElementById("vimage");
var clear=document.getElementById("but_clear");
var move = document.getElementById("ihuusthar");
var hit = false;//global var to signal if need to make a new one
var x=0,y=0;//global vars to signal if clicked a killing blow
var stop=false;
var requestID;

pic.addEventListener('click',function(e){

    if (hit){//hit once, no new one appears
	hit=false;
    }
    else{
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	
	if (x==0){//no killing blow made, need a new ad hoc
	    
	    x = e.offsetX;
	    //console.log(x);
	    y = e.offsetY;
	    //console.log(y);
	}

	c.addEventListener('click',function(e){
	    if (c.getAttribute('fill')=='olive'){//if is already olive, remove
		c.remove();
		var rect=pic.getBoundingClientRect();//random place
		x = Math.random()*rect.width;//new location
		y = Math.random()*rect.height;
	    }
	    
	    else{
		c.setAttribute("fill","olive");
		hit=true;
	    }
	});
	
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);

	c.setAttribute("vx", 1);
	c.setAttribute("vy", 1);

	//console.log(c.getAttribute('vx'));
	
	c.setAttribute("r", 25);
	c.setAttribute("fill", "purple");
	c.setAttribute("stroke", "black");

	pic.appendChild(c);
	x=y=0;//signals ready to accept new incomer
    }
});




clear.addEventListener('click',function(){
    children = pic.children;
    for (i = 0;i<children.length;){
	children[i].remove();
    }
});
var move_click_counter=0;
move.addEventListener('click',function(e){

    move_click_counter+=1;
    move_click_counter%=2;


    
    if (move_click_counter==1){
	//console.log('hello');
	window.cancelAnimationFrame(requestID);
	stop=false;
	requestID=window.requestAnimationFrame(veprim);
    }
    else{
	stop=true;
	window.cancelAnimationFrame(requestID);
    }

});



var veprim=function(){ //move
    window.cancelAnimationFrame(requestID);
    //console.log('ech sin hei');
    children = pic.children;

    if (stop){
	return;
    }
    if (children.length==0){
	return;
    }
    for (i = 0;i<children.length;i++){
	var xc = parseInt(children[i].getAttribute('cx'));
	var yc = parseInt(children[i].getAttribute('cy'));
	
	//console.log(xc);
	//console.log(yc);
	
	var r = children[i].getAttribute('r');

	var vx=parseInt(children[i].getAttribute('vx'));
	var vy=parseInt(children[i].getAttribute('vy'));
	if (xc<=r || xc>=500-r){
	    children[i].setAttribute('vx',vx*parseInt(-1));
	    //console.log("reverse?");
	}
	if (yc<=r || yc>=500-r){
	    children[i].setAttribute('vy',vy*parseInt(-1));
	    //console.log("reverse?");
	}
	
	vx =parseInt(children[i].getAttribute('vx'));
	vy =parseInt(children[i].getAttribute('vy'));

	//console.log(vx);
	//console.log(vy);
	
	children[i].setAttribute('cx',xc+vx);
	children[i].setAttribute('cy',yc+vy);
	
    }
    
    requestID=window.requestAnimationFrame(veprim);
};
