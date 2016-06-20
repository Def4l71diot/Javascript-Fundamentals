function solve(args) {
    'use strict';
    
    var a = +args[0],
        b = +args[1];
    
    if (a > b) {
        console.log(b + " " + a);
    }
    else{
        console.log(a + " " + b);     
    }
}

solve(['3', '4']);