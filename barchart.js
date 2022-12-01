d3.csv("4030-visualization-data.csv").then(
    function(dataset){
        console.log(dataset)

        var dimensions = {
          width: 700,
          height: 700,
          margin:{
              top: 10,
              bottom: 50,
              right: 10,
              left: 50
          }
        }

        var svg = d3.select("#barchart")
                  .style("width", dimensions.width)
                  .style("height", dimensions.height)
                  
    //Filler and Cannon
var Fillers1 = dataset.filter(function(d){return d.Filler == "0" && d.Arc == "0"})
    m1 = d3.count(Fillers1, d => d.Episode)
var Canon1 = dataset.filter(function(d){return d.Filler == "1" && d.Arc =="0"})
    m2 = d3.count(Canon1, d => d.Episode)
var Fillers2 = dataset.filter(function(d){return d.Filler == "0" && d.Arc == "1"})
    m3 = d3.count(Fillers2, d => d.Episode)
var Canon2 = dataset.filter(function(d){return d.Filler == "1" && d.Arc == "1"})
    m4 = d3.count(Canon2, d => d.Episode)
var Fillers3 = dataset.filter(function(d){return d.Filler == "0" && d.Arc == "2"})
    m5 = d3.count(Fillers3, d => d.Episode)
var Canon3 = dataset.filter(function(d){return d.Filler == "1" && d.Arc == "2"})
    m6 = d3.count(Canon3, d => d.Episode)
var Fillers4 = dataset.filter(function(d){return d.Filler == "0" && d.Arc == "3"})
    m7 = d3.count(Fillers4, d => d.Episode)
var Canon4 = dataset.filter(function(d){return d.Filler == "1" && d.Arc == "2"})
    m8 = d3.count(Canon4, d => d.Episode)
var Fillers5 = dataset.filter(function(d){return d.Filler == "0" && d.Arc == "4"})
    m9 = d3.count(Fillers5, d => d.Episode)
var Canon5 = dataset.filter(function(d){return d.Filler == "1" && d.Arc == "2"})
    m10 = d3.count(Canon5, d => d.Episode)

    //console.log(Fillers1)
    console.log(m1,m2)

   var Arc1 = d3.group(dataset.filter(function(d){return d.Arc == "0"}), d => d.Filler)
   var episodes1 = [m1, m2]
   console.log(episodes1)
    var Arc2 = d3.group(dataset.filter(function(d){return d.Arc == "1"}), d => d.Filler)
    var Arc3 = d3.group(dataset.filter(function(d){return d.Arc == "2"}), d => d.Filler)
    var Arc4 = d3.group(dataset.filter(function(d){return d.Arc == "3"}), d => d.Filler)
    var Arc5 = d3.group(dataset.filter(function(d){return d.Arc == "4"}), d => d.Filler)
console.log(Arc1)
console.log(Arc1.keys())
var tickLabels = ['Filler','Canon']
        var xScale = d3.scaleBand()

                        //.domain(d3.map(dataset.filter(function(d){return d.Arc == "0"}), d => d.Filler))
                        .domain(tickLabels)
                        .range([dimensions.margin.left ,dimensions.width - dimensions.margin.right])
                        .padding(0.4)
//xAxisGenerator.tickFormat((d,i) => tickLabels[i]);
//console.log(dataset.map(d => d.Filler ))
        var yScale = d3.scaleLinear()
                        .domain([0, d3.max([m1,m2,m3,m4,m5,m6,m7,m8,m9,m10])])
                        .range([dimensions.height-dimensions.margin.bottom, dimensions.margin.top])

        //adds axes to the chart
        var xAxisGen = d3.axisBottom().scale(xScale)
        var xAxis = svg.append("g")
                        .call(xAxisGen)
                        .style("transform", `translateY(${dimensions.height-dimensions.margin.bottom}px)`)

        var yAxisGen = d3.axisLeft().scale(yScale)
        var yAxis = svg.append("g")
                         .call(yAxisGen)
                         .style("transform", `translateX(${dimensions.margin.left}px)`)


console.log(Arc1.keys())
        var bars = svg.append("g")
                        .selectAll("g")
                        .data(episodes1)
                        .enter()
                        .append("rect")
                        .attr("fill", d => "steelblue")
                        .attr("x", (d,i) => {
                                            console.log(d,i)
                                            if(i == 0) {
                                                console.log(xScale("Filler"))
                                                return xScale("Filler")
                                            }
                                            if(i == 1) {
                                               console.log(xScale("Canon"))
                                               return xScale("Canon")
                                            }
                                            console.log(xScale(i))
                                            
                                            })
                        //.attr("y", d => yScale(d))
                        .attr("y", (d,i) => {
                            console.log(d,i)
                            // if(i == 0) {
                            //     console.log(xScale("Filler"))
                            //     return xScale("Filler")
                            // }
                            // if(i == 1) {
                            //    console.log(xScale("Canon"))
                            //    return xScale("Canon")
                            // }
                            console.log(xScale(i))
                            
                            return yScale(d)})
                        .attr("width", d => xScale.bandwidth())
                        .attr("height", function(d) {return dimensions.height - yScale((d))})
//.attr("height", function(d) {return dimensions.height - yScale([66,46])})

                      console.log(bars)
    }
)
