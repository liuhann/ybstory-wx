const datasource = require('../../utils/datasource.js');
const config = require('../../utils/config.js');
//index.js
//获取应用实例
var app = getApp();

Page({
  onReady: function() {
      wx.setNavigationBarTitle({
        title: '专辑列表'
      });
  },
  data: {
    imgServer: config.IMAGE_SERVER,
    albums: []
  },

  openAlbum: function(event) {
      let album = event.currentTarget.dataset.album;
      wx.navigateTo({
          url: '../album/index?cover=' + album.cover + '&name=' + album.name
      });
  },

  onLoad: function () {
      datasource.listAlbum((albums) => {
        this.setData({
          albums: albums.result
        });
      });
  }
});
