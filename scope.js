// Global Scope 전역변수 - 어디서든 접근 가능
// Local Scope 지역변수 - Function Scope, Block Scope 함수나 중괄호 안에서 선언된 변수
// Function Scope는 var, const, let 상관 없이 해당 함수 안에서만 변수 사용 가능. 밖에서 참조 불가
// Block Scope는 똑같은 local이지만, var로 선언 시 global로 되어서 밖에서 참조 가능. (let이나 const로 선언했을 경우에는 사용 불가)

// var a = 10; // global scope

if(true){ // 중괄호 안에 있는건 block scope
   //  console.log('1 - ', a);
    var a = 20;
    console.log('2 - ', a);
}

// console.log('3 - ', a);

function test(){
    var b = 30;
    console.log('4 - ', a); // a가 let으로 선언된 경우: 위의 block안에서 선언 되었기 때문에 사용 불가 --> 하지만 var로 선언 시 사용 가능함
    console.log('5 - ', b);
}

// console.log('6 - ', b); // 얘는 출력불가. function

test();d