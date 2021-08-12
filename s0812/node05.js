// let timeOutId = setTimeout(function(){
//     console.log("1.5초 후에 실행됩니다.");
// },1500);

// let intervalId = setInterval(function(){
//     console.log("0.3초마다 인터벌");
// },300);

// setTimeout(function(){
//     clearTimeout(timeOutId);
//     clearInterval(intervalId);
// }, 2000);

let im = setImmediate(function(){
    console.log("즉시 실행");
});
// console.log("즉시 실행");

for(let i =0; i< 100000; i++){
    ;
}

console.log("실행 종료");


// 빙동기처리: 선생님 제가 이해한게 맞다면 그 set어쩌고 그런것들은 어디 한 루프에 가두고 메인부터 처리한다음 그 루프에서 꺼내는거죠?

