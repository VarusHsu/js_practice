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
})()
