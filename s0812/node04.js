let strgin = "abc";
let number = 1;
let boolean = true;
let obj = {
    outside : {
        inside:{
            key : 'value'
        }
    }
};

console.log("평범한 로그 찍기, , 기호로 구분해서 여러개 찍기");
console.log(strgin, number, boolean);

let tbl = [
    {name:"이동원",birth:2004},
    {name:"김규태",birth:2005},
    {name:"박인환",birth:2006},
]

console.table(tbl);

console.time("인붕");

for(let i = 0; i<10000;i++){
    ;
}

console.timeEnd("인붕");

function b(){
    console.trace("실행 순서를 추적한다");
}

function a(){
    b();
}
a();