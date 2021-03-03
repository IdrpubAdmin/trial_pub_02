 console.log('----------------------파트1 부분 배열string<<<array');
// Q1. make a string out of an array
//주어진 array를 string으로 바꾸어주는 방법.
//각각의 3개의 아이템이 있는데 string으로 하나도 묶어주는걸 해야한다.
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(', and '); 
//join은 배열에 있는 모든 아이들을 더해서 string으로 리턴하는걸 하는 방법이다.  
//
 console.log(result);
}

 console.log('----------------------파트2 부분 배열array <<<string');
// Q2. make an array out of a string

{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); 
  console.log(result);
//string안에 있는 API split이 있다. 
//split은 총 2가지의 parameter(사용자가 원하는 방식으로 자료가 처리되도록 하기 위하여 명령어를 입력할 때 추가하거나 변경하는 수치 정보.)가지고 있다.
//separator(구분자):string|RegExp 또는 Limit?:numder을 전달받는다. 
//
}

 console.log('----------------------파트3 부분 배열array <<<this');
// Q3. make this array look like this: [5, 4, 3, 2, 1]
//주어진 배열에 순서를 거꾸로 만드는 것이다. 
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
//배열안에 들어있는 아이템에 순서를 거꾸로 만들어준다.
  console.log(result);
//우리가 중요하게 생각해야하는 것 중 하나는 이렇게 거꾸로된 리턴값인데 사실 배열자체도 순서가 바뀌어 있는걸 확인할수 있다. 
//배열 값도 거꾸로 만들고 리턴값도 변화된 것을 확인할수 있다. 
  console.log(array);
}

console.log('----------------------파트4 부분 배열array <<<elements');
// Q4. make new array without the first two elements
//주어진 배열에서 첫번째와 두번째 요소를 제외한 나머지 3개만 들어있는 새로운 배열을 만드는 것이 문제였다.

{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
// const result = array.splice(); 이splice는 어디서부터 몇개를 지울껀지 이야기하면 그 부분을 삭제하는 하고 보여주는 기능을 합니다. 즉 배열 자체에서 데이터를 삭제하는 기능을 합니다. 하지만 여기서 포인트는 array 자체를 변형하는게 아니라 새로운 배열을 만들어야 되서 이건 사용 안한다. 여기서는 slice를 사용합니다.
  console.log(result);
  console.log(array);
}
class Student {constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

console.log('-----------파트5 부분 배열 find');
// Q5. find a student with the score 90
//학생을 찾아야 하는데 점수가 90점인 학생을 찾아야 한다.

//find를 스면 되는데 이 함수는 2가지의 인자가 전달되는걸 볼수있다. 
//predicate랑 thisArp?가 있다 .
//predicate는 콜백함수를 받는다.  함수유형은 (this, value,index,obj 이렇게 4가지 인자가 전달이 되고. 값이 value is S<<< 분리형 값으로 정의되는 함수)
//find는 처음 찾아진 요소를 리턴하는 한다 array안에서. 
//predicate 콜백함수는 배열에 있는 모든 요소들 마다 호출이 되어진다. 그래서 호출되어진 콜백함수가 true를 리턴하면 바로 함수를 멈추고 true가 된 함수를 리턴한다.
{
//    const result = students.find(function(student, index) {
//    console.log(student, index);
//    });
    
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

console.log('-----------파트6 부분 배열 filter');

// Q6. make an array of enrolled students
//이 학생들 중에서 수업에 등록한 학생들만 골라서 배열로 만들기. 즉 true에 있는 학생들만 배열에 만드는 걸 말한다. 
//filter를 콜백함수를 써서 수업에 들어 있는 애들만 배열하는 방식이다. 

{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

console.log('-----------파트7 부분 배열 map');
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
//이 학생들의 배열에서 점수만 뽑아와서 새롭게 배열하는 방법.
//student안에서 map을 할껀데 map이라는 것은 배열한에 들어있는 요소 한가지 한가지를 다른 요소로 변환하는 것을 말한다. 
//map은 지정된 콜백함수를 호풀하면서 각각의 요소들을 함수를 걸쳐서 다시 새로운 값으로 변환하는걸 말한다. 그래서 우리가 전달하는 콜백함수가 어떤 일을 하냐에 따라 다른 값으로 map되면서 만들어 진다. 
//만약 이 funcion이 주어진 숫자를 두배로 2를 곱해주면 이 2가 map이 돠고 해당 값은 2를 곱해서 나타나게 된다. 

{
    const result = students.map((student) => student.score);
    console.log(result);
    
}

console.log('-----------파트8 부분 배열 some, every');
// Q8. check if there is a student with the score lower than 50
//학생들 중에 50점 보다 낮은 학생이 있는지 없는지 확인해라.
//즉 배열안에 학생들 점수가 50점보다 작은 학생이 있는지 없는지를 확인해라.
//결과적으로 false가 리턴되게 만들면 되는것이다.

//some은 배열요소중에서 콜백함수가 리턴이 true가 있는지 없는지를 확인해주는 역할을 한다.
//어떤것이라도 하나 만족되는게 있는지 없는지 검사할때는 some을 이용하면된다.
{
//  console.clear();
  const result = students.some((student) => student.score < 50 );
  console.log(result);
//!표는 false라면 true로 true라면 false로 리턴하는 역활을 한다.
//모든 배열에 조건이 만족이 되야 될때는 every를 쓰면 된다.     
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

console.log('-----------파트9 부분 배열 reduce, prev, curr');
//console.clear();
// Q9. compute students' average score

//학생들 평균 성적을 구해오는 방법이다.
//reduce 콜백함수를 전달하고 또는 initialvalue를 전달할수도 있다.
//이렇게 reduce는 두개를 전달하는데 콜백함수는 배열안에 안에 잇는 요소들을 호출한다.(filter,some, every) 비슷하다고 보면된다. 그런데 콜백함수에서 나온 결과값은 함께 누적된 결과값을 리턴한다.  
//즉 reduce는 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤값을 누적할때 쓰는 것이다.
//reduseRight은 배열에 가장 뒤에서 부터 시작하는걸 말한다. 순서가 거꾸로 하는방법이다. 
//prev는 이전에 콜백함수에서 리턴된 값이 전달되어져 오고 curr는 배열에 아이템을 순차적으로 전달받는다. 
 
{
  const result = students.reduce((prev, curr) => prev.score + curr.score);
  console.log(result / students.length);
}

console.log('-----------파트10 부분 배열 make a string containing all the scores');
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'

//학생들의 모든 점수를 string으로 변환해서 보는것이다.


{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
//  .filter((score) => score >= 50)
//sort는 콜백함수의 a 와 b 즉 이전값과 현대값이 전달이 된는데 니가 만약 -값을 리턴하게되면 첫번째가 뒤에보다 작다고 간주되어서 전열이 된다라고 할수 있다. 그래서 학생 a와 b라는 값이 전달이 되는데 a에서 b를 뺐을때 즉 b가 a보다 컸을때 -value값을 우리가 원하는 대로 sort 이 될수 있다. 그리고 sort된 것은 join해서 string으로 변환하는 방법이다.
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}
