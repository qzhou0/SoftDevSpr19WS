/*
    Qian Zhou
    SoftDev2 pd01
    K14 -- Learning to Swim
    2019-03-20
*/
//https://bost.ocks.org/mike/selection/


var selection = d3.select("body");
//selection[0] and the node as selection[0][0] return undefined

var h2s= d3.selectAll("h2");

var trs_td = d3.selectAll("tr").selectAll("td");
//tr lies in parent, td in groups
//children can be accessed via parents, e.g. trs_td._parents[1].children[0]
//can also access parents? parentNode

var trs_td_span=d3.selectAll("tr").selectAll("td").selectAll("span");




//selection.attr or selection.style fxn is called for each element; i is the within-group index rather than the within-selection index. -- HSW


// select preserves the existing grouping. 1-1-1-1. select propagates data from parent to child, whereas selectAll does not (hence the need for a data-join)! -- HSW

var sections = d3.selectAll("section");//.append("p"); // parentnode still doc element since selectAll not called to regroup...?
var section_aside=d3.selectAll("section").select("aside");
//null elements are still take a slot in selectAll





//document.body.__data__ = 42;
//equivalent to this:
d3.select("body").datum(42).append('h1');
//child inherits only by appending after parent has the data, I think

//data

//join by index
var numbers = [4, 5, 18, 23, 42];
var divs= d3.selectAll("div").data(numbers);

//join by key value
var letters = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];
function name(d) {
  return d.name;
}

divs = d3.selectAll("div").data(letters);

//divs = d3.selectAll("div").data(letters, name);
//divs = d3.selectAll("div").data(letters, (d)=>{return name(d);});
//error:
//0: Unable to get property 'name' of undefined or null reference


var matrix = [
  [ 0,  1,  2,  3],
  [ 4,  5,  6,  7],
  [ 8,  9, 10, 11],
  [12, 13, 14, 15]
];

//selection.data defines data per-group rather than per-element


//selection.data -- update
//selection.enetr -- enter
//selection.exit -- exit

//----------------------completely untested stuff
//var vowel=['Y','E','A','O','I']

//var div = d3.selectAll("div").data(vowels, name);

//div.exit();
//preserves original order, may be useful for pre-removal stimulation???

//div.enter();
//no corresponding element, form enter; is a subclass of selection, unlike update/exit     contain placeholder objects with a __data__ property


//enter.append has a convenient side-effect: it replaces null elements in the update selection with the newly-created elements from the enter selection. Thus, after enter.append, the update selection is modified to contain both entering and updating elements
