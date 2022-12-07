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
        .range(["#F39C12 ", "#000000"])

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
                                          
        console.log(bars)

    //BARCHART

        var svg = d3.select("#barchart")
                  .style("width", dimensions.width)
                  .style("height", dimensions.height)
    
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

    }
)
