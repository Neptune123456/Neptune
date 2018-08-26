//验证邮箱
function check_email() {
    var email = document.getElementById("email").value;
    var regEmail = /^\w+@\w+((\.\w+)+)$/;
    if (email == "" || email.trim() == "") {
        document.getElementById("err_email").innerHTML = "请输入邮箱";
        return false;
    } else if (!regEmail.test(email)) {
        document.getElementById("err_email").innerHTML = "请输入正确邮箱";
        return false;
    } else {
        document.getElementById("err_email").innerHTML = "ok!!!";
        return true;
    }
}


//验证密码
function check_pwd() {
    var pwd = document.getElementById("pwd").value;
    var regPwd = /^\w{4,10}$/;
    if (pwd == "" || pwd.trim() == "") {
        document.getElementById("err_pwd").innerHTML = "请输入密码";
        return false;
    } else if (!regPwd.test(pwd)) {
        document.getElementById("err_pwd").innerHTML = "请输入4-10位数字或字母组成正确密码";
        return false;
    } else {
        document.getElementById("err_pwd").innerHTML = "ok!!!";
        return true;
    }
}
//确认密码
function check_pwd1() {
    var pwd = document.getElementById("pwd").value;
    var pwd1 = document.getElementById("pwd1").value;
    if (pwd1 == "" || pwd1.trim() == "") {
        document.getElementById("err_pwd1").innerHTML = "请输入密码";
        return false;
    } else if (pwd1 != pwd) {
        document.getElementById("err_pwd1").innerHTML = "两次输入密码不一致";
        return false;
    } else {
        document.getElementById("err_pwd1").innerHTML = "ok!!!";
        return true;
    }
}


//验证用户名
function check_name() {
    var userName = document.getElementById("name").value;
    var regName = /[a-zA-Z]\w{4,16}/
    if (userName == "" || userName.trim() == "") {
        document.getElementById("err_name").innerHTML = "请输入用户名";
        return false;
    } else if (!regName.test(userName)) {
        document.getElementById("err_name").innerHTML = "由英文字母和数字组成的4-16位字符，以字母开头";
        return false;
    } else {
        document.getElementById("err_name").innerHTML = "ok!!!";
        return true;
    }
}
//验证邮编
function check_postcode() {
    var postcode = document.getElementById("postcode").value;
    var regPostcode = /^\w{4,10}$/;
    if (postcode == "" || postcode.trim() == "") {
        document.getElementById("err_postcode").innerHTML = "请输入邮编";
        return false;
    } else if (!regPostcode.test(postcode)) {
        document.getElementById("err_postcode").innerHTML = "请输入正确邮编";
        return false;
    } else {
        document.getElementById("err_postcode").innerHTML = "ok!!!";
        return true;
    }
}

//验证手机号
function check_number() {
    var number = document.getElementById("number").value;
    var regNumber = /[13,15,18]\d{9}/;
    if (number == "" || number.trim() == "") {
        document.getElementById("err_number").innerHTML = "请输入手机号";
        return false;
    } else if (!regNumber.test(number)) {
        document.getElementById("err_number").innerHTML = "请输入正确手机号";
        return false;
    } else {
        document.getElementById("err_number").innerHTML = "ok!!!";
        return true;
    }
}
