
function solve(args) {
    'use strict';
    
    var a = +args[0];
    var b = +args[1];
    var perimeter = 2 * (a + b);
    var area = a * b;
    console.log(area.toFixed(2) + " " + perimeter.toFixed(2));
}

solve(3, 4);