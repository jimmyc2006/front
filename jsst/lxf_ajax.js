// AJAX
// 在现代浏览器上写AJAX主要依靠XMLHttpRequest对象
// function success(text) {
// 	var textarea = document.getElementById('test-response-text');
// 	textarea.value = text;
// }

// function fail(code) {
// 	var textarea = document.getElementById('test-response-text');
// 	textarea.value - 'Error code: ' + code;
// }

// 新建XMLHttpRequest对象

// var request;
// if (window.XMLHttpRequest) {
//  	request = new XMLHttpRequest();
// } else {
// 	request = new ActiveXObject('Microsoft.XMLHTTP');
// }

// request.onreadystatechange = function () {
// 	if (request.readyState === 4) {	// 成功完成
// 		// 判断响应结果:
// 		if (request.status === 200) {
// 			// 成功，通过responseText拿到响应的文本
// 			return success(request.responseText);
// 		} else {
// 			return fail(request.status);
// 		}
// 	} else {
// 		// HTTP请求还在继续
// 	}
// };
// 默认情况下，js在发送AJAX请求时，URL的域名必须和当前页面完全一致
// 完全一致：域名相同，协议相同，端口相同
// JS请求外域URL的方法:
// 1. 通过Flash插件发送
// 2. 通过在同源域名下架设一个代理服务器来转发
// 3. JSONP,只能用GET请求，要求返回JS，实际上是利用了浏览器允许跨域引用
// request.open('GET', '3.html');
// request.send();

// alert('请求已发送，请等待响应...');

// JSONP通常以函数调用的形式返回，例如，返回JAVAScript内容如下:foo('data');
function refreshPrice(data) {
	var p = document.getElementById('test-jsonp');
	p.innerHTML = '当前价格: ' + 
		data['0000001'].name + ': ' +
		data['0000001'].price + '; ' +
		data['1399001'].name + ': ' +
		data['1399001'].price; 
}

function getPrice() {
	var js = document.createElement('script'),
		head = document.getElementsByTagName('head')[0];
	js.src = 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
	head.appendChild(js);
}

getPrice();

// 跨域能否成功，取决于对方服务器是否愿意给你设置一个正确的Access-Control-Allow-Origin




