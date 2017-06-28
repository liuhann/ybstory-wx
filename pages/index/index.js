const datasource = require('../../utils/datasource.js');

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    datasource.home((homeData) => {
      let swiperImages = [];
      for(var i=0; i<homeData.homesAlbum.length; i++) {
        swiperImages.push(homeData.homesAlbum[i].cover)
      }
      
      this.setData(homeData);
    });
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据

      that.setData({
        userInfo:userInfo
      })
    })
  }
})
