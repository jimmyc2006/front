// 面向对象编程
var Student = {
	name : 'Robot',
	height : 1.2,
	run : function() {
		console.log(this.name + ' is running');
	}
};

var xiaoming = {
	name: '小明'
};

xiaoming.__proto__ = Student;

console.log('xiaoming.name:' + xiaoming.name);
console.log('xiaoming.run():' + xiaoming.run());

Student.run = function() {
	console.log('xxxxxxxxxx');
}
console.log(xiaoming.run());

// js中所谓的继承关系不过是把一个对象的原型指向另一个对象而已
// 在编写js代码时，不要使用__proto__
var Student = {
	name: 'Robot',
	height: 1.2,
	run: function () {
		console.log(this.name + ' is running...');
	}
};

function createStudent(name) {
	var s = Object.create(Student);
	s.name = name;
	return s;
}

var xiaoming =createStudent('小明');
console.log(xiaoming.run());
console.log(xiaoming.__proto__ === Student);

// 创建对象
var arr = [1, 2, 3];
// 原型链是： arr ---> Array.prototype ---> Object.prototype ---> null
function foo() {
	return 0;
}
// foo ---> Function.prototype ---> Object.prototype ---> null