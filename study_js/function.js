//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is function.js file');


// Function <<<<<<프로그램을 구성하는 중요한 빌딩 블럭같다고 볼수 있다.
// - fundamental building block in the program
// - subprogram can be used multiple times <<<<<<여러번 재사용이 가능하다.
// - performs a task or calculates a value <<<<<<한가지의 task나 어떠한 값을 계산할때 쓰인다.

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing <<<<<<<하나의 함수는 한가지 일만 해야한다.변수의 이름은 명사로 지정했다.
// naming: doSomething, command, verb <<<<<<함수의 이름을 사용할때는 무언가를 동작할때 함수를 사용한다.
//동사의 의미로 지정해야 한다.
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS <<<<<<<function은 object에 일종이다.
console.log('------------------------파트1 부분 Function declaration');
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234); //숫자도 문자열로 출력이 되서 가능하다.

console.log('--------------------------파트2 부분 Parameters ');

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

console.log('--------------------------파트3 부분  Default parameters ');

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

console.log('--------------------------파트4 부분  Rest parameters ');

// 4. Rest parameters (added in ES6)
function printAll(...args) { //...이부분은 배열형태로 전달하게 된다.
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));//배열에서 다시 알아보자.
}
printAll('dream', 'coding', 'ellie');

console.log('--------------------------파트5 부분  Local scope ');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {      //어미요소
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        //자식요소 자식은 부모를 볼수있시지만 자식요소를 부모요소에서 확인할려고 하면 오류가 난다.
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
}
printMessage();

console.log('--------------------------파트6 부분   Return ');

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

console.log('--------------------------파트7 부분  Early return, early exit ');

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}
//7번까지는 function을 선언하는 걸 말해준다.

console.log('--------------------------파트8 부분  First-class function ');
//function은 다른 변수와 맞찬가지로 변수에 할당이 되고 function에 passed로 할당되고
// returned 값으로도 returned이 된다.

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

//함수를 선언함과 동시에 바로 print라는 변수에 할당하게 한다.
// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
    // anonymous function funchion에 아무 이름이 없을때 의미한다. 이름이 없어도 변수에 할당할수 있다.
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

console.log('--------------------------파트9 부분   Callback hell ');

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    //(정답, 정답이 맞을때 함수, 정답이 틀릴때 나오는 함수.) 전달해준다. 상황에 맞게 쓰는걸 Callback function이다.
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function  <<<이름없는 function
const printYes = function () {
    console.log('yes!');
};

// named function   <<<이름있는 function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
   // print(); 치수 계산이나 반복적인 평균값을 계산할때 쓴다.
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

console.log('--------------------------파트10 부분   Arrow function ');

// Arrow function  <<<함수를 간결하게 만들어줄때 사용한다.
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more  <<<블럭을 사용할때는 return을 표시해한다.
    return a * b;
};

console.log('--------------------------파트11 부분   IIFE ');

// IIFE: Immediately Invoked Function Expression  <<함수를 선언하게 되면 따로 함수를 선언해야한다.
//하지만 선언함과 동시에 바로 함수를 선언할려고 하면 함수에 괄호를 한번더 묶어준다. 뒤에도 ()한번더 한다.
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command');
    }
}
console.log(calculate('add', 2, 3));
