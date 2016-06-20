
function solve(args) {
    'use strict';

    var a = +args[0];
    var b = +args[1];
    
    var radius = 2;

    var distance = Math.sqrt(a*a + b*b);

    if (distance <= radius) {
        console.log('yes ' + distance.toFixed(2));
    }
    else{
        console.log('no ' + distance.toFixed(2));
    }
}

solve(-1, 2);