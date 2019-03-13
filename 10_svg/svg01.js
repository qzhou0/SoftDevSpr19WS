/*
Qian Zhou
SoftDev pd07
K10 -- 
2019-03-13w
*/
/*----------code from LCT -----------*/
var pic = document.getElementById("vimage");
var clear=document.getElementById("but_clear")
var hit = false
pic.addEventListener('click',function(e){
    if (hit){
	e.preventDefault();
	hit=false
    }
    else{
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var x = e.offsetX
	var y = e.offsetY
	
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", 25);
	c.setAttribute("fill", "purple");
	c.setAttribute("stroke", "black");
	
	c.addEventListener('click',function(e){
	    
	    if (c.getAttribute('fill')=='olive'){
		c.remove();
	    }
	    else{
		c.setAttribute("fill","olive");
		hit= true
	    }
	
	});

	pic.appendChild(c);
    }

});


clear.addEventListener('click',function(){
    children = pic.children;
    for (i = 0;i<children.length;){
	children[i].remove();
    }
});
