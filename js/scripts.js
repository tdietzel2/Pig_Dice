// Business Logic

function PigDice(player1, player2, rollScore) {
    this.player1 = player1;
    this.player2 = player2;
    this.rollScore = rollScore;
    this.currentPlayer = 1;
  }
  
  PigDice.prototype.rollDice = function() {
      let currentRoll = Math.floor(Math.random() * 6) + 1;
      if (this.player1 + currentRoll + this.rollScore >= 100 ||  this.player2 + currentRoll + this.rollScore >= 100) {
          if (this.player1 + currentRoll + this.rollScore >= 100) {
              return "Player 1 wins!";
          } else if (this.player2 + currentRoll + this.rollScore >= 100) {
              return "Player 2 wins!";
          }
      } else {
      }        if (currentRoll != 1) {
              this.rollScore += currentRoll;
          } else {
              this.rollScore = 0;
              this.switchPlayer();
              this.currentScore();
          }
  
      return currentRoll;
  };
   
  PigDice.prototype.currentScore = function() {
      playerSwitch();
  };
  
  PigDice.prototype.switchPlayer = function() {
      if (this.currentPlayer === 1) {
          this.currentPlayer += 1;
      } else {
          this.currentPlayer -= 1;
      }
  }
  
  PigDice.prototype.hold = function() {
    if (this.currentPlayer === 1) {
      this.player1 += this.rollScore;
      this.rollScore = 0;
     } else if (this.currentPlayer === 2) {
      this.player2 += this.rollScore;
      this.rollScore = 0;
     }
      this.switchPlayer();
  }
  
  // User Interface Logic
  let pigDice = new PigDice(0,0,0);
  
  window.addEventListener("load", function(){
      document.querySelector("button#roll").addEventListener("click", () => {
          document.querySelector("p#player-switch").innerHTML = null;
          const rollResult = pigDice.rollDice();
          document.getElementById("new-roll").innerText = rollResult;
          document.getElementById("current-player").innerText = pigDice.currentPlayer;
          document.getElementById("counter").innerHTML = pigDice.rollScore;
      });
          document.querySelector("button#hold").addEventListener("click", () => {
          pigDice.hold();
          document.getElementById("player1").innerText = pigDice.player1;
          document.getElementById("player2").innerText = pigDice.player2;
          document.getElementById("current-player").innerText = pigDice.currentPlayer
          document.getElementById("counter").innerHTML = pigDice.rollScore;
      });
  })
  
  function playerSwitch() {
      document.querySelector("p#player-switch").innerHTML = "Oops you rolled a 1... Next players turn.";
  }