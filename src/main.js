
const Warrior = require('./Warrior'); 
const Fight = require('./Fight'); 
const IO = require('./IO'); 

function play() {
    IO.Ask('Player 1 name: ')
        .then(p1 => (  
            IO.Ask('Player 2 name: ')
             .then(p2 => {
    
                let fight = new Fight(
                    new Warrior(p1, 100, 5, 5),
                    new Warrior(p2, 100, 5, 5)); 
            
                fight.announceWinner();
                fight.winner.levelUp(); 
                fight.resetFight(); 

                mainMenu(); 
            }) 
    )); 
}

function welcomeMenu() {

    IO.Print().Success(
        "=======================\n\THE LAME WARRIOR GAME!\n=======================\n"
    );

    console.log(
        "Welcome. \n\
        This is a very lame 2-player game. \n\
        Bring a friend and press 1 to begin \n"
    ); 

    mainMenu(); 
}

function mainMenu() {
    IO.Ask('[1]Start a fight\n[Q]Quit\n')
     .then(input => {
        if(input.toString() === "1") 
            play();
            
        else console.log('Bye.'); 
   }); 
}

module.exports = welcomeMenu; 
 







