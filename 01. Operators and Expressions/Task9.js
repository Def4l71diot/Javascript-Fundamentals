/* globals console */

function solve(args) {
    
    'use strict';
    var a = +args[0], b = +args[1];
    var insideCircle = (a - 1) * (a - 1) + (b - 1) * (b - 1) <= 1.5 * 1.5;
    var insideRectangle = (a >= -1 && a <= 6) && (b >= -1 && b <= 1);

    if (insideCircle) {
        if (insideRectangle) {
            console.log("inside circle inside rectangle");
        }
        else {
            console.log("inside circle outside rectangle");
        }
    }
    else if (insideRectangle) {
        console.log("outside circle inside rectangle");
    }
    else {
        console.log("outside circle outside rectangle");
    }
}

solve(1,2);