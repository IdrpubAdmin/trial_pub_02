//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';

//2.variable, rw(read/write) 메모리에 값을 읽고 쓰는게 가능하다. ex)ellie라고 쓰고 hello라고 변경이 가능하다.
//let(added in ES6) 전세계 언어거 지금 ES6이다.
//자바스크립트에서 변수룰 정의하는건 딱 하나 let이다! ES6추가된것
// 그전에는 var를 쓴다! (단점)
//var는 선원하기전에 값을 줘도 에러가 안나가고 값을 안준걸로 나온다
// var hoistion은 어디에 선원했는지 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말한다.
//var는 블럭 스컵이 없다 블럭을 무시하는 아이다. 블럭을 해도 다 볼수 있다.

//constants 가리키고 있는 포인터가 잠겨있다 그래서 값을 선언하면 절대 다시는 값을 변경할수 없다.
// ,r(read only) constants는 읽기만 가능하다. 단수로 constant로 적자.
//let 처럼 값을 계속 변경할수 있는 것은 Mutable데이터 타입라고 한다. 데이터 타입도 계속 변경될수 있다.
//constants는 변경이 불가하기 때문에 Immutable 타입이라고 한다.

//(장점)
//보안상에 이유로 이걸쓰면 보안을 지킬수 있다.

//어플리케이션이 실행되면 한가지에 프로센서가 할당되고 그 프로센서 안에서는 다양한 것이 동시에 돌아가면서
// 어플리케이션을 효과적으로 이용하는데 이 다양한 것들이 동시에 프로센서에서 변경을 할수 있는데
// 이건 위험한거라 이걸 방지할수 있다. 그러무로 값이 변경되지 않는것은 const로 이용해서 하는것이 좋다.
// 나중에 다른 개발자가 수정하더라도 혹시나 오류가 날수 있는 부분을 방지하기 위해서 좋은부분이다.

//variable types
//primitive,(더이상 나워질수 없는 한가지의 타입을 말한다.) single item: number, string, boolean, null, undefiedn, symbol
//object(이 오브젝트는 한가지의 타입들이 여러개 묶어서 한 단위 박스로 나타내는것), box container
//function(자바스크립트 안에서는 이것도 하나의 데이터 타입이다.),
// first-class function(함수의 인자로도 전달이 되고,함수에서도 리턴 타임으로도 지원이 가능하다. 이것을 이렇게 말한다.)

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
//Immutable data types:데이터 자체를 절대변경할수 없는 것을 의미.
//premitive types: 우리가 한번 정의한 내용을 통채로 메모리에 올렸다 다른 내용으로 변경이 가능하지
//데이터 자체를 변경하는건 불가능하다.
//frozen objects: 역시 꽁꽁 얼어있는 오브젝트도 변경이 불가능 하다.


// Mutable data types: all objects by default are mutable in JS
//objects: 우리가 엘리라는 데이터를 선언하고 나서 엘리 안에 있는 나이랑 이름을 변경했는데 objects는 스스로 변경가능
//그래서 스스로 변경이 가능하고 자바스크립에서는 기본적으로 모든 objects변경이 가능하다.
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes


//c언어
//상급 레벨이라고 하는 c언어는 개발자들이 프로그램을 짜면서 상세한 단위로 나워서 할수 있는 부분이라 그렇다.
//short , int, long은 정수를 할때 float, double, return은 소주점을 할때 쓴다.  (데이터의 크기에 따라 쓰는 것이 다르다.)

//java에서는 그냥 number 이라고 할당하면 된다. 심지어 number를 적지 않아도 된다. 그런데 자바스크립에서는 적어줘야 한다.




let globalName = 'global name'; //블럭을 쓰지않고 파일 안에서 바로 정의해서 쓰는것을 글로벌 scope(스컵) 이라고 한다.
//Black scope :괄호(블럭) 안에서 내용이 더이상 밖에서는 더 이상 괄호안에 있는 건 볼수 없다는 의미한다.
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
    console.log(name);
    console.log(globalName);

    const count = 17; //integer
    const size = 17.1; //decimal number

console.log('value: $(count), type: $(typeof count)');
console.log('value: $(size), type: $(typeof size)');


//number-speicla numeric values: infinity, -infinity, NaN

     const  infinity =-1 / 0;
     const  negativeInfinity =-1 / 0;
     const  nAn = 'not a number' / 2;
     console.log(infinity);
     console.log(negativeInfinity);
     console.log(nAn)


//bigInt (fairly new, don't use it yet) 자바스크립드 숫자 한계 최근에 추가되서 크롬과 사파리에서만 가능.
        const bigInt = 12345678901234567890123456789012345678901234567890n; // over (-2**53) ~2*53)
        console.log('value: ${bigInt}, type: ${typeof bigInt}');
        Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects 고유한 식별자로 쓸대 사용.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure (우리가 일상생활에서 보는 물권과 물체의 박스형태를 말한다.)
const ellie = { name: 'ellie', age: 20 };
//const로 되어 있어서 다른 오브젝트로 할당이 안돠지만 그 안에 포인트는 다른값으로 할당이 가능하다.
ellie.age = 21; // 포인트 데이터를 변결가능하다.

// 5. Dynamic typing: dynamically typed language
// (c언어나 자바는 변수를 선언할때 어떤 타입인지결정해서 같이 타입을 선언하는데
// 자바스크립트는 선언할때 어떤 타입인지 선언하지않고 프로그램이 동작할때 할당된 값에 따라 타입이 변경될수 있다.)
let text = 'hello';
// console.log(text.charAt(0)); //h  숫자는 0부터 인식한다.
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));
