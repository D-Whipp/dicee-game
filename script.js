console.log('hello world');

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log('Number 1: ', randomNumber1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// let dice1 = document.querySelector('.img1').getAttribute('src');

// let dice1 = document.querySelector('.img1');
// console.log('Dice 1: ', dice1);

// console.log("H1: ", document.querySelector('h1').innerHTML('One Winse'))
// let myh1 = document.querySelector('h1');
// console.log('H1: ', myh1);
// myh1.innerHTML = "hi";
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player One Wins!';
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player Two Wins!';
} else if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = 'Draw!';
}

if (randomNumber1 === 1) {
    document
        .querySelector('.img1')
        .setAttribute('src', './images/dice1.png');
} else if (randomNumber1 === 2) {
    document
        .querySelector('.img1')
        .setAttribute('src', './images/dice2.png');
} else if (randomNumber1 === 3) {
    document
        .querySelector('.img1')
        .setAttribute('src', './images/dice3.png');
} else if (randomNumber1 === 4) {
    document
        .querySelector('.img1')
        .setAttribute('src', './images/dice4.png');
} else if (randomNumber1 === 5) {
    document
        .querySelector('.img1')
        .setAttribute('src', './images/dice5.png');
} else {
    document
        .querySelector('.img1')
        .setAttribute('src', './images/dice6.png');
}

if (randomNumber2 === 1) {
    document
        .querySelector('.img2')
        .setAttribute('src', './images/dice1.png');
} else if (randomNumber2 === 2) {
    document
        .querySelector('.img2')
        .setAttribute('src', './images/dice2.png');
} else if (randomNumber2 === 3) {
    document
        .querySelector('.img2')
        .setAttribute('src', './images/dice3.png');
} else if (randomNumber2 === 4) {
    document
        .querySelector('.img2')
        .setAttribute('src', './images/dice4.png');
} else if (randomNumber2 === 5) {
    document
        .querySelector('.img2')
        .setAttribute('src', './images/dice5.png');
} else {
    document
        .querySelector('.img2')
        .setAttribute('src', './images/dice6.png');
}
