//路由模块
// onpopstate可以监控state变化
var history = window.history;
if(history.pushState){
    window.onload=function(){

//                if(!history.state){
//                    var hash=window.location.hash;
//                    history.replaceState({id:'','base':true},"",window.location.href.split("#")[0]+"");
//                    var pageNum=window.location.search&&window.location.search.match(/page=(\d)/)[1];
//                    if(!pageNum||pageNum<1) return;
//                    sharePage(pageNum);
//                }else {
//                    var state=history.state;
//                    if(state.id&&!state.base){
////                        $('.friend').eq(state.id-1).trigger('click');
//                        popPage(false,state.top,state.id-1);
//                        playvideo(state.imgSrc,state.videoSrc);
//                    }
//                }
//         function getPageNum(){
//             $('#chatbox').show();
// //                    $('.banner-main').show();
//             var pageNum=window.location.search&&window.location.search.match(/page=(\d*)/)[1];
//             if(!pageNum||pageNum<1) return;
//             sharePage(pageNum);
//
//         }
//         if(!history.state){
//             history.replaceState({id:'','base':true},"",window.location.href.split("#")[0]+"");
//
//             getPageNum();
//         }else {
//             getPageNum();
//         }
    }

    window.onpopstate = function(e){
        var state = history.state;
        if(!state)return;
        if(!state.id){
            history.replaceState({"id":state.id},"",window.location.href.split("#")[0]+"");
            //                    l--;
            closePage(state.id);
        }else {
            popPage(false,state.top,state.id-1);
            playvideo(state.imgSrc,state.videoSrc);
        }

    }
}


//        var l = 1;
function addHistory(id,top,imgSrc,videoSrc){
    var id=parseInt(id)+1;
//            if(l > 1){
//                history.replaceState({"id":id,'top':top},"",window.location.href.split("?")[0]+"?page-"+id);
//            }else{
//                history.pushState({"id":id,'top':top},"",window.location.href.split("?")[0]+"?page-"+id);
//                l++;
//            }
    history.pushState({"id":id},"",window.location.href+"?page="+id);
//            console.log(history.state);
}