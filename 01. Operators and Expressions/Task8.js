
function solve(args) {
    'use strict';
    var a = +args[0], b = +args[1], h = +args[2]; 
    var area = ((a + b) * h) / 2;
    console.log(area.toFixed(7));
    
}

solve(8.5,4.3,2.7);