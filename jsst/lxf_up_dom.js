// DOM操作，更新，遍历，添加，删除
// 拿到DOM节点的方法：
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

// 要精确地选择DOM，可以先定位父节点，再从父节点开始选择，以缩小范围

// // 返回ID为‘test'的节点
// var test = document.getElementById('test');
// // 先定位ID为‘test-table'的节点，再返回其内部所有tr节点
// var trs = document.getElementById('test-table').getElementsByTagName('tr');
// // 先定位ID为‘test-div’的节点，再返回其内部所有class包含red的节点
// var reds = document.getElementById('test-div').getElementsByClassName('red');
// // 获取节点test下的所有直属子节点
// var cs = test.children;

// // 获取节点test下第一个/最后一个子节点
// var first = test.firstElementChild;
// var last = test.lastElementChild;

// // 第二种方法是使用querySelector()和querySelectorAll()
// // 通过querySelector获取ID为q1的节点
// var q1 = document.querySelector('#q1');
// // 通过querySelectorAll获取q1节点内符合条件的所有节点
// var ps = q1.querySelectorAll('div.highlighted > p');

//  选择<p>JavaScript</p>
var js = document.getElementById('test-p');
console.log(js);
var arr = document.getElementsByClassName('c-red c-green')[0].getElementsByTagName('p');
console.log(arr);
var haskell = document.getElementsByClassName('c-green')[1].getElementsByTagName('p')[1];
console.log(haskell);

// 更新DOM
// 一种是修改innerHTML属性，这个方式非常强大，
// 不但可以修改一个DOM节点的文本内容，还可以直接通过HTML片段修改DOM节点内部的子树
var p = document.getElementById('p-id');
p.innerHTML = 'ABC';
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// 第二种是修改innerText或textContent属性，这样可以自动对字符串进行HTML编码，保证无法设置任何HTML标签
p.innerText = '<script>alert("Hi")</script>';
// 修改CSS
p.style.color = "#ff0000";
p.style.fontSize = '20px';
p.style.paddingTop = '2em';





