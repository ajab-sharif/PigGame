'use strict';
// Selection Element //////////////////////////////////
const player0El = document.querySelector('player--0');
const player1El = document.querySelector('player--1');
const playerName0 = document.getElementById('name--0');
const playerName1 = document.getElementById('name--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// GAME FUNCTIONALITY////////////////////////////////////////////
// function ////////////////
const switchPlayer = function () {  // switching Player // //////////////
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${0}`).classList.toggle('player--active');
    document.querySelector(`.player--${1}`).classList.toggle('player--active');
}

// starting time
let currentScore, activePlayer, score, playing;
const init = function () { // starting Time////////////////////////////////////
    currentScore = 0;
    activePlayer = 0;
    score = [0, 0];
    playing = true;
    score0El.textContent = 0;
    current0El.textContent = 0;
    score1El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    document.querySelector('.player--0').classList.add('player--active')
    document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
}
init();
// Roll Dice 
btnRoll.addEventListener('click', function () {
    if (playing) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

/// HOLD SCORE//////////////////////
btnHold.addEventListener('click', function () {
    if (playing) {
        score[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        if (score[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner');
        } else {
            switchPlayer();
        }
    }
})

// Play Again/////////
btnNew.addEventListener('click', function () {
    init();
})