// node-fetch.js 
const fetch = require('node-fetch');
const fs = require('fs').promises;
const cheerio = require('cheerio');

const url = "http://ncov.mohw.go.kr/bdBoardList_Real.do";
const filename = "./data/data.txt";
//확진자 성별현황
// 종합 현황 
function fetchCorona(callBack) {
    fetch(url)
        .then(function (data) {
            return data.text();
        })
        .then(function (body) {
            let $ = cheerio.load(body); //html을 읽어서 제이쿼리 형식으로 쓸 수 있게 변환해줘
            
            let value1 = parseInt($(".inner_value").eq(0).text().trim().split(",").split(" ").join("") );  // +1,234 => [+1, 234] => +1234
            let value2 = parseInt($(".inner_value").eq(1).text().trim().split(",").split(" ").join(""));
            let value3 = parseInt($(".inner_value").eq(2).text().trim().split(",").split(" ").join(""));

            let value4 = $(".ca_value").eq(2).text().trim();
            let value5 = $(".ca_value").eq(3).text().trim();
            let value6 = $(".ca_value").eq(4).text().trim();
            let value7 = $(".ca_value").eq(5).text().trim();
            let value8 = $(".ca_value").eq(6).text().trim();
            let value9 = $(".ca_value").eq(7).text().trim();
            
            let recordData = {
                before:[value1, value2, value3],
                out:[value4, value5],
                in:[value6, value7],
                dead:[value8, value9]
            }
            
            callBack(recordData);
        })
        .catch(function (err) {
            console.log(err);
            callBack(err);
        });
}

module.exports = {
    fetchCorona
}

//   가져온 데이터를 data/corona.html 
// 기록된 후, 기록완료라는 메시지도 나오게 정정

// npm install node-fetch
// npm install cheerio