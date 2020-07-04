    //#2.0 Function
    function sayHello(name /*argument*/, age) {
        console.log("Hello!", name, "your number is", age);
    } //함수 선언

    sayHello("junn", 15); //함수호출




    //#2.1 More Function
    function sayInfo(tomato, apple){
       //console.log(`Hello ${tomato} you are ${apple} years old.`); 
       return `Hello ${tomato} you are ${apple} years old`;
       //sayHello 함수는 어떤 값을 반환하지만, console.log로 찍어주지 않음.
       //따라서 나중에 console.log를 찍어줘야 확인 가능
    }
    /*
        원래는 console.log("hello" + tomato + "is" + apple + "old");
        이렇게 했는데, 백틱을 사용해서 +기호와 띄어쓰기 신경 쓸 필요 없이
        작성할 수 있게 됨.
    */  

    const greetJunn = sayInfo("Junn", 23); //greetJunn은 sayInfo 함수의 리턴값
    console.log(greetJunn);
    /*
        23번째줄을 보면 greetJunn 변수는 sayInfo 함수의 리턴값이 필요하므로
        14번째 줄 처럼 console.log 대신 return 을 표기해 주어야 함.
    */

    const calculator = {
       plus: function(a, b){
           return a+b; //구조체 안에 함수 넣기
       },
       sub: function(a, b){
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
    const sub = calculator.sub(8, 3);
    const mult = calculator.mult(4, 6);
    const div = calculator.div(6, 3);
    const pow = calculator.pow(8, 8);

    console.log(`The result:\n plus = ${plus}\n sub = ${sub}\n mult = ${mult}\n div = ${div} \n pow = ${pow} \n`);




    //#2.2 JS DOM Functions
    /*
        DOM : Document Object Model >> HTML 모든 요소를 객체(object로 바꿀 수 있음)
    */
    const title = document.getElementById("title");

    console.log(title);

    title.innerHTML = "Hi! From JS"; // title(=h1) 을 바꿈


    //#2.3 Modifying the DOM with JS
    //id title에서 모든 가능성 보여주기

    title.style.color = "green"; // 폰트 색 변경
    document.title = "I own you now"; // 탭 이름 변경
    console.dir(document); // 바꿀 수 있는 것들 목록을 보여줌

