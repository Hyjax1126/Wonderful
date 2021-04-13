// 自定义圆角单选按钮
$(function () {
    $(".radioBtn:not(.radioBtn.disabled)").bind("click", function () {
        var b = $(this).hasClass("selected");
        $(this).parent().children().removeClass("selected");
        // $(".radioBtn").removeClass("selected");
        if (b) {
            $(this).removeClass("selected");
        } else {
            $(this).addClass("selected");
        }
    });
});
// 自定义圆角单选按钮
// 弹小窗
function fly(text) {
    var id = Math.floor(Math.random() * 1000);
    // console.log(e);
    $("body").before("<div id='id" + id + "' class='flyMsg'>" + text + "</div>")
    $("#id" + id).addClass("fly");
    setTimeout(function () {
        $("#id" + id).remove();
    }, 3000)

    // $("#id" + id).animate({top:10,opacity:0},1000,function(){
    //     $("#id" + id).remove();
    // })
}

$(function () {
    //加购弹窗
    $(function () {
        $(".joinBuyList").bind("click", function () {
            fly("加入购物车成功");
        });
    });
});// 弹小窗

// 登陆事件
$(function(){
    $("#btnLogin").bind("click",function(){
        $(".checkCodeDiv").addClass("open");
    });
});// 登陆事件
