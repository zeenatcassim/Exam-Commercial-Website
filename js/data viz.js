/**/
/*
const url = 'https://data.fixer.io/api/latest?access_key=803afba4fdd8cdacc37ab017860c99dd';
const options = {
    method: 'GET'
};*/
let selectedCurrency = null; 

fetch(url, options)
    .then(response => response.json())
    .then(data => {
        const rates = data.rates;
        const ratesArray = convertRatesToArray(rates);

        populateDropdown(ratesArray);
        createBarGraph(ratesArray);
    })
    .catch(error => {
        console.log("There is something wrong!", error);
    });

    function convertRatesToArray(rates) {
        return Object.entries(rates).map(([country, rate]) => ({ country, rate }));
    }
    
    function populateDropdown(ratesArray) {
        const dropdown = document.getElementById("currency");
        ratesArray.forEach(rate => {
            const option = document.createElement("option");
            option.value = rate.country;
            option.text = rate.country;
            dropdown.add(option);
        });
    }

    function updateGraph() {
        selectedCurrency = document.getElementById("currency").value;
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                const ratesArray = convertRatesToArray(data.rates);
                createBarGraph(ratesArray); // Re-render graph with updated selection
            });
    }
    
    const tooltip = d3.select(".tooltip");

    function createBarGraph(rates) {
        const margin = { top: 20, right: 30, bottom: 100, left: 100 };
        const width = 1300 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;
    
        const filteredRates = rates.filter(d => d.rate > 0);
    
        // Clear existing SVG to avoid duplicating
        d3.select("#bar-graph-svg").selectAll("*").remove();
    
        // Creating the svg
        const svg = d3.select("#bar-graph-svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
        // Setting up the scales
        const x = d3.scaleBand()
            .domain(filteredRates.map(d => d.country))
            .range([0, width])
            .padding(0.5)
            .paddingInner(0.4);
    
        const y = d3.scaleLog()
            .domain([0.1, d3.max(filteredRates, d => d.rate)])
            .range([height, 0])
            .clamp(true);
    
        const customTickValues = [0.1, 1, 10, 100, 1000, 10000, 100000, 1000000, 2000000, 4000000];
    
        // Creating the x-axis
        const xAxis = svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));
    
        xAxis.selectAll("text")
            .attr("transform", "rotate(-45)")
            .attr("text-anchor", "end")
            .attr("dx", "-1.5em")
            .attr("dy", "1em")
            .filter((d, i) => i % 2 !== 0)  // Hide every second label
            .remove();
    
        // Creating the y-axis
        const yAxis = d3.axisLeft(y)
            .tickValues(customTickValues)
            .tickFormat(d => d.toFixed(1));
    
        svg.append("g")
            .attr("class", "y-axis")
            .call(yAxis);
    
        // Creating the bars with color highlighting for the selected currency
        svg.selectAll(".bar")
            .data(filteredRates)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.country))
            .attr("y", d => y(d.rate))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.rate))
            .attr("fill", d => d.country === selectedCurrency ? "orange" : "steelblue");  // Highlight selected
    
        svg.append("text")
            .attr("x", width / 2)
            .attr("y", height + margin.bottom - 10)
            .attr("text-anchor", "middle")
            .style("font-size", "22px")
            .text("Currency Rates");
    
        // Tooltip
        const tooltip = d3.select(".tooltip");
    
        svg.selectAll(".bar")
            .on("mouseover", function(event, d) {
                tooltip.style("opacity", 1)
                    .html(`Country: ${d.country}<br>Rate: ${d.rate.toFixed(4)}`)
            })
            .on("mousemove", function(event){
                const graphPosition = document.getElementById("bar-graph").getBoundingClientRect();
                tooltip.style("left", (event.pageX + 10) + "px")
                        .style("top", (event.PageY - 10) + "px");
            })
            .on("mouseout", function() {
                tooltip.style("opacity", 0);
            });
    } 
