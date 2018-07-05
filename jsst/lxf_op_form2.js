function checkRegisterForm() {
	var username = document.getElementById("username");
	var username_value = username.value;
	var password = document.getElementById("password");
	var password_value = password.value;
	var password_2 = document.getElementById("password-2");
	var password_2_value = password_2.value;
	var test_error = document.getElementById("test-error");
	if (username_value && /^[0-9a-zA-Z]{3,10}$/.test(username_value)) {
		if (password_value && /.{6,12}/.test(password_value)) {
			if (password_2_value && /.{6,12}/.test(password_2_value)) {
				if (password_value === password_2_value) {
					return true;
				} else {
					test_error.innerText = "两次密码不一致";
					return false;
				}
			} else {
				test_error.innerText = "确认密码不合法";
				return false;
			}
		} else {
			test_error.innerText = "密码不合法";
			return false;
		}
	} else {
		test_error.innerText = "用户名不合法";
		return false;
	}

}