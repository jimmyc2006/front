// js中创建正则的两种方法,转义字符有区别
var rel1 = /ABC\-001/;
var rel2 = new RegExp('ABC\\-001');
console.log(rel1);
console.log(rel2);

// 如何判断匹配
var re = /^\d{3}\-\d{3,8}$/;	// 注意这里,号后面不能有空格,否则会导致失败
console.log('正则的test方法:' + re);
console.log(re.test('010-12345'));
console.log(re.test('010-1234x'));
console.log(re.test('010 12345'));

console.log('切分字符串');
var arr = 'a b   c'.split(' ');
console.log(arr);
var arr2 = 'a b   c'.split(/\s+/);	// 注意这里不是字符串表示的正则
console.log(arr2);

// 分组
console.log('---分组---');
var re = /^(\d{3})-(\d{3,8})$/;
var res1 = re.exec('010-12345');
var res2 = re.exec('010 12345');
console.log(res1);
console.log(res2);

// 全局搜索
console.log('---全局搜索---');
var r1 = /test/g;
var r2 = new RegExp('test', 'g');
var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re = /[a-zA-Z]+Script/g;

// 使用全局匹配
re.exec(s);
console.log(re.lastIndex);