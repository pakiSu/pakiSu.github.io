
window.onload = function () {
    var type = 1;
    var qqAccount = 47317889;
    var qqGroup = "http://shang.qq.com/wpa/qunwpa?idkey=3f52a882a0e039420c76d1c5aaafd8c735bdfcdf6fba54903042092e002a2f35";
    var iosGroup = "mqqapi://card/show_pslcard?src_type=internal&version=1&uin="+ qqAccount +"&card_type=group&source=qrcode";
    var usa = navigator.userAgent;
    var isIos = false;
    var isMQ = 0;
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
    if(typeof type == "undefined") type = 1;
    if(usa.indexOf("Android")>-1){
        isIos = false;
    } else if(usa.indexOf("iPhone")>-1 || usa.indexOf("iPad")>-1 || usa.indexOf("iPod")>-1){
        isIos = true;
    } else if(usa.indexOf("Windows Phone") > -1 || usa.indexOf("WPDesktop") > -1){
        isIos = false;
    } else {
        isIos = false;
    }
    if(isIos){
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
    if(type == 1){
        var f = document.createElement("iframe");
        f.style.display = "none";
        document.body.appendChild(f);
        if(isIos){
            f.src = iosGroup;
        } else {
            f.src = qqGroup;
        }
    }
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
