const datasource = require('../../utils/datasource.js');
const config = require('../../utils/config.js');
var app = getApp();
Page({
    data: {
      imgServer: config.IMAGE_SERVER,
      albumCover: null,
      albumName: null,
      stories: []
    },
    //事件处理函数
    bindViewTap: function() {

    },

    goPlay: function(event) {

    },

    onReady: function() {
        this.setData({
            albumCover: config.IMAGE_SERVER + '/' + this.options.cover + '.png@w_420,q_80',
            albumName: this.options.name
        });

        datasource.filterStory({

        }, function(list, pageTotal) {

        });
    },
});
