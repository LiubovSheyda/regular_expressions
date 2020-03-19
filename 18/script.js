console.log('№2= '+/http:|https:/.test('https://code.mu'));

console.log('№4= '+/.jpg|.jpeg/.test('file.jpg'));

let k='11111111';
console.log('№6= '+(!/\D/.test(k) && k.length<12 && k.length>=1));

console.log('№8= '+/^\d{1,2}\.\d{1,2}\.\d{4}$/.test('10.01.2000'));

console.log('№10= '+/^\w{3,20}\@\w{2,10}\.\w{2,10}$/.test('name@mail.com'));