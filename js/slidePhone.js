
;(function(window,$,undefined){
    var sl = function(dom){
        this.dom = $(dom);
        this.eff="öÎÔÆOAÒ³µÄµã»÷ÂÖ²¥";
        this.author="lianxiaozhuang";
        this.ul = this.dom.find(".sl-ul");
        this.li = this.ul.find("li")
        this.liW = 3*this.ul.find("li").width();
        this.len = (this.li.length)/3;
        this.pageUl = this.dom.find(".page-ul");
        this.index = 0;
        this.init();

    }
    sl.prototype = {
        init:function(){
            var _this = this;
            var li="";
            for(var i=0;i<_this.len;i++){

                li+='<li></li>'
            }
            this.pageUl.append(li);
            this.pageUl.find("li").eq(_this.index).addClass("on");
            this.dom.find(".to-left").click(function(){
                if(_this.index>0){
                    _this.index--;
                }

                _this.slide()
            });
            this.dom.find(".to-right").click(function(){
                if(_this.index<_this.len-1){
                    _this.index++;
                }

                _this.slide()
            });
            this.pageUl.find("li").on("click",function(){
                var index = $(this).index();
                //console.log(index);
                _this.index = index;
                _this.slide()
            });
            this.d()
        },
        slide:function(){

            var _this  = this;
            this.pageUl.find("li").eq(_this.index).addClass("on").siblings().removeClass("on");
            this.d();
            this.ul.animate({
                "left":(-_this.index*_this.liW)
            });
        },
        d:function(){//ÅÐ¶ÏÊÇ·ñ»¬µ½Á½¶Ë£»
            var _this  = this;
            if(_this.index==0){
                this.dom.find(".to-left").addClass("end").siblings().removeClass("end");
            }else if(_this.index==_this.len-1){
                this.dom.find(".to-right").addClass("end").siblings().removeClass("end");
            }else{
                this.dom.find(".to-left,.to-right").removeClass("end");
            }
        }
    }

window.sl = sl;

}(window,jQuery));