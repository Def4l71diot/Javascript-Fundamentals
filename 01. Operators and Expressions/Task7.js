

function solve(a) {
    'use strict';
    
    if ((a <= 1)) {
        console.log(false);
    }
    else{
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) {
                isPrime = false;
                break;
            }            
        }

        console.log(isPrime);       
    }
}

solve(7);