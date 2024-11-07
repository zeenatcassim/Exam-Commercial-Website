/*

const url = 'https://data.fixer.io/api/latest?access_key=f156ee3163e52435edb8cdf84303eee1';
const options = {
    method: 'GET'
};



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
            .padding(0.9)
            .paddingInner(0.1);

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
        .style("font-size", "9px")
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
    bars.style("fill", d=> d.country === selectedCurrency ? "red" : "steelblue");
   })
}


//Conversion chart - data viz 2

const symbolsURL = 'https://data.fixer.io/api/symbols?access_key=f156ee3163e52435edb8cdf84303eee1';

const optionS = {
    method: 'GET'
};

fetch(symbolsURL, optionS)
.then((response) => response.json())
.then((data) => {

    const currencies = data.symbols;

    if(!currencies){
    console.error("No symbols found in the API response");
    return;
    }

    const baseCurrencyDropdown = document.getElementById('base-currency');
    const targetCurrencyDropdown = document.getElementById('target-currency');

    //need to populate the dropdowns with the currencies
    for(const currency in currencies){
        const baseOption = document.createElement('option');
        baseOption.value = currency;
        baseOption.textContent = `${currency} - ${currencies[currency]}`;
        baseCurrencyDropdown.appendChild(baseOption);

        const targetOption = document.createElement('option');
        targetOption.value = currency;
        targetOption.textContent = `${currency} - ${currencies[currency]}`;
        targetCurrencyDropdown.appendChild(targetOption);        
    }
})
.catch((error) => {
    console.log("There is something wrong!", error);
})

//Converting the currency 
function convertCurrency(){
  const baseCurrency = document.getElementById('base-currency').value;
  const targetCurrency = document.getElementById('target-currency').value;
  const amount = parseFloat(document.getElementById('amount').value);

  //console.log("Base Amount:", baseAmount, "Target Amount:", targetAmount);

  if(!amount || amount <= 0){
  alert('Please enter a valid amount');
  return;
  }

  const convertURL = `https://data.fixer.io/api/convert?access_key=f156ee3163e52435edb8cdf84303eee1&from=${baseCurrency}&to=${targetCurrency}&amount=${amount}`;

  fetch(convertURL, optionS)
  .then(response => response.json())
  .then(data => {
    if (data.error) {
        console.error("API Error:", data.error);
        return;
    }

    if(data.success){
    const convertedAmount = data.result;

    document.getElementById('result').textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${targetCurrency}`;
   
    displayChart(amount, convertedAmount, baseCurrency, targetCurrency);
    }
    }).catch(error => {
        console.error("failed to convert currency: ", error);
    });
}

//adding the convertCurrency() to the convert btn
document.getElementById('convert-btn').addEventListener('click', convertCurrency);

function displayChart(baseAmount, targetAmount, baseCurrency, targetCurrency){
 
  d3.select("#chart").selectAll("*").remove();
  
    const svg = d3.select('#chart');
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const margin = {top: 20, right: 30, bottom: 40, left: 40};
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const g = svg.append('g')
                 .attr('transform', `translate(${margin.left}, ${margin.top})`);

    //creating the scales
    const xScale = d3.scaleBand()
    .domain([baseCurrency, targetCurrency])
    .range([0, chartWidth])
    .padding(0.4);
    
    const yScale = d3.scaleLinear()
    .domain([0, Math.max(baseAmount, targetAmount)])
    .range([chartHeight, 0]);

    const barColour = '#007acc';

    const data = [
    { category: baseCurrency , amount: baseAmount}, 
    {category: targetCurrency, amount: targetAmount}
    ];
    

    //bars and target amounts
    g.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'data2-bars')
        .attr('x', d => xScale(d.category))
        .attr('y', d => yScale(d.amount))
        .attr('width', xScale.bandwidth())
        .attr('height', d => chartHeight - yScale(d.amount))
        .attr('fill', barColour)
        
    g.selectAll(".text")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", d => xScale(d.category) + xScale.bandwidth() / 2)
        .attr("y", d => yScale(d.amount) - 5)
        .attr("text-anchor", "middle")
        .text(d => `${d.amount.toFixed(2)}`);

    g.selectAll(".hash-line")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", d => xScale(d.category) + xScale.bandwidth()/2)
        .attr("y1", d => yScale(d.amount))
        .attr("x2", 0)
        .attr("y2", d => yScale(d.amount))
        .attr("stroke", "#ffffff")
        .attr("stroke-dahsarray", "4");

    const difference = targetAmount - baseAmount;
    const differenceText = difference > 0 ? `+${difference.toFixed(2)} (Profit)` : `${difference.toFixed(2)} (Loss)`;
    
    svg.append("text")
        .attr("x", chartWidth / 2 + margin.left)
        .attr("y", height - 7)
        .attr("text-anchor", "middle")
        .attr("font-size", "14px")
        .attr("fill", difference > 0 ? "green" : "red")
        .text(`Difference: ${differenceText}`);

    // Add x-axis
    g.append('g')
        .attr('transform', `translate(0,${chartHeight})`)
        .call(d3.axisBottom(xScale));

    // Add y-axis
    g.append('g')
        .call(d3.axisLeft(yScale));
}*/
