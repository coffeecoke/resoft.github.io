
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    console.log(r);
    if(r!=null)return unescape(r[2]); return null;
}


$(function(){


   // $(".product-menue").load("./menue.html",function(){});
    //²Ëµ¥ÕÛµþ
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



})
