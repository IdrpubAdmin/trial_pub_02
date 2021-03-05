'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj) 
//json 안에는 parse, stringify 총 두가지 API가 있다.
//전달되는 매게 변수가 차이가 있다 이걸 오버로딩이라고 한다 함수 이름은 동일하지만 어떤 param를 전달하냐 몇개를 전달하냐에 따라 각각 호출 방식이 다르다. 
//parse은 json에 string데이터를 넣으면 어떤 타입의 오브젝트로 변형이되고 그리고 이렇게 전달해도 되고 안해도 되는 오션식 콜백함수 reviver 함수가 있다. 이것은 콜백함수 인데 결과값을 뭔가 변형한다는 느낌이다. 그래서 string을 오브젝트로 변환할때 이 오브젝트가 만들어지는 과정을 조금더 세밀하게 조절하고 싶다면 reviver을 사용한다. 

let json = JSON.stringify(true);  //obj를 JSON으로 변환할수 있다.
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
    //jump라는 함수는 이곳에 포함이 안되는 함수이다. 
    // 이 함수는 오브젝트에 있는 데이터가 아니기 때문에 제외되고 자바스크립트에서 에서 자체로 들어있는 심볼같은 것도 포함되지 않는다.
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit,);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key ==='name' ? 'ellie' : value;
});
console.log(json);

console.log('---------------------------------파트2 부분 JSON to Object');

// 2. JSON to Object
// parse(json)
//console.clear();
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
    console.log('key:${key}, value: ${value}');
    return key ==='birthDate' ? new Date(value) : value
});
console.log(obj);
rabbit.jump();
//obj.jump();
//rabbit.birthDate.getDate()  데이터안에 존재하는 데이터
//getDate() 메서드는 주어진 날짜의 현지 시간 기준 일을 반환합니다.
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

//앞에 HTTP,AJAX,XHR 대략적 설명 내용입니다. 
//HTTP
//Hypertext Transfer Protocal
//브라우저 위에서 동작하고 있는 웹사이트 웹어플같은 고객이  어떻게 서버와 통신하는 방법.
//고객이 서버에게 요청할수가 서버는 고객이 서버에 요청한 것을 응답하는 의미한다.
//
//Hypertext는 사이트에서 이용되고 있는 링크만 말하는것이 아니라 전반적인 문서나 이미지를 다 포함해서
//말한다. 
//
//AJAX는 자바 소개영상때 말했지만 바로 Asynchronous JavaScript And XML약자이다 
//웹 페이지에서 동적으로 서버에게 데이터를 주고 받을수 있는 기술을 의미한다.
//
//XHR는 XMLHttpRequest라는 오브젝트가 있다. 
//이 오브젝트는 브라우저 APR제공하는 오브젝트 중에 하나로 이 오브젝트를 이용하면 
//간단하게 서버에게 요청하고 받아올수가 있다 최근에 추가된 fetch()API 간편하게 데이터를 주고 받을수 있다.
//하지만 이것은 인터넷 익스플로러에서 지원하지 않는다. 이점을 유의해야한다.
// 
//AJAX, XHR에서 계속 반복해서 XML이 등장하는데 
//이것은 바로 HTMl과 같은 마크업 언어 중에 하나라고 보면된다.
//마크업에 태그를 이용하는 것처럼 동일하게 나타난다. 
//HTML과 마찬가지고 데이터를 표현할수 있는 한가지 방법이다.
//
//XML을 사용하면 불필요한 태그들이 많이 들어가서 파일에 사이즈도 커지고 가속성도 좋지 않기 때문에 
//이제 많이 상용되어 지고 있지 않다
//요즘은 JSON을 많이 사용하는데 
//이것은 javaScript Object Notation에 약자로써 자바스크립트 오브젝트와 관력된 파일이라고 유추할수 있다.
//Object는{key:value}로 이루어져 있다 
//브라우져 뿐만 아니라 모바일에서 서버와 데이터를 주고 받거나, 서버와 통신을 하지 않아도. 
//오브젝트를 파일 시스템에 저장할때도 이 타입을 많이 이용하고 있다. 
//1.데이터를 주고 받을때 쓸수 있는 가장 간단한 파일 포맵이다.
//2.텍스트를 기반으로한 가볍다.
//3.사람눈으로 읽기도 편하다.
//4.키와 벨유로 이우러져있는 파일 포맵이고 
//5. 데이터를 보통 서버와 주고 받을때 직렬화 하고 데이터 전송할때 사용한다.
//6.프로그램 랭귀지지만platform상관없이 쓸수 있다 
//그말은 여러가지 언어들의 상관없이 거의 대부분에 언어들이 오브젝트로 변환하고 그걸 다시 변환해서 외부로 불러올수 있다.  
