var number = 83;

var unit = Math.floor(number % 10); //  85 chia cho 10 dư 5, lấy phần dư 5
var dozens = Math.floor(number / 10);

var sum = unit + dozens;
console.log('Tổng' + ' ' + sum);