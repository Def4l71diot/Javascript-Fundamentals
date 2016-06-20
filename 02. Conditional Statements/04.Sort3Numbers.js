function solve(params) {
    'use strict';
    var a = +params[0],
        b = +params[1],
        c = +params[2];

    var first = 0;
    var second = 0;
    var third = 0;

            if (a >= b)
            {
                if (a >= c)
                {
                    first = a;

                    if (b >= c)
                    {
                        second = b;
                        third = c;
                    }
                    else
                    {
                        second = c;
                        third = b;
                    }
                }
                else
                {
                    first = c;
                    second = a;
                    third = b;
                }                
            } 
   
            else
            {
                if (b >= c)
                {
                    first = b;

                    if (a >= c)
                    {
                        second = a;
                        third = c;
                    }
                    else
                    {
                        second = c;
                        third = a;
                    }
                }
                else
                {
                    first = c;
                    second = b;
                    third = a;
                }            
            }

            console.log(first + " " + second + " " + third);
}

solve(['-2','-2','1'])