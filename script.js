function insert_Row() {
    // Access the table element by its ID
let table = document.getElementById("sampleTable");

// Create a new row element
let newRow = table.insertRow(0); // '-1' appends the row at the end of the table

// Create and insert new cells into the new row
let cell1 = newRow.insertCell(0);
let cell2 = newRow.insertCell(1);

// Add content to the new cells
cell1.innerHTML = "New Cell1";
cell2.innerHTML = "New Cell2";

}