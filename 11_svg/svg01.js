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
var ngaziwa=document.getElementById('ngaziwa');


var hit = false;//global var to signal if need to make a new one
var x=0,y=0;//global vars to signal if clicked a killing blow
var stop=false;
var requestID;
var badarea=[];

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
		for (i=badarea.length-1;i>=0;i--){
		    //console.log(badarea);
		    //console.log(c.getAttribute('cx'));
		    if (badarea[i][0]==c.getAttribute('cx') && badarea[i][1]== c.getAttribute('cy')){
			badarea.splice(i,1);
			//console.log(badarea);
			break;
		    }
		}
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
    badarea=[];
});
var move_click_counter=0;
move.addEventListener('click',function(e){

    //move_click_counter+=1;
    //move_click_counter%=2;
    move_click_counter=1;

    
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
	//console.log('aahaa');
	//console.log(badarea.length);
	for (j=0;j<badarea.length;j++){
	    //console.log(badarea.length);
	    var x0=parseInt(badarea[j][0]);
	    var y0=parseInt(badarea[j][1]);
	    var a2=Math.pow(x0-xc,2);
	    var b2=Math.pow(y0-yc,2);
	    //console.log('aahaa');
	    if (Math.sqrt(a2+b2)<r){
		children[i].setAttribute('vx',vx*parseInt(-1));
		children[i].setAttribute('vy',vy*parseInt(-1));
		console.log('asdsa');
	    }
	    
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


ngaziwa.addEventListener('click',function(e){
    children=pic.children
    for (i = 0;i<children.length;i++){
	if (Math.random()<.5){
	    
	    children[i].remove();
	}
	else if (Math.random()<.25){
	    badarea.push([children[i].getAttribute('cx'),children[i].getAttribute('cy')]);
	    children[i].setAttribute('vx',0);
	    children[i].setAttribute('vy',0);
	}
	    

	
    }
    if (move_click_counter==1){
	move_click_counter+=1;
	move_click_counter%=2;
    }
    window.cancelAnimationFrame(requestID);

    
});

