(function () {
	"use strict";
	var Fruh = "foobar";
	console.log(Fruh);
	
	// a one line comment

	/*
		multi-line comment
		...

	*/

	/* using *\/ escape slashes */

	var x = 42;  // global mutable
	let y = 13;  // local mutable
	const z = 27; // local read only
	console.log(x); 
	console.log(y);
	console.log(z);

	let a, b, rest;
	[a, b] = [10, 20];
	console.log(a);
	console.log(b);
	[a, b, ...rest] =[10, 20, 30, 40, 50];
	console.log(rest); 
	
	// foo = 1; // Reference error in strict mode 
	// console.log(foo);

	let array = [1, 2, 3, 4, 5, 6];
	const [a1, b1] = array;
	console.log(a1, b1);
	const [a2, , b2] = array;
	console.log(a2, b2);

	let c;
	if (c === undefined) {
		console.log("c has not be assigned");
	}else {
		console.log("c has been assigned");
	}


	let d = 0;
	if (d === undefined) {
		console.log("d has not be assigned");
	} else {
		console.log("d has been assigned");
	}

	if (undefined);else {
		console.log("undefined will as false when in boolean");
	}

	console.log(null + 1); // 1
	console.log(!null); // true

	console.log(e);
	if (true) {
		var e = 5;
	}
	console.log(e); // global

	f1();
	var f1 = ()=> console.log("f1");

})()
