function solve(params) {
    'use strict';
    
    var a = +params[0],
        b = +params[1],
        c = +params[2];
    
    var d = b*b - 4*a*c;

    if (d < 0) {
        console.log('no real roots');
        
    }
    else if (d === 0) {
        var x = (-b)/(2*a);
        console.log('x1=x2=' + x.toFixed(2));      
    }
    else{
        var x1 = ((-b + Math.sqrt(d)) / (2*a)),
            x2 = ((-b - Math.sqrt(d)) / (2*a));
        
        console.log('x1=' + Math.min(x1,x2).toFixed(2) + '; x2=' + Math.max(x1, x2).toFixed(2));      
    }
}

solve(['-0.5','4','-8']);