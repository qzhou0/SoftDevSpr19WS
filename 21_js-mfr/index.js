/*
Qian Zhou
SoftDev2 pd07
K#21 -- Onions, Bell Peppers, and Celery, Oh My!  JS and the Holy Trinity
2019-04-29
*/


var Prange=(L)=>{
    L=L.map(function(n){return parseFloat(n)});

    var h= L.reduce(function(a,b){if (b<a){return a}
				  else {return b}
				 });
    var lo= L.reduce(function(a,b){if (b>a){return a}
				  else {return b}
				 });
    var sum=L.reduce(function(a,b){return a+b});
    var avrg=sum/L.length;
    console.log(h,lo,avrg)
    return (h-lo)/avrg;
};
var median=(L)=>{
    L=L.map(function(n){return parseFloat(n)});
    return L[parseInt(L.length/2)];
};

var Phigher=(L)=>{
    return L.filter(function(n)
		    {return (parseFloat(n) > 10)}).length
};
//decided to use API since it is said "import data into a JS file as simiply/cleanly/efficiently as possible... this is not an excercise in reading data from a file". Not sure if this violates NO WEB SERVER clause since I assume that refers to flask?

var f = fetch("https://data.cityofnewyork.us/resource/ihfw-zy9j.json")
    .then(function(v){
	console.log(v);
	return v.json();
    })
    .then(function(myJson){
	var enrol=[]
	var pasian=[]
	var pblack=[]

	for (var entry in myJson){
	   // console.log(myJson[entry])
	    enrol.push(myJson[entry].total_enrollment);
	    pasian.push(myJson[entry].asian_per);
	    pblack.push(myJson[entry].black_per);
	}
	console.log(enrol);
	//console.log(pasian);
	//console.log(pblack);
	PRasian=Prange(pasian);
	PRblack=Prange(pblack);
	document.getElementById('pra').innerHTML = PRasian*100 +"% is the Percent Range of Asians in each school\r\n"
	document.getElementById('prb').innerHTML= PRblack*100 +"% is the Percent Range of Blacks in each school\r\n"

	PHasian=Phigher(pasian);
	PHblack=Phigher(pblack);


	document.getElementById('pbht').innerHTML = PHasian +" is the amount of schools with more than 10% Blacks\r\n";
	document.getElementById('paht').innerHTML= PHblack +" is the amount of schools with more than 10% Asians\r\n";
	document.getElementById("men").innerHTML=median(enrol)+" is the median amount of enrollment in each school";
	document.getElementById('mb').innerHTML=median(pblack)+"% is the median percent of blacks in each school";
	document.getElementById('ma').innerHTML=median(pasian)+"% is the median percent of asians in each school";
    });




//var fi=JSON.parse(allText);


