
function solve(a) {

    'use strict';
    
    if ((a % 5 === 0) && (a % 7 === 0)) {
        console.log("true " + a);
    }
    else{
        console.log("false " + a);
    }
}

solve(17);