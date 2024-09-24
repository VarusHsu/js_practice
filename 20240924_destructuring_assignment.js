(function(){
	"use strict";
	
	let array = [10, 20, 30, 40, 50, 60 ,70, 80, 90];
	const [a, b] = array;
	console.log(a, b);
	
	const [c, , d] = array;
	console.log(c , d);

	let eDefault = 11;
	let gDefault = 12;
	const [e=eDefault, f,,,,,,,,,,,,,,,,,g=gDefault] = array;
	console.log(e,f, g);

	let [h, ,i, ...j] = array;
	console.log(h, i, j);

	const [k, l, ...{push, pop}] = array;
	console.log(k, l, push, pop);
		
})()
