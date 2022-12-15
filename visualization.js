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

    var groups = [episodes1, episodes2, episodes3, episodes4, episodes5]

    var sum1 = d3.sum([m1,m2])
    var sum2 = d3.sum([m3, m4])
    var sum3 = d3.sum([m5, m6])
    var sum4 = d3.sum([m7, m8])
    var sum5 = d3.sum([m9, m10])

   /* var keys = Arc1.keys()
                        console.log(keys)
                        console.log(groups)

                        var stackedData = d3.stack()
                                .keys(keys)
                                (groups)*/

               // function stacked(data){

              // d3.select("#start")
               //.on("click", function(){
                   
               //})


                        var tickLabels = ['Arc 1','Arc 2', 'Arc 3', 'Arc 4', 'Arc 5']

                        var xScaleStack = d3.scaleBand()
                                    .domain(tickLabels)
                                        .range([dimensions.margin.left ,dimensions.width - dimensions.margin.right])
                                        .padding([0.2])
                      var xAxisStack = svg.append("g")
                      .call(d3.axisBottom().scale(xScale))
                      .style("transform", `translateY(${dimensions.height-dimensions.margin.bottom}px)`)

                        /*var xScale = d3.scaleBand()//arcs
                                        .domain(tickLabels)
                                        .range([dimensions.margin.left ,dimensions.width - dimensions.margin.right])
                                        .padding([0.2])*/

                        var yScaleStack = d3.scaleLinear()
                                        .domain([0, d3.max([sum1,sum2,sum3,sum4,sum5])])
                                        .range([dimensions.height-dimensions.margin.bottom, dimensions.margin.top])

                            
                        /*var xAxisGen = d3.axisBottom().scale(xScale)
                        var xAxis = svg.append("g")
                                        .call(xAxisGen)
                                        .style("transform", `translateY(${dimensions.height-dimensions.margin.bottom}px)`)*/

                        var yAxisGenStack = d3.axisLeft().scale(yScaleStack)
                        var yAxisStack = svg.append("g")
                                        .call(yAxisGenStack)
                                        .style("transform", `translateX(${dimensions.margin.left}px)`)
                                        //stacked = function(){
  
                        var keys = Arc1.keys()
                        //console.log(keys)
                        //console.log(groups)

                        var stackedData = d3.stack()
                                .keys(keys)
                                (groups)
                            
                        //console.log(stackedData)

                        var colorScaleStack = d3.scaleOrdinal()
                                .domain(keys)
                                .range(["#000000", "#FF5F1F" ])
                                .domain(keys)

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
                                .attr("fill", d => colorScaleStack(d.key))
                                .selectAll("rect")
                                .data(function(d){return d;})
                                .enter()
                                .append("rect")
                                .on('mouseover', function(d,i) {
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
                                /*.on('click', function(d,i){
                                        //barchart(i.data)

                                        var tickLabels2 = ['Filler', 'Canon']
                                        xScaleStack.domain(tickLabels2)
                                        xAxisStack.transition().call(d3.axisBottom(xScaleStack))
            
                                        yScaleStack.domain([0, d3.max([m1,m2,m3,m4,m5, m6, m7, m8, m9, m10])])
                                        yAxisStack.transition().call(d3.axisLeft(yScaleStack))
            
                                        var colorScale2 = d3.scaleOrdinal()
                                            .domain(tickLabels2)
                                            .range(["#A93226", "#F1948A" ])
            
                                       var bars2 = svg
                                            .selectAll("rect")
                                            .data(i.data)
            
                                        bars2
                                            .enter()
                                            .merge(bars2)
                                            .transition()
                                            .style("fill", (d,i) => {
                                                if(i == 0){console.log(d);
                                                    return colorScale2(i)
                                                }
                                                if(i == 1){
                                                    return colorScale2(i)
                                                }
                                            })
                                            .attr("x", (d,i) => {console.log(d);
                                                if(i == 0){
                                                    return xScaleStack("Filler")
                                                }
                                                if(i == 1){
                                                    return xScaleStack("Canon")
                                                }
                                                })
                                            .attr("y", function(d) { return yScaleStack(d)})
                                            .attr("height", function(d) { return yScaleStack(0) - yScaleStack(d) })
                                            .attr("width", xScaleStack.bandwidth())
                                            
            
                                            bars2
                                            .exit()
                                            .remove()

                                    })*/
                                .attr("x", (d,i) => {
                                    if(i == 0){
                                        return xScaleStack("Arc 1")
                                    }
                                    if(i == 1){
                                        return xScaleStack("Arc 2")
                                    }
                                    if(i == 2){
                                        return xScaleStack("Arc 3")
                                    }
                                    if(i == 3){
                                        return xScaleStack("Arc 4")
                                    }
                                    if(i == 4){
                                        return xScaleStack("Arc 5")
                                    }
                                })
                                .attr("y", d => yScaleStack(d[1]))
                                .attr("height", d => yScaleStack(d[0]) - yScaleStack(d[1]))
                                .attr("width", d => xScaleStack.bandwidth())


                                /*bars
                                .exit()
                                .remove()*/

                        //Add legend
                        var size = 20
                        svg.selectAll("mydots")
                                .data(Episodes[1])
                                .enter()
                                .append("rect")
                                .attr("x", 430)
                                .attr("y", function(d,i){ return 10 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
                                .attr("width", size)
                                .attr("height", size)
                                .style("fill", function(d){ return colorScaleStack(d)})
                        
                        // Add one dot in the legend for each name.
                        svg.selectAll("mylabels")
                                .data(Episodes[1])
                                .enter()
                                .append("text")
                                .attr("x", 430 + size*1.2)
                                .attr("y", function(d,i){ return 10 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
                                .style("fill", function(d){ return colorScaleStack(d)})
                                .text(function(d,i){ if(i == 0){
                                                        return "Filler"
                                                    }
                                                    if(i == 1){
                                                        return "Canon"
                                                    }           
                                                    })
                                .attr("text-anchor", "left")
                                .style("alignment-baseline", "middle")
                       
                           // }
                       // })
//stacked(stackedData)

/*d3.select("#start")
.on("click", function(){
    var newLabels = ['Arc 1','Arc 2', 'Arc 3', 'Arc 4', 'Arc 5']
        xScaleStack.domain(newLabels)
        xAxisStack.transition().call(d3.axisBottom(xScaleStack))

        yScaleStack.domain([0, d3.max([sum1,sum2,sum3,sum4,sum5])])
        yAxisStack.transition().call(d3.axisLeft(yScaleStack))

        bars
        svg.selectAll("rect")
            .data(stackedData)
            
        bars
            .enter()
            .append("rect")
            .merge(bars)
            .transition()
            //.selectAll("rect")
            //.data(stackedData)
            /*.join(
                enter => enter
                    .append("rect")*/
                    .attr("fill", d => colorScaleStack(d.key))

                    /*update => update
                    .transition().duration(1000)
                    .style('fill','green'),
        exit => exit
                    .transition().duration(1000)
                    .remove()
            )
       

    })*/
    
    
    
   //BARCHART

   var svg = d3.select("#barchart")
   .style("width", dimensions.width)
   .style("height", dimensions.height)


   var colorScale1 = d3.scaleOrdinal()
                        .range(["#8E44AD", "#99A3A4"])
    var colorScale2 = d3.scaleOrdinal()
                        .range(["#A93226", "#F1948A"])
    var colorScale3 = d3.scaleOrdinal()
                        .range(["#34495E", "#0B5345"])
    var colorScale4 = d3.scaleOrdinal()
                        .range(["#943126 ", "#808B96"])
    var colorScale5 = d3.scaleOrdinal()
                        .range(["#F4D03F", "#3498DB"])

var tickLabels = ['Filler','Canon']
var xScale = d3.scaleBand()
     .domain(tickLabels)
     .range([dimensions.margin.left ,dimensions.width - dimensions.margin.right])
     .padding(0.4)

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

//add options to the button
Arcs = ['Arc 1', 'Arc 2', 'Arc 3', 'Arc 4', 'Arc 5']
var options = Arcs
d3.select("#selectButton")
     .selectAll('myOptions')
     .data(options)
     .enter()
     .append('option')
         .text(function (d) { return d; }) // text showed in the menu
         .attr("value", function (d) { return d; }) // corresponding value returned by the button


var bars = svg.append("g")
     .selectAll("g")
     .data(Episodes[0])
     .enter()
     .append("rect")
     .attr("fill", (d,i) => {return colorScale1(i)})
     .attr("x", (d,i) => {
                         if(i == 0){
                             return xScale("Filler")
                         }
                         if(i == 1){
                             return xScale("Canon")
                         }
                     })
     .attr("y", d => yScale(d))
     .attr("width", d => xScale.bandwidth())
     .attr("height", d => yScale(0) - yScale(d))

// A function that update the chart
function update(selectedGroup) {
// Create new data with the selection
if(selectedGroup == 'Arc 1'){
var dataFilter = Episodes[0]
}
if(selectedGroup == 'Arc 2'){
var dataFilter = Episodes[1]
}
if(selectedGroup == 'Arc 3'){
var dataFilter = Episodes[2]
}
if(selectedGroup == 'Arc 4'){
var dataFilter = Episodes[3]
}
if(selectedGroup == 'Arc 5'){
var dataFilter = Episodes[4]
}
console.log(dataFilter)
// Give these new data to update line
bars
.data(dataFilter)
.transition()
.duration(1000)
.attr("fill", (d,i) => {
if(selectedGroup == 'Arc 1'){
 return colorScale1(i)
}
if(selectedGroup == 'Arc 2'){
 return colorScale2(i)
}
if(selectedGroup == 'Arc 3'){
 return colorScale3(i)
}
if(selectedGroup == 'Arc 4'){
 return colorScale4(i)
}
if(selectedGroup == 'Arc 5'){
 return colorScale5(i)
}
})
.attr("x", (d,i) => {
if(i == 0){
 return xScale("Filler")
}
if(i == 1){
 return xScale("Canon")
}
})
.attr("y", d => yScale(d))
.attr("width", d => xScale.bandwidth())
.attr("height", d => yScale(0) - yScale(d))
}

// When the button is changed, run the updateChart function
d3.select("#selectButton").on("change", function(d) {
// recover the option that has been chosen
var selectedOption = d3.select(this).property("value")
// run the updateChart function with this selected option
update(selectedOption)
}
) 
    
    //GROUPED BARCHART

        /*var svg = d3.select("#barchart")
                  .style("width", dimensions.width)
                  .style("height", dimensions.height)
                  

//add options to the button
tickLabels = ['Filler', 'Canon']

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
    //var subgroups = [0,1]
    //var xSubgroup = d3.scaleBand()
    //.domain(subgroups)
    //.range([0, xScale.bandwidth()])
    //.padding([0.04])

console.log(Episodes)

    var colorScale = d3.scaleOrdinal()
                        .range(["#A93226", "#F1948A"])


                            var u = svg.selectAll("rect")
                              .data(Episodes[0])
                          
                            u
                              .enter()
                              .append("rect")
                              .merge(u)
                              .transition()
                              .duration(1000)
                                .attr("x", function(d,i) { if(i == 0){
                                                                return xScale("Filler")
                                                            }
                                                            if(i == 1){
                                                                return xScale("Canon")
                                                            } 
                                                        })
                                .attr("y", function(d) { return y(d)})
                                .attr("width", x.bandwidth())
                                .attr("height", function(d) { return height - y(d.value); })
                                .attr("fill", "#69b3a2")
                          
                          
                          // Initialize the plot with the first dataset
                          changeArc(data1)


   

                    
     
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
    .style("alignment-baseline", "middle")*/
                   
    }
)
