class Random {
    static generateRandNum(ceiling) {
      return Math.floor(Math.random() * ceiling);
    }
}

module.exports = Random; 