    //#2.0 Function

    function sayHello(name /*argument*/, age) {
        console.log("Hello!", name, "\nyour number is", age);
    } //함수 선언

    sayHello("junn", 15); //함수호출

    //#2.1 More Function

    function sayInfo(tomato, apple){
       /* console.log(`Hello ${tomato} you are ${apple} years old.`); */
       return `Hello ${tomato} you are ${apple} years old`;
    }

    const greetJunn = sayInfo("Junn", 23);
    console.log(greetJunn);
    
    const calculator = {
       plus: function(a, b){
           return a+b;
       },

       minus: function(a, b){
           return a-b;
       },
       
       mult: function(a, b){
           return a*b;
       },

       div: function(a, b){
           return a/b;
       },

       pow: function(a, b){
           return a**b;
       }
    }

    
    const plus = calculator.plus(5, 5);
    const minus = calculator.minus(8, 3);
    const mult = calculator.mult(4, 6);
    const div = calculator.div(6, 3);
    const pow = calculator.pow(8, 8);

    console.log(` plus = ${plus} \n minus = ${minus} \n mult = ${mult} \n div = ${div} \n pow = ${pow} \n `);

