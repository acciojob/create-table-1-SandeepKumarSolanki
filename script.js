let table = document.getElementById('sampleTable');
// let btn = document.querySelector('button');
// btn.addEventListener("click", insert_Row);

function insert_Row() {
    // Create a new row (tr)
    let tr = document.createElement('tr');
    
    // Create the first cell (td) with the text "New Cell1"
    let td1 = document.createElement('td');
    td1.innerText = `New Cell1`;  // First cell text
    tr.append(td1);
    
    // Create the second cell (td) with the text "New Cell2"
    let td2 = document.createElement('td');
    td2.innerText = `New Cell2`;  // Second cell text
    tr.append(td2);
    
    // Insert the new row at the top of the table
    table.insertBefore(tr, table.firstChild);
}
