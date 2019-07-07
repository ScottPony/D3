// javascript
// var dataset = [5, 10, 6, 12, 18, 3, 4, 12, 16];

// var svgWidth = 500,
//   svgHeight = 300,
//   barPadding = 5;
// var barWidth = svgWidth / dataset.length;

// var svg = d3
//   .select("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

// d3.select(".demo")
//   .selectAll("div")
//   .data(dataset) // 將資料加入至 div
//   .enter() // return data
//   .append("div") // 這邊加入的div已經有包含data
//   .attr("class", "bar") //套用class
//   .style("height", function(d) {
//     //將data的值取出作為高
//     return d * 3 + "px";
//   });

var w = 600;
var h = 250;
dataset = [];
for (var i = 0; i < 20; i++) {
  var Num1 = 5 + Math.floor(Math.random() * 480); //產生第一個數值
  var Num2 = 5 + Math.floor(Math.random() * 230); //產生第二個數值
  dataset.push([Num1, Num2]); //兩個合併成一個陣列
}
console.log(dataset); //檢查看看有沒有怪怪的
var svg = d3.select(".demo").append('svg').attr('width', w).attr('height', h);
// let svg = d3.select(".demo").append('svg').attrs({'width': w, 'height': h});
//產生一個SVG
svg.selectAll('circle').data(dataset).enter()
.append('circle')
.attr('cx', function(d){return d[0] + 10}) //定義圓心的x，在第一個值
	.attr('cy', function(d){return d[1] + 10}) //定義圓心的y，在第二個值
	.attr('r', function(d){return Math.sqrt(h - d[1])}) //圓心的半徑，第二個值開平方
	.attr('fill', function(d){return d3.hsl(d[0] % 360, .6, .6 );})
	//介紹一個顏色的function hsl，可以將顏色算出後轉成色碼
	//格式 (360色相, 1彩度, 1明度)
;

svg.selectAll('text').data(dataset).enter() //補上資料數值
.append('text')
.text(function(d){ return d[0]+ ',' + d[1]}) //將值寫到SVG上
.attr({
	'x': function(d){return d[0] + 10}, //和上面相同，算出X、Y的位置
	'y': function(d){return d[1] + 10},
	'fill': 'red', //文字填滿為紅色
	'font-size': '10px' //Fill、font-size也可以用CSS寫喔～
});
// svg.selectAll("circle").data(dataset).enter() //記得喔 data(dataset).enter() 把資料放入
//   .append("circle")
//   .attr({
//     'cx': function(d) {return d[0] + 10;}, //定義圓心的x，在第一個值
//     'cy': function(d) {return d[1] + 10;}, //定義圓心的y，在第二個值
//     'r': function(d) {return Math.sqrt(h - d[1]);}, //圓心的半徑，第二個值開平方
//     'fill': function(d) {return d3.hsl(d[0] % 360, 0.6, 0.6);}
//     //介紹一個顏色的function hsl，可以將顏色算出後轉成色碼
//     //格式 (360色相, 1彩度, 1明度)
//   });

// svg.selectAll("text")
//   .data(dataset)
//   .enter() //補上資料數值
//   .append("text")
//   .text(function(d) {
//     return d[0] + "," + d[1];
//   }) //將值寫到SVG上
//   .attr({
//     'x': function(d) {
//       return d[0] + 10;
//     }, //和上面相同，算出X、Y的位置
//     'y': function(d) {
//       return d[1] + 10;
//     },
//     'fill': "red", //文字填滿為紅色
//     "font-size": "10px" //Fill、font-size也可以用CSS寫喔～
//   });
//  var barChart = svg.selectAll("rect")
//      .data(dataset)
//      .enter()
//      .append("rect")
//      .attr("y", function(d) {
//           return svgHeight - d
//      })
//      .attr("height", function(d) {
//          return d;
//      })
//      .attr("width", barWidth - barPadding)
//      .attr("transform", function (d, i) {
//          var translate = [barWidth * i, 0];
//          return "translate("+ translate +")";
//      });
