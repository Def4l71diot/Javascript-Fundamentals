function solve(params) {
    var hex = params[0],
        finalNumber = 0,
        step = 0,
        current;
    for (var index = hex.length - 1; index >= 0; index -= 1) {

        var element = hex[index];
        
        if (element >= 0 || element < 10) {
            current = element;
        }
        else{
            switch(element)
            {
                case "A": current = 10; break;
                case "B": current = 11; break;
                case "C": current = 12; break;
                case "D": current = 13; break;
                case "E": current = 14; break;
                case "F": current = 15; break;
            }
        }
        finalNumber += current*Math.pow(16, step);
        
        step += 1;
    }

    console.log(finalNumber);
    
}

solve(['4ED528CBB4']);