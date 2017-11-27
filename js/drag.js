/**
 * Created by tanghuan on 2017/11/26.
 */
(function($) {
    $.fn.move = function() {
        return $(this).each(function() {
            var oThis = $(this),
                _isMove = false,
                _x = 0,
                _y = 0,
                _width = $(this).width(),
                _height = $(this).height(),
                _winWidth = oThis.parent().width(),
                _winHeight = oThis.parent().height();
            $(this).mousedown(function(e) {
                e.preventDefault();
                _isMove = true;
                _x = e.clientX - parseInt($(this).css("left"));
                _y = e.clientY - parseInt($(this).css("top"));
//                    _x= e.offsetX;
//                    _y= e.offsetY;
//                    console.log(e.clientX,e.clientY,_x,_y,_x1,_y1);
            });
            $(document).mousemove(function(e) {
                e.preventDefault();
                if( _isMove ) {
                    window.e ? window.e.returnValue = false : e.preventDefault();
                    var x = e.clientX - _x ;
                    var y = e.clientY - _y ;
                    //x = Math.max(0, Math.min(_winWidth - _width, x));
                    //y = Math.max(0, Math.min(_winHeight - _height, y));
                    oThis.css({"left":parseInt(x), "top":parseInt(y)});
                }
            }).mouseup(function() {
                _isMove = false;
            });
        });
    }
})(jQuery);
