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
activePlayer = 0;

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
    if (dice !== 1) {
        // Add score
        roundScore += dice; // cleaner way
        // more comlicated way: roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextPlayer();
    }

});


// in HTML:
// <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI (User Interface)
    // <div class="player-score" id="score-0">43</div>
    // <div class="player-score" id="score-1">72</div>
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game

    /* my own solution
    if (scores[activePlayer] >= 100) {
        console.log("The winner is: player" + (activePlayer+1) + " with " + scores[activePlayer] + " points");
    } else {
        // Next player
        nextPlayer();
    }
    end of my own solution */

    // official solution
    // in html: <div class="player-name" id="name-0">Player 1</div>
    // in html: <div class="player-name" id="name-1">Player 2</div>
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // Next player
        nextPlayer(); 
    }

    // winner style in css:
    // .winner { background-color: #f7f7f7; }
    // .winner .player-name { font-weight: 300; color: #EB4D4D; }

    // in html the entire left or right side
    // <div class="player-1-panel">


});


function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    // resetting values to zero, if someone gets 1 and looses.
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // with toggle
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}



