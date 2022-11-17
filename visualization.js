
d3.csv("4030 Visualization Data.csv").then(
    function(dataset){
        
        console.log(dataset)

        var dimensions = {
            width: 1400,
            height: 800,
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


    }
)
