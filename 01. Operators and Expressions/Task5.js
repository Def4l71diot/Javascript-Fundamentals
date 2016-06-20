

function solve(a) {
    'use strict';
    var mask = 1 << 3;
    var temp = a & mask;
    console.log(temp >> 3);

}

solve(1024);