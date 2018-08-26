$(function () {
    var skip = 1;
    var range = 20;             //距下边界长度/单位px
    var maxnum = 2;            //设置加载最多次数
    var num = 1;
    var totalheight = 0;
    //主体元素

    $(window).scroll(function () {
        var showHtml = "";
        var scrollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)
        totalheight = parseFloat($(window).height()) + parseFloat(scrollPos);
        if (($(document).height() - range) <= totalheight && num != maxnum) {
            $.ajax({
                url: "/classify/postAjax",
                type: 'post',
                dataType: 'json',
                data: {
                    skip: skip
                },
                success: function (data) {
                    for (var o of data) {
                        showHtml += "<div class=\"div1\">\n" +
                            "<img src=" + o.img + " alt=\"\">\n" +
                            "<span>" + o.name + "</span>\n" +
                            "<span>" + o.price + "</span>\n" +
                            "</div>";
                    }
                    $('#showNextPage').append(showHtml);
                    num++;
                },
                error: function (error) {
                    console.log(error);
                }
            });
            skip += skip;
        }
        // else if (($(document).height() - range) >= totalheight && num == maxnum) {
        //     alert("已经到底了，不要再刷新啦！");
        // }
    });
});