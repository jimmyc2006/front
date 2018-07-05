function* foo(x) {
	yield x + 1;
	yield x + 2;
	return x + 3;
}

// 斐波那契数列
function fib(max) {
	var t,
		a = 0,
		b = 1,
		arr = [0, 1];
	while (arr.length < max) {
		[a, b] = [b, a + b];
		arr.push(b);
	}
	return arr;
}
// 测试
console.log(fib(5));
console.log(fib(10));
// 函数只能返回一次，所以只能返回一个array
// 换成generator
function* fib2(max) {
	var 
		t,
		a = 0,
		b = 1,
		n = 0;
	while (n < max) {
		yield a;
		[a, b] = [b, a + b];
		n ++;
	}
	return;
}
console.log(fib2(5));

// 调用generator对象有两个方法，一是不断地调用generator对象的next()方法:
var f = fib2(5);
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
// next()方法会执行generator的代码，然后，每次遇到yield x;就返回一个对象{value: x, done: true/false}
// 然后"暂停"。返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。
// 如果done为true，则value就是return的返回值
// 当执行到done为true时，这个generator对象就已经全部执行完毕，不要再继续调用next()了

// 第二个方法是直接用for ... of循环迭代generator对象，这种方式不需要我们自己判断done
console.log('使用for ... of 遍历generator');
for (var x of fib2(5)) {
	console.log(x);
}

// generator的作用：generator可以再执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数
// 利用这一点，写一个generator就可以实现需要用面向对象才能实现的功能
var fib3 = {
	a : 0,
	b : 1,
	n : 0,
	max : 5,
	next : function () {
		var 
			r = this.a,
			t = this.a + this.b;
		this.a = this.b;
		this.b = t;
		if (this.n < this.max) {
			this.n ++;
			return r;
		} else {
			return undefined;
		}
	}
};
// 传统的用对象来保存状态，相当繁琐。

// 生成一个字增ID
var current_id = 0;
function next_id() {
	current_id ++;
	return current_id;
}
// 由于函数无法保存状态，故需要一个全局变量current_id来保存数字
// 不用闭包，试用generator改写：
console.log('试用generator生成的序列');

function* next_id() {
	var a = 0;
	while (true) {
		a ++;
		yield a;
	}
}
var ft = next_id();
console.log(ft.next().value);
console.log(ft.next().value);
console.log(ft.next().value);
console.log(ft.next().value);
// 感觉generator就是一个包含变量和返回的类似函数东西，但是每次调用，其实就是返回的yield，程序还是继续执行
// 由于机制问题，需要在generator里面有循环，超过循环以后，将无法获得值

// 使用闭包实现自增
console.log('使用闭包实现自增');
function create_counter(initial) {
	var x = initial || 0;
	return {
		inc : function() {
			x += 1;
			return x;
		}
	}
}
var c1 = create_counter();
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());













