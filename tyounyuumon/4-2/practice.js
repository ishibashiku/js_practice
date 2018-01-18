var now = new Date;

var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var hour24 = now.getHours();
// 3項演算子
var ampm = hour24<12 ? 'am' : 'pm';
var hour12 = hour24%12;
var min = now.getMinutes();

var message = '最終アクセス日時: '+year+'/'+month+'/'+date+' '+hour12+':'+min+ampm;

document.getElementById('output').textContent = message;
