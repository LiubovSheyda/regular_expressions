let str = 'aaa [2] bbb [3] ccc [12] ddd';


let res = str.replace(/\d+/g, function(q){
	return q*2;
});

console.log(res);