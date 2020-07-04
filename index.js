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
    /*
        원래는 console.log("hello" + tomato + "is" + apple + "old");
        이렇게 했는데, 백틱을 사용해서 +기호와 띄어쓰기 신경 쓸 필요 없이
        작성할 수 있게 됨.
    */  

    const greetJunn = sayInfo("Junn", 23);
    console.log(greetJunn);
    /*
        23번째줄을 보면 greetJunn 변수는 sayInfo 함수의 리턴값이 필요하므로
        14번째 줄 처럼 console.log 대신 return 을 표기해 주어야 함.
    */

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

    console.log(`The result:\n plus = ${plus}\n minus = ${minus}\n mult = ${mult}\n div = ${div} \n pow = ${pow} \n`);

//#2.2 JS DOM Functions
    const title = document.getElementById("title");

    console.log(title);

    title.innerHTML = "Hi! From JS"; // title(=h1) 을 바꿈
