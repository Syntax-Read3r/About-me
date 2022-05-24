 'use strict'

let userGuess =  function () {

    let res = 0

    alert('Let\'s play a game. NOTE: Yes or No answers only');
    let capitalCity = prompt('Is the capital city of London?');

    while (toLowerCase(capitalCity) !== 'yes' || toLowerCase(capitalCity) !== 'no') {
        rate = prompt('Please enter a value that\'s either a Yes or No.')
    };

    if (capitalCity.toLowerCase() == 'yes') {
        alert('Interesting')
    } else {
        res += 1
        alert('You need Google in your life')
    }

// NOTE: second question
let spainCity = prompt('What is the capital of Spain?');

while (toLowerCase(spainCity) !== 'yes' || toLowerCase(spainCity) !== 'no') {
    rate = prompt('Please enter a value that\'s either a Yes or No.')
};

if (spainCity.toLowerCase() == 'no') {
    alert('Fascinating, you might actually be smart')
} else {
    res += 1
    alert('You need Google in your life')
}

// NOTE: third question
let stepsCity = prompt('10 steps take 5 steps twice and 20 steps takes 5 times when 10 steps are a step. Is this statement true?' );

while (toLowerCase(stepsCity) !== 'yes' || toLowerCase(stepsCity) !== 'no') {
    rate = prompt('Please enter a value that\'s either a Yes or No.')
};

if (stepsCity.toLowerCase() == 'yes') {
    alert('Well, this is truly a walk in the park for you.')
} else {
    res += 1
    alert('Breaking News!! We have a sunny day and a sprinkle of a wrong answer')
}

// NOTE: four question
let Pillar = prompt('Four bottle of wine in a tree. Are there more than four bottles of wine in a tree?');

while (toLowerCase(capitalCity) !== 'yes' || toLowerCase(capitalCity) !== 'no') {
    rate = prompt('Please enter a value that\'s either a Yes or No.')
};

if (capitalCity.toLowerCase() == 'no') {
    alert('Those are truely good eyes, do you want to exchange')
} else {
    res += 1
    alert('The question was a trick one, The brand four bottle is in a tree.')

//NOTE: five question
let What = prompt('There was nine dwarfs and a princess in one fairy tale? Is this');

while (toLowerCase(capitalCity) !== 'yes' || toLowerCase(capitalCity) !== 'no') {
    rate = prompt('Please enter a value that\'s either a Yes or No.')
};

if (capitalCity.toLowerCase() == 'yes') {
    alert('Interesting')
} else {
    res += 1
    alert('You need Google in your life')
}
}
 }