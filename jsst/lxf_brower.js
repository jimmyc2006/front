// window对象不但充当全局作用域，而且表示浏览器窗口
// 可以调整浏览器的大小试试
console.log('window inner size:' + window.innerWidth + ' x ' + window.innerHeight);

// navigator
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.language);
console.log(navigator.platform);
console.log(navigator.userAgent);

// 利用js对不存在属性返回undefined的特性，直接用短路运算符||计算
var width = window.innerWidth || document.body.clientWidth;
console.log(width);

// screen表示屏幕的信息
console.log('Screen size = ' + screen.width + ' x ' + screen.height);

// location 对象表示当前页面的url信息。
// location.protocol
console.log(location.protocol);
// location.host
console.log(location.host);
// location.port
console.log(location.port);
// location.pathname
console.log(location.pathname);
// location.search
console.log(location.search);
// location.hash
console.log(location.hash);
// 加载一个新页面，location.assign()
// 重新加载当前页面location.reload()
// if (confirm('重新加载当前页' + location.href + '?')) {
// 	// location.reload();
// } else {
// 	location.assign('/');
// }

// document表示当前页面，由于html再浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点
// title可以动态改变
document.title = '努力学习JS';
// 最常用的查找是根据ID和Tag Name
var i, s, menu, drinks;
var menu = document.getElementById('drink-menu');
var drinks = document.getElementsByTagName('dt');
console.log(menu.tagName); 
s = '提供的饮料有：';
for (i = 0; i < drinks.length; i++) {
	s = s + drinks[i].innerHTML + ',';
}
console.log(s);

// js可以通过document.cookie读取到当前页面的Cookie
console.log(document.cookie);
// 为了安全，服务器端再设置Cookie时，应该始终坚持使用httpOnly

// history,不要再使用这个对象了




