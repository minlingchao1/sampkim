function showHdPop(e) {
    hideHdPop();
    $(e);
    $("#hdmask").show(),
    $(e).show()
}
function hideHdPop() {
    $("#hdmask").hide(),
    $(".hdpop").hide()
}
function showRegBox(e) {
    "block" != $("#hdmask").css("display") && "block" != $("#pop_video").css("display") && "block" != $("#mask").css("display") && (e || 1 == showReg) && showHdPop("#regpop")
}
$(function() {
    function e(e) {
        for (var n in e) {
            var t = document.createElement("img");
            t.src = e[n]
        }
    }
    nie.config.copyRight.setNormal(),
    $(".slide-icons a").hover(function() {
        var e = $(this).find(".panel");
        e.find("span").stop().animate({
            top: "-40px"
        },
        100,
        function() {
            e.find("span").css("top", "30px").animate({
                top: "0"
            },
            200)
        }),
        e.next("p").css("color", "#c2a66a")
    },
    function() {
        $(".slide-icons p").css("color", "#686868")
    });
    var n = 1;
    $(".block3 ul li").click(function() {
        if (1 == window.mdslide || $(this).hasClass("current")) return ! 1;
        var e = $(this).index();
        n = e,
        window.mdslide = !0,
        $(".block3 ul li.current").removeClass("current");
        var t = $(this);
        return t.addClass("current"),
        $(".block3 ul li").find("p").hide(),
        setTimeout(function() {
            t.find("p").show()
        },
        400),
        setTimeout(function() {
            window.mdslide = !1
        },
        900),
        !1
    });
    var t = $(".block3 ul li").length,
    i = setInterval(function() {
        $(".block3 ul li").eq(n).click(),
        n += 1,
        n == t && (n = 0)
    },
    4e3);
    $(".block3 ul").hover(function() {
        clearInterval(i)
    },
    function() {
        i = setInterval(function() {
            $(".block3 ul li").eq(n).click(),
            n += 1,
            n == t && (n = 0)
        },
        4e3)
    }),
    $(".slide-toggle").click(function() {
        var e = $(this);
        e.hasClass("open") ? ($(".slidebar").animate({
            right: "0"
        },
        400), e.find("span").html("\u6536\u8d77"), e.removeClass("open")) : ($(".slidebar").animate({
            right: "-154px"
        },
        400), e.find("span").html("\u5c55\u5f00"), e.addClass("open"))
    }),
    $(".slide-top").bind("click",
    function() {
        $("body,html").animate({
            scrollTop: 0
        },
        500)
    });
    var s = {
        yrm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/yr-m_08d0fd4.png",
        yrf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/yr-f_4bd88db.png",
        mzm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/mz-m_b24abd5.png",
        mzf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/mz-f_35f3b43.png",
        duanhenm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/duanhen-m_55233cf.png",
        duanhenf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/duanhen-f_800a6ac.png",
        cangrenm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/cangren-m_b066ce8.png",
        cangrenf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/cangren-f_b1bf2c1.png",
        ssm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/ss-m_5592651.png",
        ssf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/ss-f_3eef411.png",
        hhm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/hh-m_db51ec9.png",
        hhf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/hh-f_6d826bf.png",
        ysm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/ys-m_cf88d4e.png",
        ysf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/ys-f_f6a2974.png",
        xkm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/xk-m_aa12c8c.png",
        xkf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/xk-f_f56940f.png",
        fsm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/fs-m_f3b8d27.png",
        fsf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/fs-f_cbf8150.png",
        yishim: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/yishi-m_1701408.png",
        yishif: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/yishi-f_39d67e0.png",
        yrm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/yr-m_08d0fd4.png",
        yrf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/yr-f_4bd88db.png",
        jgm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/jingang-m_68f061b.png",
        jgf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/jingang-f_443a60c.png",
        zhm: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/zhanhun-m_7062e61.png",
        zhf: "http://res.qn.netease.com/pc/fab/20160803145343/img/job/zhanhun-f_a1b730c.png"
    };
    e(s)
}),
nie.define("common",
function() {
    function e(e) {
        var n = nie.require("nie.util.videoV2"),
        t = '<div id="pop_video" style="display:block;height:394px"><div id="pop_vv" style="height:394px;width:700px;margin:0 auto"></div><a id="close_pv" href="javascript:void(0)" class="btn_close">x</a></div>';
        _$.showwin("pop_video", {
            html: t,
            open: function() {
                var t = n({
                    fat: "#pop_vv",
                    width: "700",
                    height: "394",
                    movieUrl: e
                });
                setTimeout(function() {
                    t.play()
                },
                1e3)
            },
            close: function() {
                $("#pop_vv").html("")
            }
        })
    }
    var n = nie.require("nie.util.shareV5"),
    t = $("#share_pic").attr("src"),
    i = $("#share_title").html(),
    s = $("#share_desc").html();
    n({
        fat: "#Mshare",
        type: 2,
        title: i,
        img: t,
        content: s
    });
    var o = nie.require("RegBox");
    o.init("#f1", window.promark || ""),
    $(".video").click(function() {
        return e($(this).attr("mp4")),
        !1
    })
});