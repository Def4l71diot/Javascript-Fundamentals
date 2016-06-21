function solve(params) {
    'use strict';
    
    var min = +params[0], 
    max = +params[0], 
    sum = +params[0];

    for (var index = 1; index < params.length; index += 1) {
        if (+params[index] < min) {
            min = +params[index];
        }
        if (+params[index] > max) {
            max = +params[index]
        }
        sum += +params[index];
    }

    var average = sum / params.length;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + average.toFixed(2));
    
}