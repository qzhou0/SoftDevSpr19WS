/*
Qian Zhou
SoftDev pd07
K10 -- 
2019-03-13w
*/
/*----------code from LCT -----------*/
var pic = document.getElementById("vimage");
var clear=document.getElementById("but_clear");
var hit = false;//global var to signal if need to make a new one
var x=0,y=0;//global vars to signal if clicked a killing blow

pic.addEventListener('click',function(e){

    if (hit){//hit once, no new one appears
	hit=false;
    }
    else{
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	
	if (x==0){//no killing blow made, need a new ad hoc
	    console.log('x=0');
	    x = e.offsetX;
	    y = e.offsetY;
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
