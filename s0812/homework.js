console.time("시작");

for(let i = 1; i <= 100; i++){
    let divideCnt = 0;
        for(j = 2; j<i-1;j++){
            if( i% j == 0){
                console.log(j);
            }
        }
}
console.timeEnd("끗");