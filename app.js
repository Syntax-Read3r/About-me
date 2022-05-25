"use strict";

let userGuess = function () {
	let res = 0;

	alert("Let's play a game. NOTE: Yes or No answers only");
	let getName = prompt(
		"First, let's get know each other. I am Munyaradzi. What is your name?"
	);

	let capitalCity = prompt(
		`Is it true that I lived in Birmingham once upon a time?`
	);

	while (
		capitalCity.toLowerCase() !== "yes" &&
		capitalCity.toLowerCase() !== "no"
	) {
		capitalCity = prompt("Please enter a value that's either a Yes or No.");
	}

	if (capitalCity.toLowerCase() == "no") {
		res += 1;
		alert("Interesting, you are right.");
	} else {
		alert("Tough, you are wrong.");
	}

	// NOTE: second question
	let spainCity = prompt(
		"Is it true that I have 4 toes. It is said that I lost one when a I was a child"
	);

	while (
		spainCity.toLowerCase() !== "yes" &&
		spainCity.toLowerCase() !== "no"
	) {
		spainCity = prompt("Please enter a value that's either a Yes or No.");
	}

	if (spainCity.toLowerCase() == "no") {
		res += 1;

		alert(`Go ${getName}!!, Go ${getName}!! That is correct`);
	} else {
		alert(
			"Actually I have six minus 3 divided by the square root of !!Stop reading you are wrong!! "
		);
	}

	// NOTE: third question
	let stepsCity = prompt(
		`Is it true that I moved to England from South Africa`
	);

	while (
		stepsCity.toLowerCase() !== "yes" &&
		stepsCity.toLowerCase() !== "no"
	) {
		stepsCity = prompt("Please enter a value that's either a Yes or No.");
	}

	if (stepsCity.toLowerCase() == "no") {
		res += 1;

		alert("Well well well, this is truly a walk in the park for you.");
	} else {
		alert(
			"Breaking News!! We have a sunny day and a sprinkle of a wrong answer"
		);
	}

	// NOTE: four question
	let pillar = prompt("Was Munyaradzi as a child a basketball lover?");

	while (pillar.toLowerCase() !== "yes" && pillar.toLowerCase() !== "no") {
		pillar = prompt("Please enter a value that's either a Yes or No.");
	}

	if (pillar.toLowerCase() == "yes") {
		res += 1;
		alert("Correct, I will make the next one tougher?");
	} else {
		alert("Not this time champ.");
	}

	//NOTE: five question
	let what = prompt(
		`I grew up with a friend who had the same as me, and we were best friends, Then I met ${getName} who happened to have the same name as you. Was my childhood bestfriends' name Munyaradzi? `
	);

	while (what.toLowerCase() !== "yes" || what.toLowerCase() !== "no") {
		what = prompt("Please enter a value that's either a Yes or No.");
	}

	if (what.toLowerCase() == "yes") {
		res += 1;
		alert("Well my attempt to confuse you did not work. Great work");
	} else {
		alert(
			`Imagine me dancing at the fact that you are wrong. Now know that you are wrong`
		);
	}

	alert(`Well done, so far you have gotten ${res} out of 5. Let's change the pace a little bit.`)

	//NOTE: six question
	//

	let ress = 2008;
	let ansr = prompt('What year did I break my leg?');
	let chcker = false;

	for(let x = 4; x > 4; x--) {
		if(ansr != ress) {
			alert('Wrong answer, You have ' + x +  ' attempts left')
			if (ansr < 2007) {
				alert('Go highier!')
			} else {
				alert('Go lower!')
			}

		} else {
			alert('Great job')
		}
	}			

	if (!chcker) {
		alert('The year I broke my leg was 2008. This happed while I was playing basketball in High School.')
	}

	return res;
};

userGuess();
