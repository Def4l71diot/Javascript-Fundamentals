function solve(args) {
    'use strict';
    
    var a = +args[0],
        b = +args[1],
        c = +args[2];
    
    if ((a === 0)||(b === 0)||(c === 0)) {
        console.log(0);        
    }
    else{
        var counter = 0;
        if (a < 0) {
            counter += 1;
        }
        if (b < 0) {
            counter += 1;
        }
        if (c < 0) {
            counter += 1;
        }

        if (counter === 0 || counter === 2) {
            console.log('+');
            
        }
        else{
            console.log('-');           
        }
    }
}

solve(['-5','-5','-5']);