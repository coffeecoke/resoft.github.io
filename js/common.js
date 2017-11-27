
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    console.log(r);
    if(r!=null)return unescape(r[2]); return null;
}


$(function(){


   // $(".product-menue").load("./menue.html",function(){});
    //�˵��۵�
   /* $(".product-menue").on("click",".list-1",function(){

        $(this).find(".ul-2").slideDown().end().siblings().find(".ul-2").slideUp();
        $(this).addClass("on").siblings().removeClass("on");

    });
    $(".product-menue").on("click",".list-2",function(){
        $(this).siblings().removeClass("ac");
        $(this).addClass("ac").parents(".list-1").siblings().find(".list-2").removeClass("ac");
        // $(this).parent(".ul-2").siblings(".span-1").click();
    });*/
    //load
    $(".public-top").load("./public_top.html",function(){
       var classN =  GetQueryString("on");

            $(".public-top").find("."+classN).addClass("on").siblings().removeClass("on");

    });
    $(".rx-footer").load("./public_footer.html",function(){

    });



    //返回顶部
    function scrolltop () {
        var winHeight = $(window).height();
        var scrollBtn = $('<div class="scroll_button" style="display: none"/></div>');
        var scrollptop_timer=null;
        var istop=true;
        scrollBtn.appendTo($('body'));
        console.log(scrollBtn[0])
        window.onscroll=function(){
            var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
            if(scrolltop > winHeight) {
                scrollBtn.fadeIn();
            }else {
                scrollBtn.fadeOut();
            }

            if(!istop){
                clearInterval(scrollptop_timer);
            }
            istop=false;
        }
        scrollBtn.on('click',function() {
            clearInterval(scrollptop_timer);
            scrollptop_timer=setInterval(function(){
                var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
                var scroll_speed=Math.floor(-scrolltop/6);
                document.documentElement.scrollTop=document.body.scrollTop=scrolltop+scroll_speed;
                istop=true;
                if(scrolltop==300){
                    clearInterval(scrollptop_timer);
                }

            },30)

        })


    }
    scrolltop();


})
