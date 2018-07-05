<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>标题</title>
	</head>
	<body>
		<input type="text" id="email">
		<br>
		<!-- html标签 -->
		<input type="date" value="2015-07-01">
		<br>
		<input type="datetime-local" value="2015-07-01T02:03:04">
		<br>
		<input type="color" value="#ff0000">
		<br>
		-----------------------提交表单1-------------------<br>
		<form id="test-form">
    		<input type="text" name="test">
    		<button type="button" onclick="doSubmitForm()">Submit</button>
		</form>
		-----------------------提交表单2-------------------<br>
		<form id="test-form2" onsubmit="return checkForm()">
			<input type="text" name="test">
			<button type="submit">Submit</button>
		</form>
		-----------------------提交表单3-------------------<br>
		<form id="login-form" method="post" onsubmit="return checkForm()">
			<input type="text" id="username" name="username">
			<input type="password" id="password">
			<input type="hidden" id="md5-password" name="password">
			<button type="submit">Submit</button>
		</form>
	</body>
	<script src="res/jquery-1.11.0.min.js"></script>
	<script src="2.js"></script>
</html>
