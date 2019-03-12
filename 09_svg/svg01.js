/*
Qian Zhou
SoftDev pd0
K09 -- basic SVG work
2019-03-13w
*/
/*----------code from LCT -----------*/
var pic = document.getElementById("vimage");
var clear=document.getElementById("but_clear")
var lastx = null
var lasty = null

pic.addEventListener('click',function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var x = e.offsetX
    var y = e.offsetY
    if (lastx){
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1",lastx);
	l.setAttribute("y1",lasty);
	l.setAttribute("x2",x);
	l.setAttribute("y2",y);
	l.setAttribute("style",'stroke:rgb(0,0,0);stroke-width:2');
	pic.appendChild(l);
    }
    

    
    
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");

    pic.appendChild(c);

    lastx=x
    lasty=y
});

clear.addEventListener('click',function(){
    
    children = pic.children;
    //console.log(children)
    //console.log(children.length)
    for (i = 0;i<children.length;){
    	//console.log(children[i])
	children[i].remove();
	
    }
    //console.log(children)
    //console.log(children.length)
    lastx=lasty=null
    //console.log(pic.children )
});
