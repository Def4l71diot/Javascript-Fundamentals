function solve(params) {
    'use strict';
    
    var width = +params[0],
        tempToPrint = "";

    for (var n = 1; n <= width; n++) {

        for (var m = n; m < n + width; m++) {
            tempToPrint += m + " ";
         }       
        console.log(tempToPrint);
        tempToPrint = "";
    }
}

solve(['8']);