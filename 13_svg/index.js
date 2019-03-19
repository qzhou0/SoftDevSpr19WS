

var data = [4, 8, 15, 16, 23, 42];
var width = 420;var barHeight = 20;

/*





var x = d3.scaleLinear().range([0,width]);*/

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 10*d3.max(data)]);//why use 420, not this?// 420]);





var chart=d3.select(".chart")
    .attr("width",width)
    .attr("height",barHeight*data.length);


/* don't know how to download data.tsv, w.o http

d3.tsv("data.tsv",type,function(error, data){//asynchronous downloading
    x.domain([0,d3.max(data,function(d){return d.value;})]);
    chart.attr("height",barHeight * data.length);

    var bar = chart.selectAll("g")
	.data(data)
      .enter().append("g")
	.attr("transform",function(d, i){return "translate(0,"+ i * barHeight + ")"; });

    bar.append("rect")
	.attr("width",x)
	.attr("height",barHeight-1);

    bar.append("text")
	.attr("x", function(d) { return x(d) - 3; })
	.attr("y", barHeight / 2)
	.attr("dy", ".35em")
	.text(function(d) { return d; });
    
});//close d3.tsv

function type(d){
    d.value=+d.value;// coerce to number
    return d
}
*/


var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform",function(d, i){return "translate(0,"+ i * barHeight + ")"; });

//Since there is exactly one rect and one text element per g element, we can append these elements directly to the g, without needing additional data joins. Data joins are only needed when creating a variable number of children based on data; here we are appending just one child per parent. --tutorial


bar.append("rect")
    .attr("width",x)
    .attr("height",barHeight-1);

bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });










/* JS div method

var chart = d3.select(".chart");//empty selection

var data = [4, 8, 15, 16, 23, 42];

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 10*d3.max(data)]);//why use 420, not this?// 420]);


//data join
var bar = chart.selectAll("div");//defines selection to which data will be joined

var barUpdate = bar.data(data);//selection.data

var barEnter = barUpdate.enter().append("div");//update and exit selections are empty, since returned selection is empty. enter selection represents new data

//selection operatores: e.g. attr, style, property
//value can be constant or function


barEnter.style("width", function(d) { return x(d) + "px"; });
barEnter.text(function(d) { return d; });
*/
