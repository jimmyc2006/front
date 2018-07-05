// // 删除一个DOM节点: 先获得该节点本身以及它的父节点
// // 拿到要删除的节点
// var self = document.getElementById('to-be-removed');
// // 拿到父节点
// var parent = self.parentElement;
// // 删除
// var removed = parent.removeChild(self);
// removed === self;

// children属性是一个只读属性，并且它在子节点变化时会实时更新
var parent = document.getElementById('parent');
console.log(parent);
parent.removeChild(parent.children[0]);
// parent.removeChild(parent.children[1]); // 这里会报错，因为删除的时候是动态的，删除了一个以后，就没有1了

var test_list = document.getElementById("test-list");
var to_be_removed = [];
for(var i = 0; i < test_list.children.length; i++) {
	if (test_list.children[i].innerText != 'JavaScript' && 
		test_list.children[i].innerText != 'HTML' &&
		test_list.children[i].innerText != 'CSS') {
		to_be_removed.push(test_list.children[i]);
	}
}
for (index in to_be_removed) {
	test_list.removeChild(to_be_removed[index]);
}