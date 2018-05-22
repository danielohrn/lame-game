const readline = require('readline'); 
const clc = require('cli-color');

const PrintTypes = {
    Warn(...messages) {
        console.log(clc.red.bold(...messages)); 
    },
    Success(...messages) {
        console.log(clc.green.bold(...messages)); 
    }, 
};

class IO {

    static Ask(q) {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        return new Promise(resolve => {
            rl.question(q, (answer) => {
                resolve(answer); 
                rl.close();    
            });
        }) 
    }

    static Print() {
        return PrintTypes;
    }

}

module.exports = IO; 