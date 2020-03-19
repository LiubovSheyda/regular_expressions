let str = 'a1b c34d x567z';
let k=str.match(/\d/g, '!')
let q=0;

for(i=0;i<k.length;i++)   
    q+=+k[i];

 console.log(q);
