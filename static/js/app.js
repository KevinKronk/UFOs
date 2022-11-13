// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

// Build a table
function buildTable(data) {
    // Clear out existing data
    tbody.html("");
    // Loop through each object in the data array
    data.forEach((dataRow) => {
        // Append a row to the table
        let row = tbody.append("tr");
        // grab the values in the dataRow and loop through each
        Object.values(dataRow).forEach((val) => {
            // Append a table data point 
            let cell = row.append("td");
            // Add the value to the text of the "td"
            cell.text(val);
        });
    });
}