d3.csv("4030-visualization-data.csv").then(
    function(dataset){
        console.log(dataset)

        var dimensions = {
          width: 500,
          height: 500,
          margin:{
              top: 10,
              bottom: 50,
              right: 10,
              left: 50
          }
        }
       

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

    //Arcs
   var Arc1 = d3.group(dataset.filter(function(d){return d.Arc == "0"}), d => d.Filler)
   var episodes1 = [m1, m2]
    var Arc2 = d3.group(dataset.filter(function(d){return d.Arc == "1"}), d => d.Filler)
    var episodes2 = [m3, m4]
    var Arc3 = d3.group(dataset.filter(function(d){return d.Arc == "2"}), d => d.Filler)
    var episodes3 = [m5, m6]
    var Arc4 = d3.group(dataset.filter(function(d){return d.Arc == "3"}), d => d.Filler)
    var episodes4 = [m7, m8]
    var Arc5 = d3.group(dataset.filter(function(d){return d.Arc == "4"}), d => d.Filler)
    var episodes5 = [m9, m10]
    
    var Episodes = [episodes1, episodes2, episodes3, episodes4, episodes5]

   

  
                        //LINE GRAPH

var svg = d3.select("#linegraph")
.style("width", dimensions.width)
.style("height", dimensions.height)


var all07 = d3.group(dataset.filter(function(d){return d.Year == "2007"}))
var filler07 = d3.group(dataset.filter(function(d){return d.Year == "2007" && d.Filler == '1'}))
var canon07 = d3.group(dataset.filter(function(d){return d.Year == "2007" && d.Filler == '0'}))
var f1 = d3.count(filler07, d => d.Episode)
var c1 = d3.count(canon07, d => d.Episode)
var sum07 = d3.count(all07, d => d.Episode)
var p1 = f1/sum07
var pp1 = c1/sum07

var all08 = d3.group(dataset.filter(function(d){return d.Year == "2008"}))
var filler08 = d3.group(dataset.filter(function(d){return d.Year == "2008" && d.Filler == '1'}))
var canon08 = d3.group(dataset.filter(function(d){return d.Year == "2008" && d.Filler == '0'}))
var f2 = d3.count(filler08, d => d.Episode)
var c2 = d3.count(canon08, d => d.Episode)
var sum08 = d3.count(all08, d => d.Episode)
var p2 = f2/sum08
var pp2 = c2/sum08

var all09 = d3.group(dataset.filter(function(d){return d.Year == "2009"}))
var filler09 = d3.group(dataset.filter(function(d){return d.Year == "2009" && d.Filler == '1'}))
var canon09 = d3.group(dataset.filter(function(d){return d.Year == "2009" && d.Filler == '0'}))
var f3 = d3.count(filler09, d => d.Episode)
var c3 = d3.count(canon09, d => d.Episode)
var sum09 = d3.count(all09, d => d.Episode)
var p3 = f3/sum09
var pp3 = c3/sum09

var all10 = d3.group(dataset.filter(function(d){return d.Year == "2010"}))
var filler10 = d3.group(dataset.filter(function(d){return d.Year == "2010" && d.Filler == '1'}))
var canon10 = d3.group(dataset.filter(function(d){return d.Year == "2010" && d.Filler == '0'}))
var f4 = d3.count(filler10, d => d.Episode)
var c4 = d3.count(canon10, d => d.Episode)
var sum10 = d3.count(all10, d => d.Episode)
var p4 = f4/sum10
var pp4 = c4/sum10

var all11 = d3.group(dataset.filter(function(d){return d.Year == "2011"}))
var filler11 = d3.group(dataset.filter(function(d){return d.Year == "2011" && d.Filler == '1'}))
var canon11 = d3.group(dataset.filter(function(d){return d.Year == "2011" && d.Filler == '0'}))
var f5 = d3.count(filler11, d => d.Episode)
var c5 = d3.count(canon11, d => d.Episode)
var sum11 = d3.count(all11, d => d.Episode)
var p5 = f5/sum11
var pp5 = c5/sum11

var all12 = d3.group(dataset.filter(function(d){return d.Year == "2012"}))
var filler12 = d3.group(dataset.filter(function(d){return d.Year == "2012" && d.Filler == '1'}))
var canon12 = d3.group(dataset.filter(function(d){return d.Year == "2012" && d.Filler == '0'}))
var f6 = d3.count(filler12, d => d.Episode)
var c6 = d3.count(canon12, d => d.Episode)
var sum12 = d3.count(all12, d => d.Episode)
var p6 = f6/sum12
var pp6 = c6/sum12

var all13 = d3.group(dataset.filter(function(d){return d.Year == "2013"}))
var filler13 = d3.group(dataset.filter(function(d){return d.Year == "2013" && d.Filler == '1'}))
var canon13 = d3.group(dataset.filter(function(d){return d.Year == "2013" && d.Filler == '0'}))
var f7 = d3.count(filler13, d => d.Episode)
var c7 = d3.count(canon13, d => d.Episode)
var sum13 = d3.count(all13, d => d.Episode)
var p7 = f7/sum13
var pp7 = c7/sum13

var all14 = d3.group(dataset.filter(function(d){return d.Year == "2014"}))
var filler14 = d3.group(dataset.filter(function(d){return d.Year == "2014" && d.Filler == '1'}))
var canon14 = d3.group(dataset.filter(function(d){return d.Year == "2014" && d.Filler == '0'}))
var f8 = d3.count(filler14, d => d.Episode)
var c8 = d3.count(canon14, d => d.Episode)
var sum14 = d3.count(all14, d => d.Episode)
var p8 = f8/sum14
var pp8 = c8/sum14

var all15 = d3.group(dataset.filter(function(d){return d.Year == "2015"}))
var filler15 = d3.group(dataset.filter(function(d){return d.Year == "2015" && d.Filler == '1'}))
var canon15 = d3.group(dataset.filter(function(d){return d.Year == "2015" && d.Filler == '0'}))
var f9 = d3.count(filler15, d => d.Episode)
var c9 = d3.count(canon15, d => d.Episode)
var sum15 = d3.count(all15, d => d.Episode)
var p9 = f9/sum15
var pp9 = c9/sum15

var all16 = d3.group(dataset.filter(function(d){return d.Year == "2016"}))
var filler16 = d3.group(dataset.filter(function(d){return d.Year == "2016" && d.Filler == '1'}))
var canon16 = d3.group(dataset.filter(function(d){return d.Year == "2016" && d.Filler == '0'}))
var f10 = d3.count(filler16, d => d.Episode)
var c10 = d3.count(canon16, d => d.Episode)
var sum16 = d3.count(all16, d => d.Episode)
var p10 = f10/sum16
var pp10 = c10/sum16

var all17 = d3.group(dataset.filter(function(d){return d.Year == "2017"}))
var filler17 = d3.group(dataset.filter(function(d){return d.Year == "2017" && d.Filler == '1'}))
var canon17 = d3.group(dataset.filter(function(d){return d.Year == "2017" && d.Filler == '0'}))
var f11 = d3.count(filler17, d => d.Episode)
var c11 = d3.count(canon17, d => d.Episode)
var sum17 = d3.count(all17, d => d.Episode)
var p11 = f11/sum17
var pp11 = c11/sum17

var Fpercentages = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10, p11]
var Cpercentages = [pp1, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11]

var lineTickLabels = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]
var xScale = d3.scaleBand()
  .domain(lineTickLabels)
  .range([dimensions.margin.left ,dimensions.width - dimensions.margin.right])
  .padding(0.4)

var yScale = d3.scaleLinear()
  .domain([0, d3.max(Fpercentages)])
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
     
    options = ["Filler", "Canon"]
      d3.select("#lineButton")
      .selectAll('myOptions')
      .data(options)
      .enter()
      .append('option')
          .text(function (d) { return d; }) // text showed in the menu
          .attr("value", function (d) { return d; }) // corresponding value returned by the button
          
          var myColor = d3.scaleOrdinal()
          .domain(options)
          .range(d3.schemeSet2);

      var text = svg
      .append('text')
      .attr("id", 'topbartext')
      .attr("x", 100)
      .attr("y", 10)
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("font-family", "sans-serif")
      .text("Filler Percentage Per Year")

      console.log(Fpercentages)

      // Add the line
    var line = svg.append("path")
    .datum(Fpercentages)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d,i) {if(i == 0){
                            return xScale("2007")
                        }
                        if(i == 1){
                            return xScale("2008")
                        }
                        if(i == 2){
                            return xScale("2009")
                        }
                        if(i == 3){
                            return xScale("2010")
                        }
                        if(i == 4){
                            return xScale("2011")
                        }
                        if(i == 5){
                            return xScale("2012")
                        }
                        if(i == 6){
                            return xScale("2013")
                        }
                        if(i == 7){
                            return xScale("2014")
                        }
                        if(i == 8){
                            return xScale("2015")
                        }
                        if(i == 9){
                            return xScale("2016")
                        }
                        if(i == 10){
                            return xScale("2017")
                        }
                    })
      .y(function(d) { return yScale(d) })
      )





    //STACKED BAR CHART
    var svg = d3.select("#visualization")
    .style("width", dimensions.width)
    .style("height", dimensions.height)

    var tickLabels = ['Arc 1','Arc 2', 'Arc 3', 'Arc 4', 'Arc 5']
        var xScale = d3.scaleBand()//arcs
                       .domain(tickLabels)
                       .range([dimensions.margin.left ,dimensions.width - dimensions.margin.right])
                       .padding([0.2])

    var sum1 = d3.sum([m1,m2])
    var sum2 = d3.sum([m3, m4])
    var sum3 = d3.sum([m5, m6])
    var sum4 = d3.sum([m7, m8])
    var sum5 = d3.sum([m9, m10])

    var yScale = d3.scaleLinear()
                    .domain([0, d3.max([sum1,sum2,sum3,sum4,sum5])])
                    .range([dimensions.height-dimensions.margin.bottom, dimensions.margin.top])

        
         var xAxisGen = d3.axisBottom().scale(xScale)
         var xAxis = svg.append("g")
                        .call(xAxisGen)
                        .style("transform", `translateY(${dimensions.height-dimensions.margin.bottom}px)`)

         var yAxisGen = d3.axisLeft().scale(yScale)
         var yAxis = svg.append("g")
                         .call(yAxisGen)
                         .style("transform", `translateX(${dimensions.margin.left}px)`)
        
        
  
        var keys = Arc1.keys()
        console.log(keys)

        var groups = [episodes1, episodes2, episodes3, episodes4, episodes5]
        console.log(groups)

        var stackedData = d3.stack()
                            .keys(keys)
                            (groups)
        
        console.log(stackedData)

        var colorScale = d3.scaleOrdinal()
        .domain(keys)
        .range(["#000000", "#FF5F1F" ])

        var text = svg
                .append('text')
                .attr("id", 'topbartext')
                .attr("x", 100)
                .attr("y", 10)
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("font-family", "sans-serif")
                .text("Canon Percentage Per Arc: 0 %")

        var bars = svg.append("g")
                       .selectAll("g")
                       .data(stackedData)
                       .enter()
                       .append("g")
                       .attr("fill", d => colorScale(d.key))
                       .selectAll("rect")
                       .data(function(d){return d;})
                       .enter()
                       .append("rect")
                       .on('mouseover', function(d,i) {
                        //console.log(d3.sum(i.data))
                        d3.select(this)
                        .attr("stroke-width", 3.5)
                        .attr("stroke", "yellow")
                        text
                            .text("Canon Percentage Per Arc: " + d3.format(".0%")(((i[1] - i[0]) / (d3.sum(i.data)))))
                    })
                    .on('mouseout', function(){
                        d3.select(this)
                        .attr("stroke-width", 0)
                        text
                        .text("Canon Percentage Per Arc: " )

                    })
                       .attr("x", (d,i) => {
                        if(i == 0){
                            return xScale("Arc 1")
                        }
                        if(i == 1){
                            return xScale("Arc 2")
                        }
                        if(i == 2){
                            return xScale("Arc 3")
                        }
                        if(i == 3){
                            return xScale("Arc 4")
                        }
                        if(i == 4){
                            return xScale("Arc 5")
                        }
                    })
                       .attr("y", d => yScale(d[1]))
                       .attr("height", d => yScale(d[0]) - yScale(d[1]))
                       .attr("width", d => xScale.bandwidth())
                                          
    var size = 20
    svg.selectAll("mydots")
        .data(Episodes[1])
        .enter()
        .append("rect")
        .attr("x", 430)
        .attr("y", function(d,i){ return 10 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("width", size)
        .attr("height", size)
        .style("fill", function(d){ return colorScale(d)})
    
    // Add one dot in the legend for each name.
    svg.selectAll("mylabels")
        .data(Episodes[1])
        .enter()
        .append("text")
        .attr("x", 430 + size*1.2)
        .attr("y", function(d,i){ return 10 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", function(d){ return colorScale(d)})
        .text(function(d,i){ if(i == 0){
                                return "Filler"
                            }
                            if(i == 1){
                                return "Canon"
                            }           
                            })
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")


    //GROUPED BARCHART

        var svg = d3.select("#barchart")
                  .style("width", dimensions.width)
                  .style("height", dimensions.height)

//add options to the button
tickLabels = ['Arc 1', 'Arc 2', 'Arc 3', 'Arc 4', 'Arc 5']

    var xScale = d3.scaleBand()
                    .domain(tickLabels)
                    .range([dimensions.margin.left ,dimensions.width - dimensions.margin.right])
                    .padding(0.5)

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

    // Another scale for subgroup position
    var subgroups = [0,1]
    var xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, xScale.bandwidth()])
    //.padding([0.04])

console.log(Episodes)

    var colorScale = d3.scaleOrdinal()
                        .range(["#A93226", "#F1948A"])

    var bars = svg.append("g")
                    .selectAll("g")
                    .data(Episodes)
                    .enter()
                    .append("g")
                    .attr("transform", function(d,i) { if(i == 0){
                                                            return "translate(" + xScale("Arc 1") + ",0)"
                                                        }
                                                        if(i == 1){
                                                            return "translate(" + xScale("Arc 2") + ",0)"
                                                        }
                                                        if(i == 2){
                                                            return "translate(" + xScale("Arc 3") + ",0)"
                                                        }
                                                        if(i == 3){
                                                            return "translate(" + xScale("Arc 4") + ",0)"
                                                        }
                                                        if(i == 4){
                                                            return "translate(" + xScale("Arc 5") + ",0)"
                                                        }
                                                    })
                    .selectAll("rect")
                    .data(function(d,i) { return Episodes[i]})
                    .enter()
                    .append("rect")
                    .attr("x", function(d,i){return xSubgroup(i)})
                    .attr("y", d => yScale(d))
                    .attr("width", d => xScale.bandwidth())
                    .attr("height", d => yScale(0) - yScale(d))
                    .attr("fill", (d,i) => {return colorScale(i)})

                    
     
var size = 20
svg.selectAll("mydots")
  .data(Episodes[1])
  .enter()
  .append("rect")
    .attr("x", 430)
    .attr("y", function(d,i){ return 10 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("width", size)
    .attr("height", size)
    .style("fill", function(d){ return colorScale(d)})

// Add one dot in the legend for each name.
svg.selectAll("mylabels")
  .data(Episodes[1])
  .enter()
  .append("text")
    .attr("x", 430 + size*1.2)
    .attr("y", function(d,i){ return 10 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function(d){ return colorScale(d)})
    .text(function(d,i){ if(i == 0){
                            return "Filler"
                        }
                        if(i == 1){
                            return "Canon"
                        }           
                        })
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
                   
    }
)
