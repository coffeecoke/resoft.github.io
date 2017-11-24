
;(function($,win,undefined){
    var Bubble = function(dom,options){
        this.dom = $(dom);
        this.author = "lianxiaozhuang";
        this.effect="地图上的随机冒泡，变大后在消失，圆圈圈";
        this.init();
    }
    Bubble.prototype = {
        constructor:Bubble,
        init:function(){
            var _this = this;
           // _this.radomAppend();

          //  setInterval(function(){
                var radom =10*( 5+parseInt(Math.random()*5));//50-90
                var t = parseInt(Math.random()*1000*10);
              //  console.log(radom);
                _this.dom.append(
                    ' <div class="point point-'+radom+'"></div>'
                );
                setTimeout(function(){
                    _this.dom.find(".point-"+radom).addClass("on");

                },t);
            /*   setTimeout(function(){
                    _this.dom.find(".point-"+radom).removeClass("on point-"+radom);

                },t+5000);*/
           // },15000)


        },
        radomAppend:function(){
            var _this = this;



        }

    }

    win.Bubble = Bubble;

}(jQuery,window));

