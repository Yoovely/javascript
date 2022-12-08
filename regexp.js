// 정규식은 특정문자 체크할 때 유용하다
// 이메일, 집전화번호, 폰번호, 주소, 우편번호로 정규식 만들어서 사용자가 입력한 정보가 맞는 정보인지(패턴) 확인

// 우편번호: 우리나라는 5자리 숫자 ex) 35123 넣으면 맞는 패턴, 문자 or 4자리이하 or 6자리이상의 숫자 넣으면 틀린 패턴
var regexp_postalcode = /^\d{5}$/; // 숫자만 5개 받겠다는 의미
// 그냥 코드를 쓰면 사용자가 입력한 문자가 5자리인지 체크, 한자한자를 다 string에서 가져와서 다 체크해야하는데 이러면 복잡해지는데 정규식을 쓰면 코드가 훨씬 간단해짐

// /\d{5}/ : 숫자가 연속해서 5개가 있으면 무조건 true 받음
// /^\d{5}/ : 숫자로 시작해야함
// /^\d{5}$/ : 숫자로 시작하고 숫자 다섯개로 끝내겠다는 의미
console.log(regexp_postalcode.test("51213")); // 테스트로 넣어보기

// 지역번호가 서울, 제주인 경우만
var regexp_telephone = /^(02|064)-(\d{3}|\d{4})-(\d{4}$)/;
// 처음칸: 시작 문자가 02 또는 064, 다음 칸은 3개 또는 4개의 숫자, 마지막 숫자는 4자리로 끝내기
console.log(regexp_telephone.test("02-123-1234"));

// 폰번호 체크
var regexp_mobile = /^(010)-\d{4}-\d{4}$/;
console.log(regexp_mobile.test("010-1234-421"));

// email 체크
// abc@myvalues.com - ok
// myvalues.good@abc.com - ok
// @myvalue.com - x
// myvalue@.com - x
var regexp_email = //;