'use strict';

function outerFunction() {
    var variable = 'text';
    
    function innerFunction() {
        
        console.log(variable);
        
        var variable = 1;
        
        console.log(variable);

    }
    
    console.log(variable);
    
    return innerFunction();

}

outerFunction();

/*undefined spowodowane brakiem dostepu innerFunckcji do variable = text*/




