// 1. String concatenation (+ 기호를 가지고 문자열과 문자열을 만들어 새롭게 만들수 있다. 숫자와 숫자를 더해서 문자열이 될수도 있다.)
//( )
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder 나누고 나머지 값.
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; 카운터에 1을 더해서 다시 카운터에 값을 할당한다.
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; 기존에 3에 값을 postIncremnt에 할당하고 counter는 1을 더한다.
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
//마이너스 할때도 동일하게 된다.

// 4. Assignment operators 할당하는 operators를 표시한다.
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value  함수오는 애들을 뒤에 배치해라!
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value 및에3개가 다 true 생실까야 싲
console.log(`and: ${value1 && value2 && check()}`);

//and는 null체크할때도 많이 쓰인다.
//object가 null이면 false가 되기 때문에 뒤에가 실행이 안된다.
// 즉 nullableObject가 null이 아닐때만 이 Object에 something을 받아온다.
// often used to compress long if-statement
// nullableObject && nullableObject.something


function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not) 값을 만대로 바꾸어 준다. value1이 true니깐 false로 바꾸어 준다.
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 타입을 변경해서 검사하는것
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 타입을 신경써서 타입이 다르면 다른것이다!
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
//값을 할당하거나 간단히 출력할때 쓰는 것이 좋다.
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops  반족적으로 검사하는 방식
// while loop, while the condition is truthy, 조건문이 맞으면 이거 써도된다.
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first, 블럭을 먼저 실행하고싶으면
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)begin은 한번만 사용  console이 i보다 큰지 확인
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops i가 0일때 j이를 0-9까지 돌리고 i가 1일때 j를 9까지 돌리는 걸 말한다.
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break(loop를 완전히 끝내는것), continue(지금것만 스킵하도 다음으로 넘어가는것)
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
