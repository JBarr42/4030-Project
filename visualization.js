
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

        var svg = d3.select("#visualization")
                    .style("width", dimensions.width)
                    .style("height", dimensions.height)
                    
        console.log()

        var xScale = d3.scaleBand()
                       .domain(d3.map(dataset, d => +d.year))
                       .range([dimensions.margin.left ,dimensions.width - dimensions.margin.right])
                       .padding([0.2])

        var keys = dataset.columns.slice(1)
        console.log(keys)

        var maxSum = d3.max(dataset, function(d){
        var sumName = 0
            for(var i=0; i<keys.length; i++){
                sumName = sumName + parseInt(d[keys[i]])
            }

            return sumName
        })

        var yScale = d3.scaleLinear()
                    .domain([0, maxSum])
                    .range([dimensions.height-dimensions.margin.bottom, dimensions.margin.top])

        var colorScale = d3.scaleOrdinal()
                        .domain(keys)
                        .range(["#b3e2cd","#fdcdac","#cbd5e8"])
        
        var stackedData = d3.stack()
                            .keys(keys)
                            (dataset)
        
        console.log(stackedData)

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
                       .attr("x", d => xScale(+d.data.year))
                      // console.log(xScale)
                       .attr("y", d => yScale(d[1]))
                       //console.log(yScale)
                       .attr("height", d => yScale(d[0]) - yScale(d[1]))
                      // console.log(xScale)
                       .attr("width", d => xScale.bandwidth())
                       //console.log(yScale)
                                          
        console.log(bars)


    }
)
