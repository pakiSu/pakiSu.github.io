
window.onload = function () {
    debugger;
    var type = 1;
    // var sid = 2;
    var rawuin = 521129760;
    var qsig = "http://shang.qq.com/wpa/qunwpa?idkey=3f52a882a0e039420c76d1c5aaafd8c735bdfcdf6fba54903042092e002a2f35";

    var QQApi = {
        openURL: function(url){
            var i = document.createElement('iframe');
            i.style.display = 'none';
            i.onload = function() { i.parentNode.removeChild(i); };
            i.src = url;
            document.body.appendChild(i);

            var returnValue = QQApi.__RETURN_VALUE;
            QQApi.__RETURN_VALUE = undefined;
            return returnValue;
        },

        isAppInstalled: function(scheme) {
            var parameters = {'scheme':scheme};
            var r = QQApi.openURL('jsbridge://app/isInstalled_?p=' + encodeURIComponent(JSON.stringify(parameters)));
            return r ? r.result : null;
        },

        isQQWebView: function(){
            return QQApi.isAppInstalled('mqq') == true;
        },
        __RETURN_VALUE: undefined
    };
    var usa = navigator.userAgent;
    var p;
    // var mobile_q_jump = {
    //     android:"https://play.google.com/store/apps/details?id=com.tencent.mobileqq",
    //     ios:"itms-apps://itunes.apple.com/cn/app/qq-2011/id444934666?mt=8",
    //     winphone:"http://www.windowsphone.com/zh-cn/store/app/qq/b45f0a5f-13d8-422b-9be5-c750af531762",
    //     pc:"http://mobile.qq.com/index.html"
    // };
    var isMQ = 0;
    if(typeof type == "undefined") type = 1;

    if(usa.indexOf("Android")>-1){
        p = "android";
    }
    else if(usa.indexOf("iPhone")>-1 || usa.indexOf("iPad")>-1 || usa.indexOf("iPod")>-1){
        p = "ios";
    }
    else if(usa.indexOf("Windows Phone") > -1 || usa.indexOf("WPDesktop") > -1){
        p = "winphone";
    }
    else {
        p = "pc";
    }
    if(p == "ios"){
        //防止循环
        if(history.pushState)
            history.pushState({},"t","#");
        isMQ = QQApi.isQQWebView();

        if (!isMQ){
            var sc = document.createElement("script");
            sc.src = "http://__.qq.com/api/qqapi.js";
            sc.onload = function(){
                if(window['iOSQQApi']){
                    isMQ =iOSQQApi.device.isMobileQQ();
                }
            };
            document.body.appendChild(sc);
        }
    }
    // else if(p == "pc" && qsig != "undefined"){
    //     window.open(qsig,"_blank");
    // }
    if(type == 1){//手Q
        // var isSuccess = true;
        var f = document.createElement("iframe");
        f.style.display = "none";
        document.body.appendChild(f);
        // f.onload = function(){
        //     isSuccess = false;
        // };

        if(p == "ios"){//ios并且为群名片
            f.src = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin="+ rawuin +"&card_type=group&source=qrcode";
        } else {
            f.src = qsig;
        }
        // //群
        // if(sid == 2){
        //     document.title = "申请加入QQ群";
        // }
        // var now = Date.now();
        // setTimeout( function(){
        //     if((p == "ios" && !isMQ && Date.now() - now < 2000) || (p == "android" && !isSuccess) || ((p == "winphone" && Date.now() - now < 2000))){
        //         var jumpUrl = mobile_q_jump[p];
        //         if(jumpUrl) window.open(jumpUrl,"_blank");
        //     }
        // } , 1500);
    }
    // debugger;
    // var browser = navigator.userAgent;
    // var isIos = false;
    // var rawuin = 521129760;
    // if(browser.indexOf("Android")>-1){
    //     isIos = false;
    // }
    // else if(browser.indexOf("iPhone")>-1 || browser.indexOf("iPad")>-1 || browser.indexOf("iPod")>-1){
    //     isIos = true;
    // }
    // else if(browser.indexOf("Windows Phone") > -1 || browser.indexOf("WPDesktop") > -1){
    //     isIos = true;
    // }
    // else {
    //     isIos = false;
    // }
    // var popUpAlert = document.createElement("iframe");
    // popUpAlert.style.display = "none";
    // popUpAlert.width="0";
    // popUpAlert.height="0";
    // document.body.appendChild(popUpAlert);
    // if(isIos){
    //     if(history.pushState) {
    //         history.pushState({},"t","#");
    //     }
    //     if(browser.indexOf("Safari") > -1) {
    //         popUpAlert.src = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=" + rawuin +"&card_type=group&source=qrcode";
    //     } else {
    //         popUpAlert.src = "http://shang.qq.com/wpa/qunwpa?idkey=3f52a882a0e039420c76d1c5aaafd8c735bdfcdf6fba54903042092e002a2f35";
    //     }
    // } else {
    //     //弹出QQ群官方链接地址
    //     popUpAlert.src="http://shang.qq.com/wpa/qunwpa?idkey=3f52a882a0e039420c76d1c5aaafd8c735bdfcdf6fba54903042092e002a2f35";
    // }
    // getSize();
    // window.addEventListener('resize',getSize);
};
function getSize(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth/3.2/2+'px';
}
function logoLink() {
    window.parent.open('http://www.jsb333.com','_blank');
}
//联系客服
function serviceRouter() {
  window.parent.open('http://f88.live800.com/live800/chatClient/chatbox.jsp?companyID=694497&configID=137569&jid=1317794529 ','_blank');
}
//登录页面
function loginRouter() {
    window.parent.open('http://www.bangbbs.com/download/113309/auto ','_blank');
}
//新用户注册
function userRegistrationRouter1() {
    window.parent.open('http://www.jsb588.com','_blank');
}
//会员登录
function userRegistrationRouter2() {
    window.parent.open('http://www.jsb333.com','_blank');
}
//新手帮助
function weblogin() {
    window.parent.open('http://jsb333.com/lotteryinfo/index1.html','_blank');
}
//金仕博交流群：xxxxxxxx
function QQGroupPlan() {
    window.parent.open('http://shang.qq.com/wpa/qunwpa?idkey=c787369c0d7ab9e7ddff08c84fbc0d8c0ad5c278b0bb0ab2ccac4d00312bc459','_blank');
}
//联系QQ3090576799：xxxxxxxx
function contactInformation() {
    window.parent.open('tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=3090576799&fuin','_blank');
}
