let str = '31.12.2025';

let res = str.match(/(\d{1,2})\.(\d{1,2})\.(\d{1,4})/);

console.log(res[1]); 
console.log(res[2]); 
console.log(res[3]); 