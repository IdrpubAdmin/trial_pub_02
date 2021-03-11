'use strict';
//Promise란?
//약속이라는 단어로 자바스크립트에서 제공하는 비동기를 간편하게 처리할수 있도록 도와주는 오브젝트로 정해진 장시간에 기능을 수행을 하고나서 정상적으로 기능이 수행되면 성공에 메세지와 함께 처리된 결과값을 전달해주고 만약 기능을 수행하다 예상하지 못하는 문제가 발생하면 에러를 전달해 줍니다. 
//예를 들면 미리 수업을 등록해 놓고 나서 나중에 그 수업이 열리면 나중에 수업이 오픈했다고 메일로 전달이 오고 확인할수 있다.
//만약 수업 오픈날 가입했다면 바로 강의에 대한 메일이 온다.  이렇게 쉽게 예를 들수가 있다.

//코드를 보면서 어떻게 Promise를 활용해서 콜백함수를 대처하는 오브젝트로 비동기 코드를 깔끔하게 처리할수 있는지 보자.
// Promise is a JavaScript object for asynchronous operation.
// State(상태): pending(Promise가 만들어 져서 우리가 지정한 operation이 수행중일 때 ) -> fulfilled(operation을 성공적으로 끝내게 되면 나오고) or rejected(파일을 찾을수 없거나 네트워크에 문제가 생기면 나타난다)
// Producer(우리가 원하는 기능을 수행해서 해당 데이터를 만들어 내는것) vs Consumer(우리가 원하는 데이터를 소비하는것)

// 1. Producer 
// when new Promise is created, the executor runs automatically.
//우리가 원하는 기능을 비동기적으로 실행하는 Promise만들기
//Promise는 클래스로 활용된다. NEW라는 키워드를 활용해서 오브젝트 생성이 가능하다
//reject기능을 수행하다 문제가 생기면 호출하는 기능이다
//Promise를 만드는 숮ㄴ가 우리다 전달한 
const promise = new Promise((resolve, reject) => {
    //resolve:기능을 정상적으로 수행해서 마지막에 최종 전달하는 것 
    //reject: 기능을 수행하다 중간에 문제 생기면 호출하는 것 
    // promise 안에서는 좀더 큰 데이터를 돌려서 하는 일들을 한다. 왜냐하면 우리가 네트워크에서 데이터를 받아오거나 파일에서 무언가 큰 데이터를 읽는 과정은 시간이 걸리는데 그런것을 동기적으로 처리하게되면 우리가 파일을 읽고 네트워크에서 데이터를 받아오는 동안 그 다음라인에 코드가 실행되지않아 시간이 조금 걸리는 일들은 이것을 사용해서 비동기적으로 사용하는게 좋다.
    // doing some heavy work (network, read files)
  console.log('doing something...');
    //만약 네트워크 요청을 사용자가 요구할때만 쓰는거면 즉 사용자가 버튼을 눌렀을때 네트워크를 요구하는거면 사용자가 요구하지도 않았는데 불필요한 네트워크가 작용할수도 있는데 이때 Promise안에 그 안에 전달한 executeor callback(객체안의 함수method)바로 실행되기 때문에 이점을 유의해야한다.
    
//우리가 원하는 콜백함수를 2초정도 있다가 진행되게 만든다.
    
  setTimeout(() => {
  resolve('ellie');   //성공적으로 네트워크에서 받아 오는 것.
    // reject(new Error('no network')); //문제가 생겼을때 사용하는 것.
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //  값이 정상적으로 잘 수행이 된다면 값을 받아와서 우리가 원하는 기능을 수행하는 콜백함수를 전달해 주면 됩니다. 
//value 값은  promise가 잘 수행이 되서 마지막으로 resolve 콜백함수에서 전달된 이 앨리라는 값을 전달해준다.
//만약 우리가 네트워크를 하다가 무언가에 실패를 했을때  reject를 사용한다면 보통은 에러라는 오브젝트로 값을 전달한다.
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });  //성공하거나 실패하거나 상관없이 무조건 마지막에 호출되는 콜백함수이다.

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
//then은 값을 바로 전달할수도 있고 Promise를 전달해줘도 된다. (유의할것!)
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()//
//.then(hen => getEgg(hen))
//.then(egg => cook(egg))
//.then(meal => console.log(meal));
  .then(getEgg)
  .catch(error => {
    return 'BB'
})
  .then(cook)
  .then(console.log)
  .catch(console.log);
  
