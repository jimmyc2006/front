// js的世界里，一切都是对象
console.log(typeof 123);
console.log(typeof NaN);
console.log(typeof 'str');
console.log(typeof true);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});

// 包装对象,他们的类型是Object,所以包装对象和原始值用===比较会返回false
var n = new Number(123);
var b = new Boolean(true);
var s = new String('str');
console.log(typeof new Number(123));
// 一般情况下不要使用包装对象

// 如果再使用Number/Boolean/String时，
// 没有写new，会被当作普通函数，把任何类型的数据转换为number/boolean和string类
var n = Number('123'); // 123,相当于parseInt()或parseFloat()
console.log(typeof n);

// Date
// 在js中，Date对象用来表示日期和时间
// 是从客户端的浏览器中获取的本机操作系统时间
var now = new Date();
console.log('date:' + now);
console.log('date.getfullYear():' + now.getFullYear());
console.log('date.getMonth():' + now.getMonth());
console.log('date.getDate():' + now.getDate());
console.log('date.getDay():' + now.getDay());
console.log('date.getHours():' + now.getHours());
console.log('date.getMinutes():' + now.getMinutes());
console.log('date.getSeconds():' + now.getSeconds());
console.log('date.getMilliseconds():' + now.getMilliseconds());
console.log('date..getTime():' + now.getTime());

// 创建一个指定日期和时间的Date对象
var d = new Date(2015, 5, 19, 20, 15, 30, 123);
console.log(d);
// 使用字符串创建Date
var dt = Date.parse('2015-06-24T19:49:22.875+08:00');
console.log(dt);
// 注意dt是一个时间戳，需要将时间戳转为Date
var d = new Date(dt);
console.log(d);
console.log(d.getMonth());

// 时区相关
console.log('时区相关');
var d = new Date(1435146562875);
console.log(d.toLocaleString());
console.log(d.toUTCString());

// 获取当前时间戳
if(Date.now) {
	console.log('new');
	console.log(Date.now());
} else {
	console.log(new Date().getTime());
}

var today = new Date();
if (today.getMonth() === 6 && today.getDate() === 2) {
	alert('DXXXXXX');
}








