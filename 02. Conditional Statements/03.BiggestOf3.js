function solve(params) {
    'use strict';
    var a = +params[0],
        b = +params[1],
        c = +params[2];
    
    console.log(Math.max(a, Math.max(b, c)));
    
}

solve(['-2','-2','1']);