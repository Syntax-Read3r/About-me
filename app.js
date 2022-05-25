"use strict";

let userGuess = function () {
	let res = 0;

	alert("Let's play a game. NOTE: Yes or No answers only");
	let capitalCity = prompt("Is the capital city of London, London?");

	while (
		capitalCity.toLowerCase() !== "yes" &&
		capitalCity.toLowerCase() !== "no"
	) {
		capitalCity = prompt("Please enter a value that's either a Yes or No.");
	}

	if (capitalCity.toLowerCase() == "yes") {
		res += 1;
		alert("Interesting, you are right.");
	} else {
		alert("You need Google in your life");
	}

	// NOTE: second question
	let spainCity = prompt("What is the capital of Spain?");

	while (
		spainCity.toLowerCase() !== "yes" &&
		spainCity.toLowerCase() !== "no"
	) {
		spainCity = prompt("Please enter a value that's either a Yes or No.");
	}

	if (spainCity.toLowerCase() == "no") {
		res += 1;

		alert("Fascinating, you might actually be smart");
	} else {
		alert("You need Google in your life");
	}

	// NOTE: third question
	let stepsCity = prompt(
		"10 steps take 5 steps twice and 20 steps takes 2 times when 10 steps are a step. Is this statement true?"
	);

	while (
		stepsCity.toLowerCase() !== "yes" &&
		stepsCity.toLowerCase() !== "no"
	) {
		stepsCity = prompt("Please enter a value that's either a Yes or No.");
	}

	if (stepsCity.toLowerCase() == "yes") {
		res += 1;

		alert("Well, this is truly a walk in the park for you.");
	} else {
		alert(
			"Breaking News!! We have a sunny day and a sprinkle of a wrong answer"
		);
	}

	// NOTE: four question
	let pillar = prompt(
		"Four bottle of wine in a tree. Are there more than four bottles of wine in a tree?"
	);

	while (pillar.toLowerCase() !== "yes" || pillar.toLowerCase() !== "no") {
		pillar = prompt("Please enter a value that's either a Yes or No.");
	}

	if (pillar.toLowerCase() == "no") {
		res += 1;

		alert("Those are truely good eyes, do you want to exchange?");
	} else {
		alert("This question was a trick one, The brand four bottle is in a tree.");

		//NOTE: five question
		let what = prompt(
			"Is today Wednesday if yesterday was tomorrow, today would be Friday?"
		);

		while (what.toLowerCase() !== "yes" || what.toLowerCase() !== "no") {
			what = prompt("Please enter a value that's either a Yes or No.");
		}

		if (what.toLowerCase() == "yes") {
			res += 1;
			alert("Bravo!!, Game completed");
		} else {
			alert(
				"Not this time champ, The answer is.. if x - 1 ==> x + 1 then x ==> x + 2, x + 2 = Friday, x = Wednesday"
			);
		}
	}
	return res;
};

userGuess();
