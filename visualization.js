
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

        console.log(m1,m2)  
        
        var Arc1 = d3.group(dataset.filter(function(d){return d.Arc == "0"}), d => d.Filler)
        var Arc2 = d3.group(dataset.filter(function(d){return d.Arc == "1"}), d => d.Filler)
        var Arc3 = d3.group(dataset.filter(function(d){return d.Arc == "2"}), d => d.Filler)
        var Arc4 = d3.group(dataset.filter(function(d){return d.Arc == "3"}), d => d.Filler)
        var Arc5 = d3.group(dataset.filter(function(d){return d.Arc == "4"}), d => d.Filler)
    
        var Arcs = [Arc1, Arc2, Arc3, Arc4, Arc5]
        console.log(Arcs)

        var episodes1 = [m1, m2]
        var First = d3.sum(episodes1)

        var episodes2 = [m3, m4]
        var Second = d3.sum(episodes2)

        var episodes3 = [m5, m6]
        var Third = d3.sum(episodes3)

        var episodes4 = [m7, m8]
        var Fourth = d3.sum(episodes4)

        var episodes5 = [m9, m10]
        var Fifth = d3.sum(episodes5)

        console.log(Math.max(First, Second, Third, Fourth, Fifth))
        var max_episodes = Math.max(First, Second, Third, Fourth, Fifth)
        var Episodes = [episodes1, episodes2, episodes3, episodes4, episodes5]

        
        var xScale = d3.scaleBand()//arcs
                       .domain(dataset.map(function(d){return d.Arc}))
                       .range([dimensions.margin.left ,dimensions.width - dimensions.margin.right])
                       .padding([0.2])

        var keys = dataset.columns//.slice(1,2)//remove first column of csv
        console.log(keys)

        var num = d3.count(dataset, d => d.Filler);
        console.log(num);

       var maxSum = d3.max(dataset, function(d){
        var sumName = 0
            for(var i=0; i<keys.length; i++){
                sumName = sumName + parseInt(d[keys[i]])
            }
            return sumName
        })

        var yScale = d3.scaleLinear()
                    .domain([0, max_episodes])
                    .range([dimensions.height-dimensions.margin.bottom, dimensions.margin.top])
                    console.log(yScale)

        
         var xAxisGen = d3.axisBottom().scale(xScale)
         var xAxis = svg.append("g")
                        .call(xAxisGen)
                        .style("transform", `translateY(${dimensions.height-dimensions.margin.bottom}px)`)

         var yAxisGen = d3.axisLeft().scale(yScale)
         var yAxis = svg.append("g")
                         .call(yAxisGen)
                         .style("transform", `translateX(${dimensions.margin.left}px)`)
        
        var colorScale = d3.scaleOrdinal()
                        .domain(keys)
                        .range(["#b3e2cd","#fdcdac"])
        
        var stackedData = d3.stack()
                            .keys(keys)
                            (dataset)
        
        console.log(stackedData)
        console.log(Episodes)

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
                            return xScale("0")
                        }
                        if(i == 1){
                            return xScale("1")
                        }
                        if(i == 2) {
                            return xScale("2")
                        }
                        if(i == 3) {
                            return xScale("3")
                        }
                        if(i == 4) {
                            return xScale("4")
                        }
                    })
                      .attr("y", d => yScale(d[1]))
                      .attr("height", d => yScale(d[0]) - yScale(d[1]))
                      .attr("width", d => xScale.bandwidth())
                      
                                          
        console.log(bars)


    }
)
