const { even, odd } = require('./node03');
let node03 = require('./node03');

// log(node03.even);
function checkNumber(num){
    if(num % 2 == 0){
        console.log(node03.even)
    }else{
        console.log(node03.odd);
    }
}

checkNumber(10);
checkNumber(9);