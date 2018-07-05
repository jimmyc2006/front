// var js = document.getElementById('test-js');
// js.innerText = 'JavaScript';
// js.style.color = '#ff0000';
// js.style.fontWeight = 'bold';

// 插入DOM
// 如果节点是空的，那么直接使用innerHTML就可以修改DOM节点的内容，相当于插入了新的节点
// 如果不是空的，就会有问题，因为innerHTML会替换掉原来的内容
// 使用appendChild
// var js = document.getElementById("js");
// var list = document.getElementById("list");
// // 直接添加会造成之前的被删除
// list.appendChild(js);

// // 新创建一个节点并添加进去
// var haskell = document.createElement('p');
// haskell.id = 'Haskell';
// haskell.innerText = 'Haskell';
// list.appendChild(haskell);

// // 动态给文档添加新的CSS
// var d = document.createElement('style');
// d.setAttribute('type', 'text/css');
// d.innerHTML = 'p { color: red}';
// document.getElementsByTagName('head')[0].appendChild(d);

// insertBefore
// 如果我们要把子节点插入到指定的位置，可以使用parentElement.insertBefore(newElement, referenceElement)
// var list = document.getElementById('list'),
// 	ref = document.getElementById('python'),
// 	haskell = document.createElement('p');
// haskell.id = 'haskell';
// haskell.innerText = 'Haskell';
// list.insertBefore(haskell, ref);
// 可见，使用insertBefore重点是要拿到一个“参考子节点”,很多时候，需要循环一个父节点的所有子节点,
// 可以通过迭代children属性实现
// var i, c,
// 	list = document.getElementById('list');
// var texts = [],
// 	m = {};
// for (i = 0; i < list.childNodes.length; i++) {
// 	c = list.childNodes[i];
// 	var t = c.innerText;
// 	texts.push(t);
// 	m[t] = c;
// }
// texts.sort();
// console.log(texts);
// for(txt in texts) {
// 	console.log(texts[txt]);
// 	list.appendChild(m[texts[txt]]);
// }

// 插入DOM习题
var test_list = document.getElementById('test-list');
var texts = [],
	m = {};
for (i = 0; i < test_list.children.length; i++) {
	var txt = test_list.children[i].innerText;
	texts.push(txt);
	m[txt] = test_list.children[i];
}
texts.sort();
for (index in texts) {
	test_list.appendChild(m[texts[index]]);
}