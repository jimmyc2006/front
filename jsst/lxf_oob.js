console.log('构造函数');
// 构造函数
// 除了直接用{...}创建一个对象外，JavaScript还可以用一种构造函数的方法来创建对象。
// 它的用法是，先定义一个构造函数:
function Student(name) {
	this.name = name;
	this.hello = function () {
		console.log('Hello, ' + this.name + '!');
	}
}
// 这是一个普通函数，但是在js中可以用关键字new来调用这个函数
var xiaoming_2 = new Student('小明');
console.log(xiaoming_2.name);
console.log(xiaoming_2.hello());

// xiaoming_2 ---> Student.prototype ---> Object.prototype ---> null
// 如果再创建xiaohong,xiaojun那么他们的指向是一样的
console.log(xiaoming_2.constructor === Student.prototype.constructor);
console.log(Student.prototype.constructor === Student);
console.log(Object.getPrototypeOf(xiaoming_2) === Student.prototype);
console.log(xiaoming_2 instanceof Student);




