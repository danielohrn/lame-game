const IO = require('./IO'); 

class Fight {
    
    constructor(warriorOne, warriorTwo) {
  
      this.strikes = 0; 
      this.fightOver = false;
      this.winner = null;  

      if(warriorOne && warriorTwo)  
        this.startFight(warriorOne, warriorTwo);
  
    }
  
    startFight(warriorOne, warriorTwo) {
      while( (warriorOne.health > 0 || warriorTwo.health > 0) 
            && !this.fightOver ) {
  
              if(this.strikes % 2 === 0) {
                this.attack(warriorOne, warriorTwo);
              } else {
                this.attack(warriorTwo, warriorOne);
              }
      }
    }
  
    resetFight() {
      this.strikes = 0; 
      this.fightOver = false;
      this.winner = null; 
    }
  
    attack(attacker, defender) {
  
        const attackPow = attacker.calculateDmg() - defender.calculateBlock(); 
  
        if(defender.health - attackPow <= 0) {
          defender.health = 0;
          this.fightOver = true;
          this.winner = attacker; 
               
          return; 
        }
  
        if(attackPow > 0) {
          defender.health -= attackPow;
          
          IO.Print().Success(attacker.name,'deals', attackPow, 'DAMAGE on', defender.name + '!');   
        } else {
          IO.Print().Warn(attacker.name + '\'s attack was BLOCKED by', defender.name + '!');  
        }
  
      ++this.strikes; 
    }
  
    announceWinner() {
      IO.Print().Success('\nTHE WINNER IS:', this.winner.name, '\n'); 
    }

    getWinner() {
        return this.winner; 
    }
  
}

module.exports = Fight; 