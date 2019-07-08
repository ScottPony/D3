var w = 600;
var h = 250;
var padding = 20;
//define SVG

var dataset = [];
for (var i = 0; i < 20; i++) {
  var Num1 = 5 + Math.floor(Math.random() * 480); //產生第一個數值
  var Num2 = 5 + Math.floor(Math.random() * 230); //產生第二個數值
  dataset.push([Num1, Num2]); //兩個合併成一個陣列
}
console.log(dataset);
//test if dataset be correct create

var Xmax = d3.max(dataset, function(a) {
    return a[0];
  }),
  Xmin = d3.min(dataset, function(a) {
    return a[0];
  }),
  Ymax = d3.max(dataset, function(a) {
    return a[1];
  }),
  Ymin = d3.min(dataset, function(a) {
    return a[1];
  });
// console.log(Xmax);

var xScale = d3.scaleLinear() //linear scale for x-Axis
  .domain([Xmax, Xmin]) //input range
  .range([padding, w - padding]); //output range

var yScale = d3.scaleLinear()
  .domain([Ymax, Ymin])
  .range([h - padding, padding]);

var svg = d3
  .select(".demo_scale")
  .append("svg")
  .attr("width", w)
  .attr("height", h);
//Create SVG

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", function(d) {
    return xScale(d[0]);
  })
  .attr("cy", function(d) {
    return yScale(d[1]);
  })
  .attr("r", function(d) {
    return Math.sqrt(h - d[1]);
  })
  .attr("fill", function(d) {
    return d3.hsl(d[0] % 360, 0.6, 0.6);
  });

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) {
    return d[0] + "," + d[1];
  })
  .attr("x", function(d) {
    return xScale(d[0]);
  })
  .attr("y", function(d) {
    return yScale(d[1]);
  })
  .attr("fill", "red")
  .attr("font-size", "10px");
