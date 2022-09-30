const moment = require('moment');

console.log('today', moment().format('YYYY-MM-DD'));
console.log('today - us format', moment().format('MMM D, YYYY'));

console.log('+1 day', moment().add(1, 'day').format('YYYY-MM-DD')); // 하루 뒤
console.log('+1 day', moment().add(-1, 'day').format('YYYY-MM-DD')); // 하루 전을 add 함수 써서 표현
console.log('-1 day', moment().subtract(1, 'day').format('YYYY-MM-DD')); // 하루 전을 subtract 함수 써서 표현
// 어떤 메소드를 써서 표현해도 상관없으나 명확한 메소드명을 쓰는게 좋아서 더할땐 add, 뺄 땐 subtract 쓰는게 좋음

console.log('+1 week', moment().add(1, 'week').format('YYYY-MM-DD')); // week이라고만 표현하면 알아서 일주일 단위로 움직임
console.log('-1 week', moment().subtract(1, 'week').format('YYYY-MM-DD'));

console.log('+1 month', moment().add(1, 'month').format('YYYY-MM-DD')); // 한달은 month
console.log('-1 month', moment().subtract(1, 'month').format('YYYY-MM-DD'));

console.log('+1 year', moment().add(1, 'year').format('YYYY-MM-DD')); // 연 단위는 year
console.log('-1 year', moment().subtract(1, 'year').format('YYYY-MM-DD'));

// 기본적으로 UTC 기준 시간으로 나옴 --> 한국은 UTC+9

var creation_date = new Date(); // db에서 가져온 오늘날짜. 시간 기준은 UTC+0
var user_timezone = 9; // 유저의 타임존이 9인 경우 moment 통해서 처리 가능

console.log('system', moment(creation_date).format('YYYY-MM-DD HH:mm:ss')); // timezone 적용 전
console.log('timezone', moment(creation_date).add(user_timezone, 'hour').format('YYYY-MM-DD HH:mm:ss')); // timezone 적용 후