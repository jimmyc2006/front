// 序列化
var xiaoming = {
	name : '小明',
	age : 14,
	gender : true,
	height : 1.65,
	grade : null,
	'middle-school' : '\"W3C\" Middle School',
	skills : ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(xiaoming);
console.log(s);
console.log(JSON.stringify(xiaoming, null, '    '));

// 指定要输出的属性
console.log(JSON.stringify(xiaoming, ['name', 'skills'], '    '));

// 还可以传入函数，这样对象的每个键值对都会被函数先处理
function convert(key, value) {
	if (typeof value === 'string') {
		return value.toUpperCase();
	}
	return value;
}

console.log(JSON.stringify(xiaoming, convert, '    '));

// 使用toJSON方法
console.log('使用toJSON方法');
var xiaoming2 = {
	name : '小明',
	age : 14,
	gender : true,
	height : 1.65,
	grade : null,
	'middle-school' : '\"W3C\" Middle School',
	skills : ['JavaScript', 'Java', 'Python', 'Lisp'],
	toJSON : function () {
		return {
			'Name' : this.name,
			'Age' : this.age
		};
	}
};
console.log(JSON.stringify(xiaoming2));

// 反序列化
console.log('反序列化');
console.log(JSON.parse('[1, 2, 3, true]'));
console.log(JSON.parse('{"name":"小明","age":14}'));
console.log(JSON.parse('true'));
console.log(JSON.parse('123.45'));

// JSON.parse()还可以接收一个函数，用来转换解析出的属性:
console.log('parse的时候可以使用函数');
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value){
	if (key === 'name') {
		return value + '同学';
	}
	return value;
});
console.log(JSON.stringify(obj));

// 练习
var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast' + 
	'%20where%20woeid%20%3D%202151330&format=json';
$.getJSON(url, function(data) {
	console.log(typeof data);
	// 获取结果
	var city = data.query.results.channel.location.city;
	var forecast = data.query.results.channel.item.forecast;
	var result = {
		city : city,
		forecast : forecast
	};
	console.log(JSON.stringify(result, null, '    '));

});





