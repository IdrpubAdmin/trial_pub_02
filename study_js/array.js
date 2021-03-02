//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

console.log('this is array.js file');


 console.log('----------------------파트1 부분 배열Array Declaration');
// Array🎉
//1.배열을 선언할수 있는 방법은 new를 앞에 써주면 된다.
//2.대괄호를 적어서 배열선언하는 방법도 있다.
//배열을 공부할때는 배열이 인덱스를 기준으로 데이터가 저장되기 때문에 인덱스를 활용해서 어떻게 데이터를 검색, 삽입, 삭제, 정확히 알아야 한다.
// 1. Declaration 
const arr1 = new Array();
const arr2 = [1, 2];


 console.log('----------------------파트2 부분 배열Index position');
//인덱스를 통해서 어떻게 배열에 접근하는지 알아보자.

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
//사과를 출력하려면 배열에서 대괄호를 이용해서 데이터를 접근할수 있다.
//오브젝트에서 "key"(name,age..등)를 활용해서 했던거랑 동일하다.
//오브젝트처럼 배열은 숫자 인덱스를 전달하게 되면 그 인덱스에 해당하는 value(가치)값을 가져온다. 
console.log(fruits[0]);  //배열처음 찾을때 
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);  //배열마지막을 찾을때
//console.clear(); //<<<<<<이렇게 해주면 이전에 있는 log는 다 지워진다!.

console.log('----------------------파트3 부분 배열 Looping over an array');
//배열 안에 있는 데이터를 돌면서 출력하는것을 해보자.

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);  
}

//i가 0부터 시작해서 여기서 0번은 사과 처음부터를 말한다.그 다음 i++ 는 1이 증가한다고 볼수 있다. 1은 fruits의length가 2니깐 2보다 작으니깐 다시 1 그 1은 바나나고 거기서 또 1이 증가되니깐 2지만 2보다 작지 않아 거기서 정지된다. 

// b. for of 

//ler에 fruit이라는 변수에 fruits이라는 과일안에 데이터를 한번씩 순차적으로 할당하면서 블럭을 실행한다.
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach

//fruits에 있는 forEach라는 API를 이용해서 출력을 할수 있다.
//forEach는 바로 callback함수를 받아온다. 
//forEach 어떤걸 수행하는 함수인데 정해진 액션을 각각 array안에 element에 수행하는 함수이다. 그 말은 array안에 배열안에 들어있는 element 값마다 전달한 callback함수를 수행한다. 
//첫번째는 callback함수를 전달하는 value값이 전달되고 그 값이 들어있는 index도 들어오고 전체적인 배열도 전달을 받을수 있다. 
fruits.forEach((fruit) => console.log(fruit));
//fruits.forEach(function(fruit,index,array){
//    console.log('he')
//})

console.log('----------------------파트4 부분 배열 LAddtion, deletion, copy');
//배열에 어떻게 데이터를 넣고 빼고 복사할수 있는지 알아보자.

// 4. Addtion, deletion, copy
// push: add an item to the end
//과일을 더할때 puch를 사용한다.
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end 
//과일을 뺄떄. pop을 사용한다.
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
//앞에서부터 데이터를 넣을수 있다.
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
//앞에서부터 데이터가 빠진다.
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
//shift, unshift는 정말 느리다 pop, push보다 느리다.
//왜냐면 뒤에서 부터 지우거나 넣는건 상대적으로 데이터를 빨리 적용할수 있는데 앞에서부터 데이터를 넣고 빼고 하면 그전에 앞에 있던 데이터를 하나씩 뒤로 밀고 넣고 해야되서 시간이 오래걸린다. 그래서 가능하면 shift, unshift보다는 pop, push를 사용하는걸 권장한다. 
// splice: remove an item by index position
//아이템을 지정된 포지션에서 지우는것도 가능하다.splice를 이용하면 된다. 
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);  //splice는 원하는 인덱스만 지정하고 몇개를 지정안하면 지정된 인텍스부터 다 삭제를 한다.
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.log('----------------------파트5 부분 배열 Searching');
//검색할수 있는 API를 알려준다.
//우리가 배열안에 어떤값이 어디에 있는지 알고싶을때 유용하다.

// 5. Searching
// indexOf: find the index
console.clear();  //<<<<이전에 log를 지울때 사용한다.
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

// includes
//배열에 수박이 있는지 없는지 확인할수 있는 방법이다.
console.log(fruits.includes('🍉')); 
console.log(fruits.includes('🥥'));

// lastIndexOf 
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));//제일 처음 값을 만나면 그 값이 들어있는 index를 리턴하게 된다.
console.log(fruits.lastIndexOf('🥥'));//제일 마지막 값을 만나면 그 값이 들어있는 index를 리턴하게 된다.

