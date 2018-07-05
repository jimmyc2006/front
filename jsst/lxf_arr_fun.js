console.log('test');
var fn = x => x * x;
console.log(fn(2));

// 上面这种只包含一个表达式
console.log("另一个箭头函数");
x => {
	if (x > 0) {
		return x * x;
	} else {
		return -x * x;
	}
}
// 如果参数不是一个，就需要用括号()括起来
(x, y) => x * x + y * y;
// 无参数
() => 3.14

var f = (x, y, ...rest) => {
	var i,sum = x + y;
	console.log('x = ' + x + ', y = ' + y);
	for(var i = 0; i < rest.length; i++) {
		console.log(rest[i]);
	}
}
console.log("箭头函数的可变参数");
f(1, 2, 3, 4, 5, 6);

console.log('返回对象');
var f2 = x => {return {foo : x}};
var f3 = x => ({foo : x});
console.log(f2(3).foo);
console.log(f3(4).foo);

console.log('箭头函数的this');
var obj = {
	birth : 1990,
	getAge : function () {
		var b = this.birth;
		var fn = function() {
			return new Date().getFullYear() - this.birth;
		};
		return fn();
	}
};
console.log(obj.getAge());

console.log('使用箭头函数的this');
var obj = {
	birth : 1990,
	getAge : function () {
		var b = this.birth;
		var fn = () => new Date().getFullYear() - this.birth;
		return fn();
	}
};
console.log(obj.getAge());

