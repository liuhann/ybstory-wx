const datasource = require('../../utils/datasource.js');
const config = require('../../utils/config.js');
//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    imgServer: config.IMAGE_SERVER,
    swiper: {
      inicatorActiveColor: '#fff',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500
    },
    imgUrls: [

    ],
    labelThumbs:[],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {

  },

    goAlbumsList: function() {
        wx.navigateTo({
            url: '../albumlist/index'
        });
    },

  goPlay: function(event) {
    let story = event.currentTarget.dataset.story;
    app.currentStory = story;
    wx.navigateTo({
        url: '../player/index?artist=' + story.artist + '&path=' + story.path + '&title=' + story.title + '&cover=' + story.cover
    });
  },

  onLoad: function () {
      wx.setNavigationBarTitle({
          title: '元宝故事'
      });
    datasource.home((homeData) => {
      let swiperImages = [];
      for(var i=0; i<homeData.homesAlbum.length; i++) {
        swiperImages.push(config.IMAGE_SERVER + '/' + homeData.homesAlbum[i].cover + '.png@w_480');
      }

      this.setData({
        imgUrls:swiperImages,
        labelThumbs: homeData.list
      });
    });
  }
});
