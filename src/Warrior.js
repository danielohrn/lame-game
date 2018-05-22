const Random = require('./Random'); 

class Warrior {
    
    constructor(name, maxHealth, maxAttack, maxBlock){
      this.name = name;
      this.health = maxHealth; 
      this.maxAttack = maxAttack;
      this.maxBlock = maxBlock; 
  
      this.level = 0;
    }
  
    levelUp() {
      this.level++; 
    }
  
    calculateBlock() {
      return Random.generateRandNum(this.maxBlock); 
    }
  
    calculateDmg() {
      return Random.generateRandNum(this.maxAttack); 
    }
}

module.exports = Warrior; 

