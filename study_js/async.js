// async & await

//----------기본 문법-------------
//async function 함수명() {
//  await 비동기_처리_메서드_명();}


// clear style of using promise :) 깔끔하게 사용할수 있는 방법!

//async & await은 저번에 살펴봤던 promise을 좀더 간결하고 간편하게 동기적으로 실행되는 것처럼 만들어주는 것이다.
//지난번에 promise을 여러번에 체이링을 할수 있다고 알려주었다.계속 체이닝을 하면 코드가 복잡해 보일수 있는데 
//이때 async & await 사용하면 그냥 동기식으로 코드를 순서대로 작성하는것처럼 도와준다.
//async & await은 새로운것이 추가되는것이 아니라 기존에 존재하는 promise 위에 조금더 간편한 API를 재공한다. 
//이렇게 기존에 존재하는 것 위에 또는 기존에 존재하는것을 포함해서 우리가 조금더 간편하게 쓸쑤 있는것을 syntactic sugar라고 한다. 

console.log('---------------------------------파트1부분 유용한 Promise의 async');
// 1. async    
async function fetchUser() {
  // do network reqeust in 10 secs....   
  //사용자에 데이터를 백엔드에서 받아로는 함수 fetchUser 네트워크 통신을 해서 백엔드에서 데이터를 받아오는데 10초정도 걸린다는 가정한 코드이다.
  return 'ellie';  
  //10초가 지나면 우리가 받아온 사용자의 이름을 이렇게 리턴하는 함수를 만들어본다. 그다음 바로 호출을 하고 console.log에 출력을 하면 이렇게 무언가 오래걸리는 코드를 비동기적인 코드를 전혀 하지않으면 자바스크립트 엔진은 동기적으로 코드를 수행하기 때문에 즉 한줄 한줄씩 한줄이 끝나야 그다음줄로 넘어가는 동기적인 처리를 하기 때문에 fetchUser 호출되면 함수가 선언된 곳으로 가서 이 함수에 코드블럭을 실행한다. 그러면 10초동안 머물고 10초가 지나서 성공적으로 네트워크 데이터를 받아오면 그럼 다음줄로 넘어가며 ellie가 return되고 그 return된 ellie가 user에 할당되고 다름 라인으로 넘어가서 ellie가 출력이 된다. 우리가 여기서 비동기적인 처리를 하지않으면 사용자의 데이터를 받아오는데 10초가 걸려서 만약 뒤에서 웹페이지의 URL을 받아오는 코드들이 있다면, 이것이 끝나는동안 데이터가 웹페이지에 표시안되서 사용자는 10초 정도 텅 비어있는 웹페이를 보게된다. 이렇게 오래걸리는 일들은 비동기적으로 처리 할수 있게 해줘야 한다. 
  
  //지난 시간에는 이것을 promise로 받아왔다.  
  //return 'ellie'; 이것을  return new Promise로 받아왔다 이 Promise란 오브젝트를 가지고 있으면  return new Promise()<<저 괄호안에 then이란 콜백함수만 가지고 있으면 user에 데이터가 준비되는 되로 니가 등록한 콜백함수를 불러주는 형식이였다.
  //return new Promise((resolve,reject) =>{ })각각 콜백함수를 받는 함수를 만들수 있다. 그래서 코드블럭 안에 있는 것들이 비동기적으로 수행할수 있게 했다. 
  //만약 resolve,reject를 호출하지 않고 그냥 return을 하면 console창에 바로 Promise가 "pending"표시가 된다.
  //Promise에는 상태가 "pendind", 성공하거나 실패하거나 나오는데 지금은 둘다 호출을 안해서 계속 pending 으로 남아서 결과값도 아무것도 없는게 확인된다. 
  //그래서 Promise값은 꼭 resolve,reject 사용해서 결과 값을 줘야 한다. 그래서 return new Promise((resolve,reject) => {resolve('ellie');}); 해주면 결과값이 fulfulled가 나온다. 그런데 async를 함수 앞에 적어두면 Promise을 사용하지 않고 간편하게 작성 할수 있다.
 
}
const user = fetchUser();
user.then(console.log);
console.log(user);

console.log('---------------------------------파트2부분 유용한 Promise의 await');
//await은 async가 있는 함수안에서만 사용 할수 있다.
//지금 여기 delay란 함수는 Promise를 reurn하는데 정해진 시간이 지나면 resolve를 호출하는  Promise를 reurn 하는 것이다. 
// 2. await ✨
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}
//밑에보다 위에처럼 동기적인 코드를 쓰는 것 처럼 만들게 되면 딜레이가 끝날때까지 기다렸다 바나나를 return한다고 더 쉽게 이해할수 있다. 

//async function getBanana(){
//    return delay(3000);
//.then(() => return '🍌');}

//function pinkFruits(){
//    return getApple().then(apple =>{
//        return getBanana().then(banana => '${apple} + $(banana)')
//    });
//}   <<<<<<<<<<<<<이렇게 하면 저번주에 봤던 콜백지옥이 되는데 이것을 수정하면.

async function pickFruits() {
  const apple = await getApple(); //1초소요
  const banana = await getBanana();//1초소요  이렇게 순차적으로 하면 비효율적이다.
//서로 연관이 없어서 기다릴 필요가 없으니 개선할수 있다. 
  return `$(apple) + $(banana)`;
//  return `${apple} + ${banana}`;
}

//async function pickFruits() {
//    try{                               //erre 처리 방법
//        const apple = await getApple(); //1초 소요
//        const banana = await getBanana(); //1초 소요
//    } catch(){
//        
//    }
//
//  return `$(apple) + $(banana)`;
//}

async function pickFruits() {
  const applePromise = getApple();  
  const bananaPromise = getBanana();
//Promise를 만드는순간 Promise안에 들어있는 코드블럭이 실행이 된다. 
  const apple = await applePromise;
  const banana = await bananaPromise;
//여기서 await를 사용해서 동기화를 시켜준다.
//각각에 Promise를 만들었기 때문에 이 안에 코드가 병렬적으로 각각 동시에 한번에 기다렸다 출력하게 된다. 이렇게 동시 다발적으로 수행이 가능한 경우에는 즉 banana와 apple을 각각 병렬적으로 하면 되니 좀더 쉽게 만들수 있다.
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


console.log('---------------------------------파트3부분 유용한 Promise의 All, race');
// 3. useful APIs ✨
//Promise에 있는 All이라는 APl를 쓰면 된다. 
//이것은 Promise배열을 전달하게 되면 모든 Promise들이 병렬적으로 다 받을때까지 모아주는 일을 한다. 
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')  //과일에 배열이 전달받는데 배열을 string(문자의 나열 생산자)으로 묶는건 join으로 할수 있다.
  );
}
pickAllFruits().then(console.log);


//어떤것이든 상관없고 먼저 따지는 첫번째 과일만 받아오고 싶으면 Promise에 race를 사용해서 사용할수 있다.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
