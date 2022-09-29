const userList = [ //array 선언
    // 보통 예제는 배열에 숫자를 담지만, 실무에서는 보통 배열에 object를 담는다 ex. user list
    {userId:"1", firstName:"Yoolee", lastName:"Lee", yyyymmdd:"20220908", phone:"010-111-1111", address:"Seoul"},
    {userId:"2", firstName:"Jeremy", lastName:"Jucker", yyyymmdd:"20200303", phone:"010-111-1234", address:"Jeju"},
    {userId:"3", firstName:"Heesong", lastName:"Lee", yyyymmdd:"19940202", phone:"010-123-1111", address:"Seoul"}
];

var mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(parseInt("05"));
console.log(mon[parseInt("05")-1]);

const newUserList = userList.map( u => (
    {
        userId: u.userId, 
        firstName: u.firstName, 
        lastName: u.lastName, 
        fullName: u.firstName+' '+u.lastName, 
        yyyymmdd: u.yyyymmdd, 
        year: u.yyyymmdd.substring(0,4), // 0-4까지
        month: u.yyyymmdd.substring(4,6), // 4-6까지
        day: u.yyyymmdd.substring(6,8), // 6-8까지
        usDateFormat: mon[parseInt(u.yyyymmdd.substring(4,6))-1] + " " + parseInt(u.yyyymmdd.substring(6,8)) + " " + u.yyyymmdd.substring(0,4),
        phone: u.phone, 
        address: u.address
    }
));


console.log(newUserList);