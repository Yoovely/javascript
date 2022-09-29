// filter method 사용
// 배열 선언
const userList = [
        {userId:"1", firstName:"Yoolee", lastName:"Lee", phone:"010-111-1111", address:"Seoul"},
        {userId:"2", firstName:"Jeremy", lastName:"Jucker", phone:"010-111-1234", address:"Jeju"},
        {userId:"3", firstName:"Heesong", lastName:"Lee", phone:"010-123-1111", address:"Seoul"} 
];

var selectedUserInfo = {}; // object 생성
// 전체 userList 배열 중 userId 2인거 찾아서 selectedUserInfo에 넣어주고 그 정보를 팝업 윈도우로 보여줌
for(var i=0; i<userList.length; i++){
    if(userList[i].userId == "2"){ 
        selectedUserInfo = userList[i];
    }
}

console.log('method-1',selectedUserInfo);



// db에서 가져온 배열 형태의 정보가 있고, 화면상에서 선택한 특정 정보만 빼서 보여주는 용도로 쓸 때 filter 많이 씀
// filter method 사용해서 위 코드를 대체 --> 위 여섯 줄의 코드를 한 줄로 줄일 수 있음
var selectedUserInfo2 = userList.filter(u => (u.userId == "2"))[0]; // 가져온 정보의 배열의 첫번째 값 가져옴
console.log('method-2',selectedUserInfo2);
// 그런데 여기서는 [0] 쓰나 안쓰나 똑같은듯..?

// 실무에서 사용 예제: user list에서도 사용하며 select box, combo box 등에서 특정 옵션을 선택 시, 선택된 옵션의 상세 나머지 정보를 가져와야하는 경우 많이 씀