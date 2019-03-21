/*
    Qian Zhou
    SoftDev2 pd01
    K15 -- Scattered... or: Smothered, Covered, Chunked, Diced, Peppered, Capped, Topped & Country
    2019-03-21
*/

var width = 420;
var height = 420;
var offset=20;
//want x, y value to be scaled accordinng to frame
// var unitHeight = height/"max of height";
// var unitWidth = width/"max of width";

//from chem lab
data=[{ concentration : .00000201, absorbance: .055 },
      { concentration : .00000402, absorbance: .062 },
      { concentration : .00000804, absorbance: .140 },
      { concentration : .0000161, absorbance: .350 },
      { concentration : .0000201, absorbance: .472 },
      { concentration : 0, absorbance: 0 }
      
      ]

var heightScale=(height-offset)/d3.max(data,function(d){return d.absorbance;})-10;
console.log(heightScale);
var widthScale=(width-offset)/d3.max(data,function(d){return d.concentration;})-100;
console.log(widthScale);

var chart = d3.select(".chart").attr("width",width).attr('height',height);


var plot = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform",function(d,i){return "translate("+(offset+d.concentration*widthScale)+","+ (height - d.absorbance*heightScale+offset)+")";});

plot.append("circle")
    .attr('r',5);

plot.append("text")
    .attr("x",function(d){return d.concentration;})
    .attr("y",function(d){return d.absorbance;})
    .text(function(d){return d.concentration +","+d.absorbance;});

/*var axes = ['x','y']
var axes1 = chart.selectAll("g")
    .data(axes)
  .enter().append("g")
    .attr("tranform",function(d,i){return "translate(10,10)";});

axes1.append("rect")
    .attr("height",function(d,i){
	return i*height;
    })
    .attr("width",function(d,i){
	return (1-i)*width;
    });
*/
chart.append("g").attr("transform","translate(10,410)")
    .append("rect")
    .attr("width",width)
    .attr("height",3);
///why is still at 10,10?

chart.append("g").attr("transform",function(d,i){return "translate(10,10)";})
    .append("rect")
        .attr("width",3)
        .attr("height",height);
