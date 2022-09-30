let set1 = new Set(); // set 선언법
let arr = []; // 기본적으로 배열과 비슷

arr.push(1); // js의 배열에서는 push 메서드를 통해 배열에 값 추가
arr.push(5);
arr.push(5);

console.log('arr', arr); // 대괄호로 출력. 중복된 값도 다 출력

// js의 set은 배열과 유사하나, add 메서드를 통해 값 추가
set1.add(1);
set1.add(5);
set1.add(5);

console.log('set1', set1); // 중괄호로 출력. set은 유일한 값을 보장

// arr 배열에서 특정 값이 있는지 확인할 때 for문 돌려가며 확인
arr = ['Seoul', 'Busan', 'Daegu', 'Daejun', 'Jeju'];
var isExistSeoul = false;
arr.forEach(item => {
    if(item == 'Seoul'){
        isExistSeoul = true;
    }
})

// set 사용 시에는 has라는 내장함수 사용해서 원하는 값 찾기가 가능
let set2 = new Set(arr); // set에 해당 배열 넣어주고
console.log(set2.has('Seoul')); // has 사용해서 찾고싶은 값 넣기