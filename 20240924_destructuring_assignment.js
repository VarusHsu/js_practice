(function(){
	"use strict";
	
	test1();
	test2();	
	test3();
})()

function test1() {
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
}

function test2(){
	const obj = {a:1, b:2};
	const {aa, bb} = obj;
	console.log(aa, bb); // undefined
	
	const {a, b} = obj;
	console.log(a, b);	
}

function test3(){
	const obj = {a:1, b: {c:2}};
	const {a} = obj;
	let {
		b: {c: d},
	} = obj;
	console.log(a);
	console.log(d);
	
}

func test4(){
	


}
