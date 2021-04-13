var b = false;
$(function () {
    // 验证码滑块事件
    //确定点击
    $("input[type='range']").bind("mousedown", function () {
        $("input[type='range']").addClass("changeLight");
        b = true;
    });
    $("input[type='range']").bind("touchstart", function () {
        $("input[type='range']").addClass("changeLight");
        b = true;
    });
    //滑动
    $("input[type='range']").bind("mousemove", function () {
        $(".outDiv").css("left", $("input[type='range']").val() + "%");
    });
    $("input[type='range']").bind("touchmove", function () {
        $(".outDiv").css("left", $("input[type='range']").val() + "%");
    });

    //用来写验证的地方
    function isValid(whatType) {
        var validResult = {valid: false, result: ''};
        if (whatType == "login") {
            //登陆事件(获取账号密码进行判断)
            //登陆成功
            //获取用户昵称
            var nickName = "快乐的咸鱼";
            validResult.valid = true;
            validResult.result = '欢迎您：' + nickName;
        }else if(whatType == "submitOrder"){
            validResult.valid = true;
            validResult.result = '支付成功！';
        }
        return validResult;
    }

    //松手
    function codeCheck(whatType) {
        if (b) {
            var validResult;
            var temp = $("input[type='range']").val();
            if (temp > 54 && temp < 60) {
                //验证通过
                $(".checkCodeDiv").removeClass("open");
                $(".outDiv").css("left", "10%")
                $("input[type='range']").val(10);

                //判断登陆是否成功
                validResult = isValid(whatType);
            } else {
                $("input[type='range']").val(0);
                $(".outDiv").css("left", "0");
            }
            $("input[type='range']").removeClass("changeLight");
            b = false;
            return validResult;
        }
    }

    //一种判断一种方法，这个是登陆的
    function loginResult() {
        var validResult = codeCheck("login");
        //如果返回的对象为空说明验证失败，那么不进行操作，如果不为空，进行转圈之后再判断成功与否
        if(validResult){
            var loadTime = Math.floor(Math.random() * 5000);
            $("#backDiv").addClass("show");
            setTimeout(function () {
                $("#backDiv").removeClass("show");
                if (validResult.valid) {
                    //登陆成功关闭登陆框并更新登陆状态
                } else {
                    //登陆失败保留登陆框并将焦点移动至密码框
                }
                fly(validResult.result);
            }, loadTime);
        }

    }

    $("input[type='range']").bind("mouseup", loginResult);

    $("input[type='range']").bind("touchend", loginResult);

    // // 点击边界消失事件
    // $(".checkCodeDiv").click(function(){
    //     // $(".checkCodeDiv").removeClass("open");
    // });
    // $(".checkCode").click(function(e){
    //     e.preventDefault();
    // });
    // // 点击边界消失事件
    $(document).click(function (e) {
        var ele = e ? e.target : window.event.srcElement;
        if ($(ele).hasClass("checkCodeDiv")) {
            $(".checkCodeDiv").removeClass("open");
            $(".outDiv").css("left", "10%")
            $("input[type='range']").val(10);
        }
    })
})