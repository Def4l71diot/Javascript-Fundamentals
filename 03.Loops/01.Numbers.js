function solve(params) {
    'use strict';
    var n = +params[0],
        toPrint = "";
    for (var num = 1; num <= n; num += 1) {
        toPrint += num + " ";
    }

    console.log(toPrint);
    
}

solve(['4']);