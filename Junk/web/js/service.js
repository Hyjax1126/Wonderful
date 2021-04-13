$(function () {

    // 用户注册时验证表单控件
    function checkUserResigter() {
        var b = true;
        return b;
    }

    // 用户注册
    $("#userRegister").bind("click", function () {
        if(checkUserResigter()){
            var userTemp = JSON.parse(localStorage.getItem('user'));
            var level = 1;
            if(!userTemp){
                userTemp = [{
                    id:1,
                    userName:'localadmin',
                    password:'admin123',
                    email:'1209762153@qq.com',
                    phoneNumber:17770427261
                }];
            }
            var user = {
                id:parseInt(userTemp[userTemp.length - 1]["id"]) + 1,
                userName:$("input[name='userName']").val(),
                nickName:$("input[name='nickName']").val(),
                password:$("input[name='password']").val(),
                email:$("input[name='email']").val(),
                phoneNumber:$("input[name='phoneNumber']").val(),
            };
            userTemp.push(user);
            localStorage.setItem('user',JSON.stringify(userTemp));
        }
    });

});