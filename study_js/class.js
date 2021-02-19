'use strict';

//class랑 object가 없다면 우리가 정의한 변수들이 여기저기 떠다녀서 규모있는 프로젝트를 할수가 없을것이다. 
//class는 조금더 연관있는 것들끼리 묶어두는 컨테이너 같은 역활을 하는 것이다.
//class는 object를 만들수 있는 틀(template)을 말한다. 자체에는 데이터가 들어있지않고 틀만 정의해 놓는 한번만 선언하는 것이다. 
//class를 이용해 실제로 데이터를 넣는 것이 object이다.
//class를 이용해서 새로운 instance를 생성하는 것이 object이다.
 

// Object-oriendted programming
// class: template  <<<<<<<<<<<class는 template에 속한다.
// object: instance of a<<<<<< class tempate을 이용해서 실제로 만드는것이 object이다.
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance
console.log('------------------------파트1 부분 Class declarations');
// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields속성
    this.name = name;
    this.age = age;
  }

  // methods 행동
  speak() {
    console.log(`${this.name}: hello!`); 
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();
//this라는건 생성된 object (. name)라고 할수 있다. 

console.log('------------------------파트2 부분 Getter and setters');
//c언어가 함수를 불러서 함수를 호출해서 실행하는 프로그램이라면 
//자바는 object가 서로 interaction(상호작용)하면서 돌아가는 프로그램이다.
 

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
//get이라는 값을 return한다.
  get age() {
    return this._age;
  }
//set 를 이용해서 값을 설정한다.그래서 value를 받아와야 한다. 
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


console.log('------------------------파트3 부분 Fields (public, private)');
// 3. Fields (public, private)  최근에 추가되어진것이라 많은 개발자가 사용하지 않는다.
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}
//experiment 생산자를 쓰지않고 필드를 정의할수 있다. 
//publicField = 2; 그냥 정의하게되면 외부에서 접근이 가능하고 
//#privateField = 0; #이걸 쓰면 클래스 내부에서만 변경이 가능하다. 외부에선 읽을수도 값을 변결할수도 없다.

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

console.log('------------------------파트4 부분  Static');
// 4. Static properties and methods 
// 클래스 안에 있는 필드와 메소드들은 새로운 오브젝트를 만들때마다 그대로 복사가되서 값만 변경해주면 되었는데 간혹 이런 오브젝트에 상관없이 데이터에 상관없이 클래스가 가지고 있는 고유한 값과 이런 데이터와 상관없이 동일하게 반복적으로 사용되어지는 메소드가 있을수가 있다 그런 것들은 static 라는 키워드를 이용해서 붙히면 오브젝트와 상관없이 클래스 자체에 연결되어 있는다.

class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
//오브젝트와 상관없이 들어오는 데어터와 상관없이 공통적으로 클래스에서 사용할수 있는 거라면
//static과 static method을 이용해서 작성하는 것이 메모리에 사용을 조금더 줄여줄수 있다.

console.log('------------------------파트5 부분  Inheritance 상속과 다양성');

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}
//extends:연장하다.
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
      //super는 부모의 draw를 말한다. 
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;  //삼각형은 가로세로곱하기 나누기2를 한다.
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

console.log('------------------------파트6 부분 Class checking: instanceOf');
//이 오브젝트는 클래스를 이용해서 만들어진 새로운 instance(경우,사례)이다.
//이 instanceOf 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 instanceOf인지 아닌지,
//즉 이 오브젝트가 이 클래스로 만들어진건지 아닌지 확인하는 것이다. 
//그래서 true와 false를 return 사용한다. 

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
 
let obj = { value: 5 }; 
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);
