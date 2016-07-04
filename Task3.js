function solve(css) {

    var isOpen = false;
    var defaultPriority = 0,
        currentPriority = defaultPriority;
    var lines = [];
    var openTag = / *?(.*?) *?{(.*)/gi;
    var propertyRegex = / *(.*) *: *(.*) *;/gi;
    var priority = / *@([0-9]+) */gi,
        endPriority = /(.*); *@([0-9]+) */gi;
    var selectors = [];

    var priorities = [];
    for (var i = 0; i < css.length ; i += 1) {
        var element = css[i];


        if (element.includes('{')) {
            isOpen = true;
            var curSelector = element.replace(openTag, '$1');
            if(selectors.indexOf(curSelector) < 0){
                priorities[curSelector] = {};
                selectors.push(curSelector);
            }
            continue;
        }

        if(element.includes('}')){
            isOpen = false;
            continue;
        }

        //Override default priority for the entire doument
        if (!isOpen && priority.test(element)) {
            defaultPriority = +element.replace(priority, '$1');
            currentPriority = defaultPriority;
        }

        //Override currentPriority

        if (isOpen && checkIfOverrides(endPriority, element)) {
            currentPriority = +element.replace(endPriority, '$2');
        }
        else if (isOpen && checkIfOverrides(priority, element)) {
            currentPriority = +element.replace(priority, '$1');
            continue;
        }

        if (isOpen && !priorities[curSelector][element.replace(propertyRegex, '$1').replace(priority, '')]) {

            var prop = element.replace(propertyRegex, '$1').replace(priority, '');

            var value = element.replace(propertyRegex, '$2').replace(priority, '');

            priorities[curSelector][prop] = {
                    'priority': currentPriority,
                    'value': value,
                    'property': prop
                
            };
        }

        if(isOpen && propertyRegex.test(element)){
            var nextProp = element.replace(propertyRegex, '$1').replace(priority, '');
            if (currentPriority >= defaultPriority && priorities[curSelector][nextProp]['priority'] < currentPriority ) {
                priorities[curSelector][nextProp]['priority'] = currentPriority;
                priorities[curSelector][nextProp]['property'] = nextProp;
                priorities[curSelector][nextProp]['value'] = element.replace(propertyRegex, '$2');
            }

            currentPriority = defaultPriority;
        }

    }

    selectors.forEach(function(selector) {
        var obj = priorities[selector];
       for(var wholeProperty in obj){

          lines.push(selector + ` { ${obj[wholeProperty]['property']}: ${obj[wholeProperty]['value']}; }`);
       }
    });
        

    lines.sort();
    console.log(lines.join('\n'));

   function checkIfOverrides(regex, text) {
       return regex.test(text);
   }
}
