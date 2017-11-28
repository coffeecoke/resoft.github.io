
;(function(win,doc,$,undefined){

    var Slider = function(dom){
        this.author = "lianxiaozhuang";
        this.dom = $(dom);
        this.slide = this.dom.find(".slide");
        this.pageBox = this.dom.find(".page-box");
        this.slideLength = this.slide.length;//轮播个数
        this.start = 0;
        this.speed = 4000;
        this.timer = null;//轮播定时器
        this.startB = 40;//字体初始bottom值
        this.endB =220;

        this.init();

    }
    Slider.prototype = {
        constructor:Slider,
        init:function(){
            var _this = this;
            _this.addUL();
            _this.swiper(_this.start);

            _this.timer = setInterval(function(){
                _this.swiper(_this.start);

            },_this.speed);

          _this.pageBox.find("li").each(function(index,element){
                $(element).click(function(){
                  //  console.log(index)
                   _this.clickLi(index)
                });
            })
        },
        addUL:function(){
            var _this = this;
            var ulMode = "<ul>";
            for(var i=0;i<_this.slideLength;i++){
                ulMode+="<li></li>"
            }
            ulMode+="</ul>";
            _this.pageBox.append(ulMode);
        },
        swiper:function(idx){
            var _this = this;
            console.log(idx);
            _this.slide.hide().find(".bg-box,.f-box,.span-box").hide();
            var $now =  _this.slide.eq(idx);
            if(idx==0){
                _this.slide.find(".span-box").css({
                    "bottom":_this.startB+"px",
                    "opacity":1
                });
            }else {
                _this.slide.find(".span-box").css({
                    //"bottom":_this.startB+"px",
                    "opacity":0
                });
            }

            _this.pageBox.find("li").eq(idx).addClass('ac').siblings().removeClass("ac");
            $now.show().find(".bg-box").fadeIn(300,function() {
                $now.find(".f-box").fadeIn(600,function () {
                    if(idx==0){
                        $now.find(".span-box").show().animate({
                            "bottom":_this.endB+'px',
                            //"opacity":1
                        },800);
                    }else {
                        $now.find(".span-box").show().animate({
                            //"bottom":_this.endB+'px',
                            "opacity":1
                        },800);
                    }



                });
            });

            _this.start++;
            if(_this.start==_this.slideLength){
                _this.start = 0;
            }

        },
        clickLi:function(index){
            var _this = this;
            clearInterval(_this.timer);
            _this.timer = null;
            //console.log(index);
            _this.start = index;

            _this.swiper(_this.start);

            _this.timer = setInterval(function(){
                 _this.swiper(_this.start);

            },_this.speed);

        }

    }

    win.Slider = Slider;


}(window,document,jQuery));