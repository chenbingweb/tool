// pages/index/index.js
let app=getApp();
let _util = require('../../utils/util.js');
let _fn=require('./fn.js')
import Ajax from "../../libs/Ajax.js";
import Tool from "../../libs/Tool.js"

Page({

  /**
   * 页面的初始数据'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
   */
  data: {
    showReleaseBox:false,
    banner:[],//banner
    recom_building: null,//推荐楼盘
    recom_housing: null,//推荐房源
    recomInfo:[],//推荐资讯
    baseSet:{
      indicatorDots: false,//是否显示面板指示点
      indicatorColor: 'rgba(0, 0, 0, .3)',//指示点颜色
      indicatorActiveColor: '#000000',//当前选中的指示点颜色
      autoplay: true,//是否自动切换
      interval: 5000,//自动切换时间间隔
      duration: 1000,//滑动动画时长
      circular: true,//是否采用衔接滑动
      vertical: false//滑动方向是否为纵向
    },
    amount:0,//雄心币,
    tabSelectFlag:true,
    recomJob:null,
    imgUrl: getApp().globalData.imgUrl,
    areaList:[],
    areaIndex:9
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取地址列表
    // getApp().getAreaList((res) => {
    //   let areaList = this.data.areaList;
    //   areaList.push(...res)
    //   // 默认地址id
    //   this.areaId = areaList[9].id
    //   this.setData({
    //     areaList: areaList
    //   })
    //   _fn.getIndexInfo(this);
     
    // })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // getApp().UserToLogin(res=>{
    //   console.log(res)
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //用户登录
    // getApp().UserToLogin((res) => {
    
    // })

    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.hideLoading()
    this.onUnload()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.hideLoading();

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

    let imageUrl=undefined;
    console.log(getApp().shareInfo)
    return getApp().ShareFn({
      imageUrl: getApp().globalData.shareInfo.share_img,
      title: getApp().globalData.shareInfo.share_title,
    })
  }
})