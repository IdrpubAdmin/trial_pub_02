'use strict';

function check(){
//     console.log('여기까지 왔음');
//     const IdValue = document.querySelector(".top input[type*='text']");
//     console.log(IdValue);
//     // alert(IdValue.getAttribute('value') == "");
// //getAttribute() 은 해당 요소에 지정된 값을 반환 합니다.
// // 만약 주어진 속성이 존재 하지 않는 다면, null 값이나 ""(빈문자열); 을 반환 할 것입니다.
//
//    const passwordValue = document.querySelector(".top input[type*='password']");
//    console.log(passwordValue);
//    // alert('비밀번호를 확인하세요');

   const loginform = document.loginform;
   const userId = loginform.userId;
   const password = loginform.password;

   if(userId || password){
       alert('ID와 비밀번호를 입력해주세요');
   }else if('password'){
        alert('비밀번호가 틀립니다')
   }


   else{
       loginform.submit();
   }

}
//querySelector는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 null을 반환합니다.
//자바스크립트에서는 특정 이벤트가 발생했을 시 특정 함수를 실행할 수 있게 해주는 addEventListener라는 기능이 존재합니다.
function loginBtnActon(){
    const loginBtn = document.querySelector('.login_btn');
    loginBtn.addEventListener('click',check);
}

function init(){
    loginBtnActon();
}

//문서 로드시 처음으로 호출
init();
