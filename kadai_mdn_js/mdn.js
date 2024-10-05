// Date()から年、月、日を抜き取り定数に代入する
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

// 課題に適した状態で出力する
console.log(year + '年' + month + '月' + day + '日');

