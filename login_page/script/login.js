'use strict';

function check() {
//  //    console.log('여기까지 왔음');
//  //    const IdValue = document.querySelector(".top input[type*='text']");
//  //    console.log(IdValue);
//  //    // alert(IdValue.getAttribute('value') == "");
//  //    //getAttribute() 은 해당 요소에 지정된 값을 반환 합니다.
//  //    // 만약 주어진 속성이 존재 하지 않는 다면, null 값이나 ""(빈문자열); 을 반환 할 것입니다.
//  //
//  //   const passwordValue = document.querySelector(".top input[type*='password']");
//  //   console.log(passwordValue);
//  // alert('비밀번호를 확인하세요');
//
    //셋팅된 ID
    const dbId = 'soo1111';
    //셋팅된 PW
    const dbPw = '1234';

    // 숫자,영문,특수문자,한글 (정규식)
    const checkNum = /[0-9]/;
    const checkEng = /[a-zA-Z]/;
    const checkEnga = /[a-z]/;
    const checkEngA = /[A-Z]/;
    const checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
    const checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const checkOne = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;



    //HTMl
    let loginform = document.loginform;
    let userId = loginform.userId.value;
    let password = loginform.password.value;

    let checkResult = false; //체크결과

    console.log("userId : " + userId)
    console.log("password : " + password)

    if (!checkResult) {
        // if (userId === "" || userId === null) {
        //     alert('ID를 입력해주세요');
        //     return false;
        // }
        // if (password === "" || password === null) {
        //     alert('비밀번호를 입력해주세요');
        //     return false;
        // }
        // if (!(userId.length >= 5 && userId.length < 19)) {
        //     alert('올바른 ID를 입력해주세요');
        //     return false;
        // }
        // if (!(password == '1234')) {
        //     alert('비밀번호가 틀립니다.');
        //     return false;
        // }
        // if (!(userId === 'soo1111')) {
        //     alert('ID가 틀립니다.');
        //     return false;
        // }
        //
        // if (!(userId == 'soo1111' && password == '1234')) {
        //     alert('아이디 혹은 비밀번호가 잘못 입력하셨습니다');
        //     return false;
        // }

        //  if(checkSpc.test(userId)){
        //      alert('ID는 특수문자는 사용할 수 없습니다');
        //     return false;
        // }
        //
        // if(checkEngA.test(userId)){
        //     alert('ID에 대문자를 사용 할 수 없습니다');
        //     return false;
        // }
        // if(checkKor.test(userId)){
        //      alert('ID에 한글을 사용할 수 없습니다');
        //     return false;
        // }
        //
        if(CheckOne.test(password)){
            alert('비밀번호가 틀립니다.');
            return false;
        }


    }
    checkResult = true;

    if(checkResult){
        alert("서밋 직전~!");
    }

}

function checkKey(e){
    let checkResult = false;
    console.log(e.keyCode);

        if(!(e.keyCode == 20)){
            alert('Csps Lock확인하세요.');
            return false;
        }

    checkResult = true;

    if(checkResult){
        alert("서밋 직전~!");
    }

}






//querySelector는 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 null을 반환합니다.
//자바스크립트에서는 특정 이벤트가 발생했을 시 특정 함수를 실행할 수 있게 해주는 addEventListener라는 기능이 존재합니다.
function loginBtnActon(){
    const loginBtn = document.querySelector('.login_btn');
    const loginInput = document.querySelectorAll('.login_box input');
    loginBtn.addEventListener('click',check);
    loginInput[0].addEventListener('keyup',checkKey);
}

function init(){
    loginBtnActon();
}

//문서 로드시 처음으로 호출
init();
