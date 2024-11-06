/**/
/*
const url = 'https://data.fixer.io/api/latest?access_key=f156ee3163e52435edb8cdf84303eee1';
const options = {
    method: 'GET'
};*/



fetch(url, options)
.then((response) => response.json())
.then((data) => {
    //console.log(rates);  
      
    const rates = data.rates;
    const ratesArray = convertRatesToArray(rates);

    //populate the dropdown
    populateDropdown(rates);

   //call the function - create graph
   createBarGraph(ratesArray);
   
})
.catch((error) => {
    console.log("There is something wrong!", error);
})
//try catch

function convertRatesToArray(rates){
    return Object.entries(rates).map(([country, rate]) => ({country,rate}));
}

function populateDropdown(rates){
    const dropdown = d3.select("#currency-dropdown");
    Object.keys(rates).forEach(currency => {
        dropdown.append("option")
                .attr("value", currency)
                .text(currency);
    });
}

function createBarGraph(rates){
    const margin = {top: 20, right: 30, bottom: 100, left: 80};
    const width = 1500 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

   //there are negative values in the data so we need to filer the data for any rates that are invalid; 0 or negative
   const filteredRates = rates.filter(d => d.rate > 0);

    //creating the svg
    const svg = d3.select("#bar-graph")
                   .attr("width", width + margin.left + margin.right)
                   .attr("height", height + margin.top + margin.bottom)
                   .append("g")
                   .attr("transform", `translate(${margin.left}, ${margin.top})`);

   //setting up the scales
   const x = d3.scaleBand()
            .domain(filteredRates.map(d => d.country))
            .range([0, width])
            .padding(0.2)
            .paddingInner(0.5);

    const y = d3.scaleLog()
                .domain([0.1, d3.max(filteredRates, d => d.rate)])
                .range([ height, 0])
                .clamp(true);
    
    const customTickValues = [0.1, 1, 10, 100, 1000, 10000, 100000, 1000000, 2000000, 4000000];

    //Creating the x-axis
     const xAxis = svg.append("g")
                      .attr("class", "x-axis")
                      .attr("transform", `translate(0, ${height})`)
                     .call(d3.axisBottom(x));

    xAxis.selectAll("text")
        .attr("transform", "rotate(-90)")
        .attr("text-anchor", "end")
        .style("font-size", "8px")
        .attr("dx", "-1.5em")
        .attr("dy", "-1em")
        //.filter((d, i) => i % 2 !== 0) // Hide every second label
       // .remove();

    //Creating the y-axis
    const yAxis = d3.axisLeft(y)
                     .tickValues(customTickValues)
                     .tickFormat(d => d.toFixed(1));

    svg.append("g")
       .attr("class", "y-axis")
       .call(yAxis);

    //Creating the bars
    const bars = svg.selectAll(".bar")
                   .data(filteredRates)
                   .enter().append("rect")
                   .attr("class", "bar")
                   .attr("x", d => x(d.country))
                   .attr("y", d => y(d.rate))
                   .attr("width", x.bandwidth())
                   .attr("height", d => height - y(d.rate))
                   //.attr("fill", d => d.country === selectedCurrency ? "green" : "steelblue");

       svg.append("text")
          .attr("x", width / 2)
          .attr("y", height + margin.bottom -10)
          .attr("text-anchor", "middle")
          .style("font-size", "22px")
          .text("Currency Rates");
       
    const tooltip = d3.select(".tooltip");

   // svg.selectAll(".bar")
    bars
       .on("mouseover", function(event, d) {
       // if(d.country !== selectedCurrency){
           d3.select(this)
             .style("fill", "yellow");            
        //}

       tooltip.style("opacity", 1)
              .html(`Country: ${d.country}<br>Rate: ${d.rate.toFixed(4)}`)
              .style("left", (event.pageX + 5) + "px")
              .style("top", (event.pageY - 28) + "px");
   })
   .on("mouseout", function(event, d) {
  //  if(d.country !== selectedCurrency){
       d3.select(this)
         .style("fill", "steelblue");        
   // }
     tooltip.style("opacity", 0);
   });

   //selected currency from the dropdown 
   let selectedCurrency = "";

   //graph must update as currency is selected
   d3.select("#currency-dropdown").on("change", function(){
    selectedCurrency = this.value;

    //selected currency bar needs to be highlighted
    bars.style("fill", d=> d.country === selectedCurrency ? "green" : "steelblue");
   })
}