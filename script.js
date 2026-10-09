// Selecting elements Player
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
// Selecting elements Score
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
// Selecting elements Current
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
// Selecting elements Btn
const diceE = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let score , currentScore , activePlayer , playing ;

const init = function (){
  score = [0,0];
  currentScore = 0 ;
  activePlayer = 0 ;
  playing = true ;

  score0.textContent = 0 ;
  score1.textContent = 0 ;

  current0.textContent = 0 ;
  current1.textContent = 0 ;

  diceE.classList.add("hidden");

  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};

init();

const switchPlayer = function(){

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0 ;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};


btnRoll.addEventListener("click" , function (){
  if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1 ;
    diceE.classList.remove("hidden");
    diceE.src = `./images/dice-${dice}.png`;

    if(dice !== 1 ){
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});


btnHold.addEventListener("click" , function(){
  if(playing){
    score[activePlayer] += currentScore ;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    if(score[activePlayer] >= 100){
      playing = false ;
      diceE.classList.add("hidden");

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click" , init);