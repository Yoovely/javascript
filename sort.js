// sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
const months = ['March', 'April', 'Jan', 'Feb', 'Dec'];
months.sort(); // 알파벳 순으로 정렬 됨
console.log(months);

const array1 = [1, 30, 4, 21, 100000];
array1.sort(); // 숫자도 문자처럼 인식해서 1, 10000, 21.. 순으로 정렬 됨
console.log(array1);


// 방법 1
// return 되는 -1,1은 중요하지 않고 a,b값 연산해서 결과가 0보다 큰지 작은지가 중요
console.log(array1.sort(function(a,b){
    if(a<b){
        return -1;
    }
    else if(a>b){
        return  1;
    }
    return 0;
}));

// 방법 2
// 방법 1과 같은 결과가 나옴. 훨씬 단순
console.log(array1.sort((a,b) => a-b));

const userList = [ //array 선언
    // 보통 예제는 배열에 숫자를 담지만, 실무에서는 보통 배열에 object를 담는다 ex. user list
    {
        userId:"1",
        firstName:"Yoolee",
        lastName:"Lee", 
        yyyymmdd:"20220908", 
        phone:"010-111-1111", 
        address:"Seoul"
    },
    {
        userId:"2", 
        firstName:"Jeremy", 
        lastName:"Jucker", 
        yyyymmdd:"20200303", 
        phone:"010-111-1234", 
        address:"Jeju"
    },
    {
        userId:"3", 
        firstName:"Heesong", 
        lastName:"Lee", 
        yyyymmdd:"19940202", 
        phone:"010-123-1111", 
        address:"Seoul"
    }
];