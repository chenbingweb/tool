import homeYes from "../images/nav_bar_img/home_yes.png";
import homeNo from "../images/nav_bar_img/home_no.png";
import myYes from "../images/nav_bar_img/my_yes.png";
import myNo from "../images/nav_bar_img/my_no.png";
class Config{
    constructor(){
        this.navBar=[
            {
                name: '精彩活动',
                title:'精彩活动',
                selected: false, 
                icon: homeNo,
                icon_s: homeYes, 
                path: '/' ,
                fontStyle:{
                    select_color:{
                        color:'#333'
                    },
                    color:{
                        color:'#999'
                    }
                },
                imgStyle:{
                    width:44/75+'rem',
                    height:40/75+'rem'
                }
               
            },
            {
                name: '个人中心',
                title:'个人中心',
                selected: false, 
                icon: myNo,
                icon_s: myYes, 
                path: '/myCenter' ,
                fontStyle:{
                    select_color:{
                        color:'#333'
                    },
                    color:{
                        color:'#999'
                    }
                },
                imgStyle:{
                    width:35/75+'rem',
                    height:40/75+'rem'
                }
               
            }
        ]
    }
    
}
let config=new Config()
export default config;

let baseConfig = {
    "BaseURL":"http://square-dance.jeemoo.com/",
    "ImgURL":"http://square-dance.jeemoo.com/"
 }
 let _interface ={
    "wxJsTicket":"/api/wx/getJsSign",
    //获取腾讯地址code
    "getCode":"/api/wx/getCode",
    "getUserInfo":"/api/wx/getUserInfo",
    "getMemberInfo":"/api/member/info",
    "getActiveList": "/api/activity/list",
    "ocr":"/api/team/auth",
    "registCaptain":"/api/team/create",
    "scanjoinTeam":"/api/team/join",
    "activeDetail":"/api/activity/info",
    "joinTeamList":"/api/activity/activityTeam",
    "getVoteList":"/api/goods/list",
    "freeVote":"/api/goods/freeVotes",
    "butTicket":"/butTicket",
    "getTeamInfo":"/api/team/getInfo",
    "getUserTeamList":"/api/team/activity",
    "joinTeam":"/jointeam",
    "signSucc": "/api/team/signUp",
    "getUserRole":"/getUserRole",
    "getResDetailInfo":"restaurant/detail",
    "saveInfo":"/api/member/update",
    "buyTicket":"/api/goods/buy",
    "createTeam":"/api/team/signIn",
    "delTeam":"api/team/cancelSignUp"
 }
 export {
    _interface,
    baseConfig
 }