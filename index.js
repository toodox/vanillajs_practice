//#2.0 Function
function sayHello(name /*argument*/, age) {
  console.log("Hello!", name, "your number is", age);
} //함수 선언

sayHello("junn", 15); //함수호출

//#2.1 More Function
function sayInfo(tomato, apple) {
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
    2번째줄을 보면 greetJunn 변수는 sayInfo 함수의 리턴값이 필요하므로
    14번째 줄 처럼 console.log 대신 return 을 표기해 주어야 함.
*/

const calculator = {
  plus: function (a, b) {
    return a + b; //구조체 안에 함수 넣기
  },
  sub: function (a, b) {
    return a - b;
  },
  mult: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  pow: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(5, 5);
const sub = calculator.sub(8, 3);
const mult = calculator.mult(4, 6);
const div = calculator.div(6, 3);
const pow = calculator.pow(8, 8);

console.log(
  `The result:\n plus = ${plus}\n sub = ${sub}\n mult = ${mult}\n div = ${div} \n pow = ${pow} \n`
);

//#2.2 JS DOM Functions
/*
    DOM : Document Object Model >> HTML 모든 요소를 객체(object로 바꿀 수 있음)
*/
const title = document.getElementById("title");
//HTML 아이디에서 추출해서 자바스크립트에 변수에 대입

console.log(title);

title.innerHTML = "Hi! From JS"; // title(=h1) 을 바꿈

//#2.3 Modifying the DOM with JS
//id title에서 모든 가능성 보여주기

title.style.color = "white"; // 폰트 색 변경
document.title = "Junn | Change title name by JS"; // 탭 이름 변경
console.dir(document); // 바꿀 수 있는 것들 목록을 보여줌

const subtitle = document.querySelector(".subtitle");
//HTML class에서 추출해서 자바스크립트 변수에 대입

subtitle.innerHTML = "Click me!!";
subtitle.style.color = "#05c46b"; //원래색(silver를 JS로 바꿔 놓음.)

//#2.4 Events and event handlers

/*
    function handleResize(event){
        console.log(event);
        //console.log("I have been resized");
    }
    window.addEventListener("click", handleResize); //handleResize() <이거 안됨
    ->창 사이즈 변경 하면 로그에 뜸
*/

function handleClickOne(event) {
  subtitle.style.color = "#ef5777"; //클릭 시 색상 변경
  console.log("you have been clicked subtitle"); //subtitle 누르면 콘솔창에 문구 생성
}
subtitle.addEventListener("click", handleClickOne);
//subtitle 대신 window라고 입력하고 실행시키면, 그냥 창 클릭만으로도 콘솔창에 알림이 뜸.

//2.5 if, else, and, or

if ("junn" === "joonn") {
  /* '=='와 '==='의 차이는 ===이 더 엄격하다는 것 (type 까지 신경 씀) */
  console.log("hi");
} else if ("10" === "10") {
  console.log("same!!");
} else {
  console.log("different");
}

//combine(피연산자)
//관계연산자는 &&(and), ||(or) 등이 있음
if (20 > 5 && "junn" === "junn") {
  //and 연산자 && 활용
  console.log("equal!");
} else {
  console.log("no!");
}

/*
    //prompt 활용 if-else 실습
    const age = prompt("How old are you?");
    if (age >= 18 && age <= 21) {
      console.log("you can drink but you should not");
    } else if (age > 21) {
      console.log("Go ahead!");
    } else {
      console.log("too young");
    }
*/

//#2.6 DOM - If else - Function practice One

const titleTwo = document.querySelector("#titleTwo");
// const 변수 생성하고 html문서 id를 따와서 대입함.

const BASE_COLOR = "rgb(183, 21, 64)";
/*
    대문자로 변수를 생성해서 css에 있는 기본 색상을 대입함.
*/
const OTHER_COLOR = "#273c75";
// flatuicolors.com << 여기서 css 색상 헥사코드 따올 수 있음

function handleClickTwo() {
  /*   console.log(titleTwo.style.color); //titleTwo 를 누르면 누르기 전 색상 rgb값 출력
  titleTwo.style.color = OTHER_COLOR; */

  const currentColor = titleTwo.style.color;
  if (currentColor === BASE_COLOR) {
    titleTwo.style.color = OTHER_COLOR;
  } else {
    titleTwo.style.color = BASE_COLOR;
  }
}

function initOne() {
  titleTwo.style.color = BASE_COLOR;
  titleTwo.addEventListener("click", handleClickTwo);
  //click 대신 mouseenter로 하면 마우스 갖다댈때마다 색깔이 바뀜.(hover랑 비슷)
  /*
    구글에 HTML JavaScript DOM event MDN 치면 이벤트들 검색 가능
  */
  //addEventListener 란 document 내의 특정 요소에 event를 등록할때 사용하는 것이다.
}

initOne(); //함수 실행.

//HTML JAvaScript DOM event MDN 구글링해서 나온거 실습
//인터넷 연결되어 있으면 online 문구 출력, 아니면 인터넷 키라고 알림.
function handleOffline() {
  if ("offline") {
    console.log("It's Online");
  } else {
    console.log("plz turn on wifi");
  }
}
window.addEventListener("offline", handleOffline);
//online > offline로 변경하면 인터넷 연결 안될 때 "lalalala" 콘솔창에 출력

handleOffline();

//#2.7 DOM - IF else = Function practice Two

const titleThree = document.querySelector("#titleThree");

const CLICKED_CLASS = "clicked";

/*
    function handleClickThree() {
      const currentClass = titleThree.className;
      if (currentClass !== CLICKED_CLASS) {
        titleThree.className = CLICKED_CLASS;
      } else {
        titleThree.className = "";
      }
    }
*/
/*
    처음에는 위 방식대로 했는데, html에 클래스를 지정하고, 브라우저에서 실행하면
    클릭 시에, 기존에 있던 클래스명이 사라지는 현상 발생. 따라서 아래 코드로 변경해서 실행한다.

*/
function handleClickThree() {
  const hasClass = titleThree.classList.contains(CLICKED_CLASS);
  // titleThree의 classList에서 CLICKED_CLASS가 포함되었는지 검색하고 변수 선언한 hasClass에 대입
  if (!hasClass) {
    // hasClass가 아니면 (classList에 CLICKED_CLASS가 없으면)
    titleThree.classList.add(CLICKED_CLASS); //CLICKED_CLASS 추가
  } else {
    //CLICKED_CLASS가 있다면
    titleThree.classList.remove(CLICKED_CLASS); //CLICKED_CLASS 제거
  }
  /*
  202줄~210줄 다 줄이면
  titleThree.classList.toggle(CLICKED_CLASS);
  이렇게 코딩 가능 (toggle)
  */
}

function initTwo() {
  titleThree.addEventListener("click", handleClickThree);
}

initTwo();
