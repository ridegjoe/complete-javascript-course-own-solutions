/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);
// document.querySelector('#current-0').textContent = dice;
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// wrong
// document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';
// document.querySelector('#current-' + activePlayer).textContent = dice;
//
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

/*
// External function of button
function btn() {
    // Do something here
}
btn();
*/

// eventListener method with anonymous function
document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1; // I declare it here. I don't need it outside

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    // document.querySelector('.dice').style.display = 'block';
    diceDOM.style.display = 'block';
    // dice-1.png, dice-2.png, ... dice-6.png
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score but only IF the rolled number is NOT a 1

});




