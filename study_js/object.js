//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; 
//오브젝트는 key와 value의 집합체다. 오브젝트는 key에 우리가 접근할수 있는 변수 property와 그 property가 가지고 있는 값 이렇게 두가지로 나눠진다. 
//변수 하나당 값을 하나만 담을수 있다!
console.log('--------------------------파트1 부분  Literals and properties');
const name="ellie";
const age="4";
print(name,age);
function print(name,age){
    console.log(name);
    console.log(age);
}
//이렇게 하게되면 문제가 만약에 각 객체에 내용을 수정하거나 삭제하는거면 추가해야하는 부분들이 많아져서 힘들어서
//이것을 개선하고자 object를 쓴다. 

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

//ellie라는 사람(person)의 이름 과 나이는 4 라고 명칭해준다.
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 }; 
print(ellie);
//괄호를 이용해서 바로 오브젝트를 생성할수 있다. key는 name value는 4이렇게 할수 있다.


//이름과 나이를 담을수 있는 이 오브젝트를 만들었는데 
//자바스크립트는 dynamically typed language 동적으로 타입이 Runtime때 결정되는 언어이다.

// with JavaScript magic (dynamically typed language)
// can add properties later
 
ellie.hasJob = true; //추가기능 으로 가능하다.
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

console.log('--------------------------파트2 부분  Computed properties');

// 2. Computed properties  계산된 properties(속성)라고 하는것.
// 오브젝트 안에 우리가 접근할때는 
// key should be always string(문자열) <<<
console.log(ellie.name);  //>>>>.<<<<이렇게 점을 이용해서 접근했습니다. 이것을 쓸때는 코딩하는 순간 그 키에 해당하는 값을 받아오고 싶을 때 사용한다.
console.log(ellie['name']);  //대괄호를 사용해서 배열방식으로 접근이 가능하다. 우리가 정확하게 어떤키가 필요한지 모를때 즉 Runtime에서 결정될때 이것을 사용한다. 
//그래서 코딩할때는 그냥 .을 쓴다. 우리가 실시간으로 원하는 키를 받고싶을때 []를 사용하면 된다.
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);  //동적으로 key에 값을 사용할 때는 []를 활용하면 좋다.
}
printValue(ellie, 'name');
printValue(ellie, 'age');

console.log('--------------------------파트3 부분  Property value shorthand');
// 3. Property value shorthand
//추가하는 이름과 값을 받아서 함수 안에서 오브젝트를 만들어서 이용하면 편리하다.
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

console.log('--------------------------파트4 부분   Constructor Function');
// 4. Constructor Function
//오브젝트를 필요할때 일일이 만들게 되면 이렇게 불가피하게 동일한 key와 value를 반복해서 작성해야 하는 문제점이 있었습니다.
//그래서 함수를 이용해서 값ㅁ나 전달해 주면 오브젝트를 전달하는 함수를 만들어서 사용할수 있다.
//이전에 자바스크립트에 클래스가 없을때 이것을 많이 사용했다.
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
console.log('--------------------------파트5 부분  in operator');
// 5. in operator: property existence check (key in obj) 
//해당하는 오브젝트 안에 key가 있는지 없는지 확인하는것이다.
console.log('name' in ellie);  //name라는 key가 엘리 오브젝트에 있는지 없는지를 확인하는 방법이다.
console.log('age' in ellie);   
console.log('random' in ellie);
console.log(ellie.random);

console.log('--------------------------파트6 부분  for..in vs for..of');
// 6. for..in vs for..of
// for (key in obj){} <<<<오브젝트가  {}블럭을 돌때마다 key들이 지역변수에 할당이 주어진다.
console.clear(); //이전에 했던 console 값을 캔슬 하는 것을 말한다.
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable) <<<오브젝트를 쓰는 것이 아니라 배열과 같은 배열 리스크 순차적으로 값을 할당한다.
//array 안에 값들이 value에 할당되면서 블럭안에서 순차적으로 출력하거나 값을 게산한다.
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

//const array = [1,2,3,4,5];
//for(let i = 0; i<array.length; i++) {
//    console log(array[i]);
//}

console.log('--------------------------파트7 부분  Fun cloning');
// 7. Fun cloning (복제)
 
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

//.assign :복사하고자 하는 타겟과 복사를 할려는 소스를 같이 전달하는 줘야한다. 
//리턴같은 타겟과 복사하고자 한은 것을 동합된  것을 의미한다. 


// old way
const user3 = {};
for (let key in user) {
user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); //앞에 돌일한 뒤에 property 가 온다면 뒤에 값이 덮어준다.
console.log(mixed.color);
console.log(mixed.size);

