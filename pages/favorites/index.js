const datasource = require('../../utils/datasource.js');
const config = require('../../utils/config.js');
var app = getApp();
Page({
    data: {
        imgServer: config.IMAGE_SERVER,
        stories: []
    },


    goPlay: function(event) {
        let story = event.currentTarget.dataset.story;
        app.currentStory = story;
        wx.navigateTo({
            url: '../player/index?artist=' + story.artist + '&path=' + story.path + '&title=' + story.title + '&cover=' + story.cover
        });
    },

    scrolledToEnd: function() {

    },

    onReady: function() {

        wx.setNavigationBarTitle({
            title: '我的收藏'
        });


        this.setData({
            stories: datasource.getFavorites()
        })
    },
});
