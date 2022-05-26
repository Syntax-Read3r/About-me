"use strict";

//This function will ask the player for their name. 
let getUsername = function () {
	let res = 0;

	alert("Let's play a game. NOTE: Yes or No answers only");

	let getName = prompt(
		"First, let's get know each other. I am Munyaradzi. What is your name?"
	);
	return getName 
}

	//Question One
	function questionOne() {

	let answerOne = prompt(
		`[Let's Begin] Is it true that I lived in Birmingham once upon a time?`
	);

	while (
		answerOne.toLowerCase() !== "yes" &&
		answerOne.toLowerCase() !== "no"
	) {
		answerOne = prompt("Please enter a value that's either a Yes or No.");
	}

	if (answerOne.toLowerCase() == "no") {
		res += 1;
		alert("Interesting, you are right.");
	} else {
		alert("Tough, you are wrong.");
	}
}

	//Question Two
	function questionTwo() {

	let answerTwo = prompt(
		"Is it true that I have 4 toes. It is said that I lost one when a I was a child"
	);

	while (
		answerTwo.toLowerCase() !== "yes" &&
		answerTwo.toLowerCase() !== "no"
	) {
		answerTwo = prompt("Please enter a value that's either a Yes or No.");
	}

	if (answerTwo.toLowerCase() == "no") {
		res += 1;

		alert(`Go ${getUsername()}!!, Go ${getUsername()}!! That is correct`);
	} else {
		alert(
			"Actually I have six minus 3 divided by the square root of !!Stop reading you are wrong!! "
		);
	}
}

	//Quesiton Three 

	function questionThree() {
	let answerThree = prompt(
		`Is it true that I moved to England from South Africa`
	);

	while (
		answerThree.toLowerCase() !== "yes" &&
		answerThree.toLowerCase() !== "no"
	) {
		answerThree = prompt("Please enter a value that's either a Yes or No.");
	}


	if (answerThree.toLowerCase() == "no") {
		res += 1;

		alert("Well well well, this is truly a walk in the park for you.");
	} else {
		alert(
			"Breaking News!! We have a sunny day and a sprinkle of a wrong answer"
		);
	}
}

	//Question Four

	function questionFour() {

	let answerFour = prompt("Was Munyaradzi as a child a basketball lover?");

	while (answerFour.toLowerCase() !== "yes" && answerFour.toLowerCase() !== "no") {
		answerFour = prompt("Please enter a value that's either a Yes or No.");
	}

	if (answerFour.toLowerCase() == "yes") {
		res += 1;
		alert("Correct, I will make the next one tougher?");
	} else {
		alert("Not this time champ.");
	}
}

	//Question Five
	function questionFive() {

	let answerFive = prompt(
		`I grew up with a friend who had the same as me, and we were best friends, Then I met ${getName} who happened to have the same name as you. Was my childhood bestfriends' name Munyaradzi? `
	);

	while (answerFive.toLowerCase() !== "yes" && answerFive.toLowerCase() !== "no") {
		answerFive = prompt("Please enter a value that's either a Yes or No.");
	}

	if (answerFive.toLowerCase() == "yes") {
		res += 1;
		alert("Well my attempt to confuse you did not work. Great work");
	} else {
		alert(
			`Imagine me dancing at the fact that you are wrong. Now know that you are wrong`
		);
	}

	alert(`Well done, so far you have gotten ${res} out of 5. Let's change the pace a little bit.`)


	//Question Six
	function questionSix() {
		let chcker = false;
	let correctAnswer = 2008;
	let answerSix = prompt('What year did I break my leg?');

	for(let x = 3; x > 0; x--) {

		if(answerSix != correctAnswer) {
			alert('Wrong answer, You have ' + x +  ' attempts left')
			if (answerSix < 2007) {
				alert('Go higher!')
			} else {
				alert('Go lower!')
			}
           answerSix = prompt('What year did I break my leg?')
		} else {
			res += 1
			chcker = true;
			alert('Great job')
			break;
		}
	}
	if (!chcker) {
		alert('The year I broke my leg was 2008. This happened while I was playing basketball in High School.')
	}
	
}			

	


	//NOTE: Question Seven

	alert('This is the final question. This question will have multiple correct answers.')

	// let 

	// return res;
};

