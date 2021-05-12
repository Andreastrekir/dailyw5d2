//Follow these steps :

//Get the value of each of the inputs in the HTML file when the button is clicked.
//Make sure the values are not empty
//Write a story that uses each of the values.
//Make sure you check the console for errors when playing the game.
//Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get 
//a new story. Display the stories randomly.



let button = document.getElementById('lib-button');

function story(){
	let noun = document.getElementById('noun').value
	//let adjetive = document.getElementById('adjetive').value
	let name = document.getElementById('name').value
	let food = document.getElementById('food').value
 	let place = document.getElementById('place').value
 	let div = document.createElement('div')

 	div.innerHTML= `There a person ${name} that born in ${place} and he is ${adjetive} cooking ${food}`

 	document.body.appendChild(div)
 	
}


button.addEventListener('click', story);






















