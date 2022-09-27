var a = "South Korea";
console.log(a);

var a = "My Korea";
console.log(a);
// var 타입은 동일한 변수명 재정의 해도 에러 없음

// =========================================

let b = "Hi";
console.log(b);

// let b = "Hello";
// console.log(b);
// let 타입은 한번 사용한 변수명으로 재정의 불가

b = "Hello";
console.log(b);
// 동일한 변수명에 재할당은 가능함

// =========================================

const c = "Good";
console.log(c);

// const c = "Nice";
// console.log(c);
// const 타입도 한번 사용한 변수명 재정의 불가

// c = "Nice";
// console.log(c);
// 중복된 변수명으로 선언도 불가하지만, 재할당도 불가
