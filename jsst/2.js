// // Promise
// function callback() {
// 	console.log('Done');
// }

// console.log('before setTimeout()');
// setTimeout(callback, 1000);
// console.log('after setTimeout');

// // 这种“承诺将来会执行”的对象在JavaScript中称为Promise对象
// new Promise(function () {});

// 这个跟java

// console.log('支持Promise!');
// function log(mes) {
// 	console.log(mes);
// }

// function test(resolve, reject) {
// 	var timeOut = Math.random() * 2;
// 	log('set timeout to:' + timeOut + ' senconds.');
// 	setTimeout(function (){
// 		if(timeOut < 1) {
// 			log('call resulve()...');
// 			resolve('200 OK');
// 		} else {
// 			log('call reject()...');
// 			reject('timeout in ' + timeOut + ' seconds.');
// 		}
// 	}, timeOut * 1000);
// }

// var p1 = new Promise(test);
// var p2 = p1.then(function (result) {
// 	console.log('成功: ' + result);
// });
// var p3 = p2.catch(function (reason) {
// 	console.log('失败: ' + reason);
// });

// // 可以串联起来，以便代码简化
// new Promise(test).then(function (result){
// 	console.log('成功: ' + result);
// }).catch(function (reason){
// 	console.log('失败: ' + reason);
// });

// 测试一下Promise是如何异步执行的
// var logging = document.getElementById('test-promise-log');
// while (logging.children.length > 1) {
// 	logging.removeChild(logging.children[logging.children.length - 1]);
// }

// // 输出log到页面
// function log(s) {
// 	var p = document.createElement('p');
// 	p.innerHTML = s;
// 	logging.appendChild(p);
// }

// new Promise(function (resolve, reject) {
// 	log('start new Promise...');
// 	var timeOut = Math.random() * 2;
// 	log('set  timeout to:' + timeOut + ' seconds.');
// 	setTimeout(function () {
// 		if (timeOut < 1) {
// 			log('call resolve()...');
// 			resolve('200 OK');
// 		} else {
// 			log('call reject()...');
// 			reject('timeout in ' + timeOut + ' seconds.');
// 		}
// 	}, timeOut * 1000);
// }).then(function(r) {
// 	log('Done: ' + r);
// }).catch(function() {
// 	log('Failed: ' + reason);
// });
// 可见Promise最大的好处是在异步执行的流程中,把执行代码和处理结果的代码清晰地分离了
// Promise还可以做更多的事情，比如若干个异步任务串联执行
// job1.then(job2).then(job3).catch(handleError);

// 演示代码
var logging = document.getElementById('test-promise-log');
while (logging.children.length > 1) {
	logging.removeChild(logging.children[logging.children.length - 1]);
}

function log(s) {
	var p = document.createElement('p');
	p.innerHTML = s;
	logging.appendChild(p);
}
// 0.5秒后返回input * input的计算结果
function multiply(input) {
	return new Promise(function (resolve, reject) {
		log('calculating ' + input + ' x ' + input + '...');
		setTimeout(resolve, 500, input * input);
	});
}
// 0.5秒后返回input+input的计算结果:
function add(input) {
	return new Promise(function (resolve, reject) {
		log('calculation ' + input + ' + ' + input + '...');
		setTimeout(resolve, 500, input + input);
	});
}

var p = new Promise(function (resolve, reject){
	log('start new Promise...');
	resolve(123);
});
// p.then(multiply).then(add).then(multiply).then(add).then(function (result) {
// 	log('Got value: ' + result);
// });

