var w = 600,
  h = 250,
  padding = 30,
  barMargin = 2;
//定義SVG的大小，但是只要定義直條的間距就好，寬度用算的就好

var dataset = [];
for (var i = 0; i < 20; i++) {
  var Num1 = 5 + Math.floor(Math.random() * 255);
  dataset.push(Num1);
}
console.log(dataset);
//和先前一樣，產生一組隨機的資料

var Ymax = d3.max(dataset, function(d) {
    return d;
  }),
  Ymin = d3.min(dataset, function(d) {
    return d;
  });
//這個函示可以取得資料的最大值、最小值

var xScale = d3
  .scaleLinear() //產生一個屬於X軸的線性尺度
  .domain([0, dataset.length]) //傳入的值改為資料的數量
  .range([padding, w - padding]);
//輸出的範圍是左邊的padd距離，到右邊的padding

var yScale = d3.scaleLinear()
  .domain([Ymin, Ymax])
  .range([padding, h - padding]);
  //直條Bar是從底部往上，但是一般SVG是由上往下
  //類似X軸的尺度

var barWidth = (w - padding * 2) / dataset.length - barMargin;
//算出每一個bar的寬度

var svg = d3
  .select(".demo_hist")
  .append("svg")
  .attr("width", w)
  .attr("height", h);
//Create SVG

svg
  .selectAll("rect")
  .data(dataset)
  .enter() //和先前一樣，選取'circle'並把資料加入
  .append("rect")
  .attr("x", function(d, i) { //what d, i means is an element from the dataset array and its index
    return xScale(i);
  })
  .attr("y", function(d) {
    return h - yScale(d); //切記h:由上往下算
  })
  .attr("width", barWidth)
  .attr("height", function(d) {
    return yScale(d);
  })
  .attr("fill", function(d) {
    var color = 0.2 + d * 0.02;
    return d3.hsl(200, color, color);
  });

  svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
  })
  .attr("x", function(d, i) {
    return xScale(i) + barWidth/2;
  })
  .attr("y", function(d) {
    return h  - yScale(d) + 15; //數值放在bar 內
  })
  .attr("fill", "white")
  .attr("font-size", "10px")
  .attr("text-anchor", "middle"); //文字置中