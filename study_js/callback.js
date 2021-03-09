//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is callback.js file');

// JavaScript is synchronous.
// Execute the code block by orger after hoisting. 
//hoisting이 된 이후부터 코드가 작성한 순서에 맞쳐서 하나하나씩 동기적으로 실행된다는 말이다. 
// hoisting이란: var, function declaration 이런 함수 선언이 자동적으로 제일 위로 올라가는것이다.
console.log('---------------------------------파트1 부분 동기와 비동기');
//Synchronous는 정해진 순서에 맞게 코드가 실행되는것이다.
//Asynchronous는 비동기적으로 언제 코드가 실행될지 예측할수 없는 것을 말한다.
console.log('1');
//console.log('2');
setTimeout(() => console.log('2'), 1000);
//setTimeout(function(){console.log('2');}, 1000);  
//setTimeout 이라는 웹 API가 있는데 이것은 브라우져에서 제공되는 것으로 우리가 지정한 시간이 지나면 우리가 전달한 callback함수를 호출하는 것이다.
//callback함수는 우리가 전달한 함수를 나중에 불러달라는 개념이였다.
console.log('3');
//자바스크립트 엔진은 코드를 제일 위에서부터 밑으로 실행을 하게된다. 콘솔로그를 만나서 1출력 그 다음 엔 setTimeout는 브라우저 API이니깐 브라우저에 1초뒤에 이 콜백을 실행을 요청하고 그 바로 밑에 콘솔 로고3이 있으니 바로 실행되고 그 다음 1초 뒤에 브라우저에 콘솔 로고2가 출력되는거다. (시간 지연 API)

//콜백은 항상 비동기 일때만 쓰일까요? 그렇지 않다!
//콜백도 두가지로 나눠진다. 
// Synchronous callback 바로 실행되는것
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback 예측할수 없는것
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

console.log('---------------------------------파트2 부분 콜백예시');
// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });   //role:역할
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}
               
//prompt:질의응답 창을 나타낼 때 사용합니다. 아래 사용방법을 살펴보겠습니다.

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
