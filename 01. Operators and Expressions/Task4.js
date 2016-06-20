
function solve(a) {

    'use strict';
    
    var thirdDigit = Math.floor(a / 100) % 10;
    if (thirdDigit === 7) {
        console.log('true');
    }
    else{
        console.log('false ' + thirdDigit);
    }    
}

solve(1010111001777);