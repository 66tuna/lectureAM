//resolve와 reject는 함수로 넣어진다.

function Test(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 2);
        });
    });
}
//async => 비동기
async function awaitTest(){
    let value = await Test(4);
    console.log(value);
}

awaitTest();

while(true){

}

// Test(4).then((data) => {
//     console.log(data);
// });





let pl = new Promise((resolve, reject) => {
    //여기다가 뭔가 시간이 걸리는 작업을 수행해.
    //그리고나서 작업이 모두 끝났다면 resolve를 호출하고, 작업을 하다가 실해파면 reject를 호출해
    setTimeout(function(){
        console.log("2초가 종료되었습니다.");
        resolve("Hello Promise");
    },2000);
});

pl.then(function(data){//then뭔지 찾아보기
    console.log(data);
})