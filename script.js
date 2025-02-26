

let table = document.getElementById('sampleTable');
function insert_Row() {
    //Write your code here
	let tr = document.createElement('tr');
	let td = document.createElement('td');
	td.innerText = `Row Cell`;
	let td = document.createElement('td');
	td.innerText = `Row Cell`
	tr.append(td , td);
	table.append(tr);
	
}
