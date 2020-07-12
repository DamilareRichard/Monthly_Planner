const myBtn = document.querySelector('.addBtn');
let amount = document.querySelector('.amount-input');
let add = document.querySelector('.add-input');
let note = document.querySelector('.note-input');
let date = document.querySelector('.date-input');
const table = document.querySelector('.history-table')
const trash = document.querySelector('.trash-o-btn')



myBtn.addEventListener('click', () => {
	let amtValue = amount.value;
	let addValue = add.value;
	let noteValue = note.value;
	let dateValue = date.value;




	if(amtValue === '' | addValue === '' | noteValue === '' | dateValue === '') {
		alert('Please fill all the inputs');
	} else {
		const inputs = [dateValue, addValue, noteValue, amtValue];
		let row = table.insertRow(1);
		for(let i=0; i<4; i++) {
			let cell = row.insertCell(i);
			cell.innerHTML = inputs[i];
		}
	}

	// To remove entered inputs
	document.querySelector('.amount-input').value = '';
	document.querySelector('.add-input').value = '';
	document.querySelector('.note-input').value = '';
	document.querySelector('.date-input').value = '';



	


let input = [

	amtValue, addValue, noteValue, dateValue 

];

localStorage.setItem('mylist', JSON.stringify(input) );

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('addBtn').addEventListener('click', myBtn);
})

})







