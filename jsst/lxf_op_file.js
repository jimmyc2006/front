// 操作文件,在html表单中，可以上传文件的唯一控件就是<input type="file">
// 当一个表单包含<input type="file">时，表单的enctype必须指定为multipart/form-data,method必须指定为post
// 处于安全考虑，浏览器只允许用户点击<input type="file">来选择本地文件，用js的<input type="file">
// 的value赋值是没有任何效果的，当用户选择了上传某个文件后，js也无法获得该文件的真实路径
// 通常，上传的文件都由后台服务器处理，js可以在提交表单时对文件扩展名做检查，以便防止用户上传无效的文件：
function checkTest() {
	var f = document.getElementById('test-file-upload');
	var filename = f.value;
	if (!filename || !(
				filename.toLowerCase().endsWith('.jpg') || 
				filename.toLowerCase().endsWith('.png') ||
				filename.toLowerCase().endsWith('.gif')
			)) {
		alert('Can only upload image file.');
		return false;
	} else {
		alert(filename + ' is ok');
	}
	return true;
}

// 下面的内容没有经过测试
// file api
// HTML5的File API提供了File和FileReader两个主要对象，可以获得文件信息并读取文件
var fileInput = document.getElementById('test-image-file'),
info = document.getElementById('test-file-info'),
preview = document.getElementById('test-image-preview');
// 监听change事件
fileInput.addEventListener('change', function() {
	// 清楚背景图片
	preview.style.backgroundImage = '';
	// 检查文件是否选择
	if (!fileInput.value) {
		info.innerHTML = "没有选择文件";
		return;
	}
	// 获取File引用
	var file = fileInput.files[0];
	// 获取File信息
	info.innerHTML = 	'文件: ' + file.name + '<br>' +
						'大小: ' + file.size + '<br>' + 
						'修改: ' + file.lastModifiedDate;
	if (file.type !== 'iamge/jpeg' && file.type !== 'image/PNG' && 
		file.type !== 'image/gif') {
		alert('不是有效的图片文件');
		return;
	}
	// 读取文件
	var reader = new FileReader();
	reader.onload = function(e) {
		var data = e.target.result;
		preview.style.backgroundImage = 'url(' + data + ')';
	};
	reader.readAsDataURL(file);
});






