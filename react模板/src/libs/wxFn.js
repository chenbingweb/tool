import {Tool} from "./Tool.js";
import {User} from "../model/user"
import { _interface } from "../config/config";
let _SafetyControl=false;
console.log(_interface)
const wx=window.wx;

class WXFN{
    constructor(){
        console.log(User)
       
    }
     //初始化WXJSDK
    InitJsTicket(callBack){
        let  jsApiList=[
                'getLocalImgData',
                'getLocation',
                'previewImage',
                'chooseWXPay',
                'chooseImage',
                'uploadImage',
                'hideMenuItems',
                'hideAllNonBaseMenuItem',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'startRecord',
                'stopRecord',
                'closeWindow',
                'scanQRCode'
            ]
        //配置微信菜单按钮
        let hiddenList=[
            /** 基本类 **/
            // "menuItem:exposeArticle",// 举报:
            // "menuItem:setFont",// 调整字体: 
            // "menuItem:dayMode",//日间模式: 
            // "menuItem:nightMode",//夜间模式: 
            // "menuItem:refresh",//刷新: 
            /** 传播类 **/ 
            // 'menuItem:share:appMessage',//发送给朋友
            // 'menuItem:share:timeline',//分享到朋友圈
            // 'menuItem:share:qq',//分享到QQ:
            // 'menuItem:share:weiboApp',//分享到Weibo
            // 'menuItem:favorite',//收藏
            // 'menuItem:share:facebook',//分享到FB
            // 'menuItem:share:QZone',//分享到 QQ 空间
            /** 保护类 **/ 
            'menuItem:editTag',//编辑标签
            'menuItem:delete',//删除
            'menuItem:copyUrl',//复制链接:
            'menuItem:originPage',//原网页
            'menuItem:readMode',//阅读模式
            'menuItem:openWithQQBrowser',//在QQ浏览器中打开
            'menuItem:openWithSafari',//在Safari中打开
            'menuItem:share:email',//邮件
            'menuItem:share:brand'//一些特殊公众号
        ]
              // 记录进入app时的url
        
        Tool.Post(_interface.wxJsTicket,{
            url:window.location.href
        }).then(res=>{
            if(res.errcode==0)
            {
                let jo=res.data;
                if(wx)
                {
                    wx.config({
                        debug: false,
                        appId: jo.appId,
                        timestamp: jo.timestamp,
                        nonceStr: jo.nonceStr,
                        signature: jo.signature,
                        jsApiList:jsApiList
                    });
                 
                        wx.ready(function(){
                           
                                wx.checkJsApi({
                                    jsApiList:[
                                        'hideMenuItems',
                                        'hideAllNonBaseMenuItem'
                                    ],
                                    success:function(result){
                                        
                                        //要隐藏的菜单项,只能隐藏"传播类"和"保护类"按钮,所有menu项见附录3
                                        wx.hideMenuItems({
                                            menuList:hiddenList
                                        });

                                        wx.hideAllNonBaseMenuItem();
                                        callBack && callBack()
                                    },
                                    fail:function(err){
                                        console.log('隐藏菜单')
                                    }
                                });
          
                           
                        }); 
                        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                        wx.error(function(err){
                           
                            console.log('config信息验证')
                            window.history.back()
                            console.log(err)
                        });
                 
                   
                }
               
            }
            
        }).catch(err=>{

            console.log(err)
        })
    }
    //微信静默授权 scope为snsapi_base  scope为snsapi_userinfo
    WXLogin(callBack,flag){

        //不使用微信登录
        if(flag)
        {
            callBack()
            return
        }
        let code=this.GetUrlPara('code');
       // debugger
        //判断是否有code,有code就微信登录
        if(code)
        {
            Tool.Post(_interface.getUserInfo,{code},true).then(res=>{
                //模拟测试
                let userInfo={
         
                    Authentication:res.data.role!=='',
              
                    ...res.data
                }
                User.updataUserInfo(userInfo)
          
                //开发环境
                if(process.env.NODE_ENV=='development')
                {
                    callBack && callBack()
                }
                else
                {
                    this.InitJsTicket(callBack)
                }
             
            }).catch(err=>{
                console.log(err)
                this.GetWXURL()
            })
        }
        //否则跳转微信授权页面
        else
        {
            sessionStorage.removeItem("login");
            sessionStorage.removeItem("userInfo");
           // this.InitJsTicket(callBack)
          this.GetWXURL()
        }
    }
    GetWXURL(){
        Tool.Post(_interface.getCode,{},true).then(res=>{
          //  debugger
            if(res.errcode==0)
            {
                window.location.href=res.data.url
               // document.location.replace(res.url)
            }
           
        }).catch(err=>{
            console.log(err)
        })
    }
    //获取url上的查询字段
	GetUrlPara(str)
	{
		var reg = new RegExp("(^|&)" + str + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) 
		{
			return unescape(r[2]); 
		}else
		{
			return null;
		}
		
	}
	//初始化页面
	InitPageState()
	{
		if(_SafetyControl)
		{
			var useragent=navigator.userAgent;
			if (useragent.match(/MicroMessenger/i)!='MicroMessenger')
			{
				alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
				var opened=window.open('about:blank', '_self');
				opened.opener=null;
				opened.close();
			}
			else
			{
		/*
					if(!_openid)
					{
									$.ShowAlert('请您从菜单进入!');
									var opened=window.open('about:blank', '_self');
									opened.opener=null;
									opened.close();
					}*/
			}
		}
	}
}

let wxfn = new WXFN();
export { wxfn as WXFN }