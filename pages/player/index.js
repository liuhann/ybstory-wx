const datasource = require('../../utils/datasource.js');
const config = require('../../utils/config.js');

//获取应用实例
var app = getApp();

Page({
  onReady: function() {
      wx.setNavigationBarTitle({
          title: this.options.title
      });

      this.audioCtx = wx.createAudioContext('myAudio');
      this.setData({
          cover: config.IMAGE_SERVER + '/' + this.options.cover + '.png@w_420,q_80',
          poster: config.IMAGE_SERVER + '/' + this.options.cover + '.png@w_120',
          name: this.options.title,
          author: this.options.artist,
          src: config.AUDIO_SERVER + this.options.path
      });
  },
  data: {
    imgServer: config.IMAGE_SERVER,
    poster: null,
    name: null,
    author: null,
    src: null
  },
  onLoad: function () {

  }
});
