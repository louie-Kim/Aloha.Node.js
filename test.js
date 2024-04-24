// //var, let 호이스팅으로 인한 차이
// function example() {
//     console.log(a); // 출력: undefined (호이스팅O) a에 접근은 가능
//     var a = 10;
//     console.log(a); // 출력: 10
//   }
  
//   function exampleLet() {
//     // console.log(b); // 에러: 초기화되지 않은 변수를 참조할 수 없음,  (호이스팅 X)
//     let b = 20;
//     console.log(b); // 출력: 20
//   }
  
//   example();
//   exampleLet();



// //var : 함수 스코프 (호이스팅 O)
// function exampleVar() {
//     if (true) {
//       var x = 10;
//     }
//     console.log(x); // 출력: 10
//   }
  
//   exampleVar();

//   //let : 블록 스코프 (호이스팅 X)
//   function exampleLet() {
//     if (true) {
//       let y = 20;
//     }
//     // console.log(y); // 에러: 블록 스코프 변수를 참조할 수 없음
//   }
  
//   exampleLet();



//arguments : 함수안에서 인자들을 나타내는 객체
// function regularFunction() {
//     console.log(arguments);
//   }
  
//   regularFunction(1, 'hello', true); //[Arguments] { '0': 1, '1': 'hello', '2': true }

// const arrowFunction = () => {
//     // console.log(arguments); // 에러: arguments는 화살표 함수에서 사용 불가
//   };
  
//   arrowFunction(1, 'hello', true);


//foreach()
// const array = [1, 2, 3, 4, 5]

// array.forEach(function(item, index, array) {
//   // 작업 수행
//   console.log(`item(${index}): ${item} ${array}`);
// });


// //map(): 함수를 호출해서연산 그 결과를 배열로 반환
// const numbers = [1, 2, 3, 4, 5]
// const squared = numbers.map((item)=>{
//     // console.log(number);
//     return item * item
// })

// console.log(squared); //[ 1, 4, 9, 16, 25 ]


// //reduce(): 함수를 실행하고 누적된 결과 값을 반환 -> 배열의 요소를 하나의 값으로 축소할때
// const numbers = [1, 2, 3, 4, 5];
// // accumulator: 누적되는 값
// const sum = numbers.reduce((accumulator, item, index, array) => {
//   return accumulator + item;
// }, 0); //accumulator 의 초기값

// console.log(sum); // 출력: 15




//객체 리터럴

// const name = 'aloha';
// const age = 20;

// // 기존 방식
// const person1 = {
//   name: name,
//   age: age
// };

// // 향상된 객체 문법 
// const person2 = {
//   name,
//   age
// };

// console.log(person1); // { name: 'aloha', age: 20 }
// console.log(person2); // { name: 'aloha', age: 20 }



const key = '성별'; // 속성 변경가능

const person = {
  name: 'aloha',
  age: 25,
  [key]: 'female'
};

console.log(person); // { name: 'aloha', age: 25, gender: 'female' }

//메서드 축약
// 기존 방식
// const obj1 = {
//     method1: function() {
//       // 메서드 로직
//     }
//   };
  
//   // 향상된 객체 문법
//   const obj2 = {
//     method1() {
//       // 메서드 로직
//     }
//   };