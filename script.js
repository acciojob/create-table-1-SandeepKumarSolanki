


let table = document.getElementById('sampleTable');
// let btn = document.querySelector('button');
// btn.addEventListener("click" , insert_Row);
function insert_Row() {
    //Write your code here
	// Create a new row (tr)
    let tr = document.createElement('tr');
    
    let td1 = document.createElement('td');
    td1.innerText = `New Cell1`;
    tr.append(td1);
    

    let td2 = document.createElement('td');
    td2.innerText = `New Cell1`;
    tr.append(td2);
    
    // Append the row to the table
     table.insertBefore(tr, table.firstChild);
}
