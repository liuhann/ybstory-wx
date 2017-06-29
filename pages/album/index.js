const datasource = require('../../utils/datasource.js');
const config = require('../../utils/config.js');
var app = getApp();
Page({
    data: {
        imgServer: config.IMAGE_SERVER,
        albumCover: null,
        albumName: null,
        skip: 0,
        total: 1000000,
        loading: false,
        stories: []
    },
    //事件处理函数
    bindViewTap: function() {

    },

    goPlay: function(event) {
        let story = event.currentTarget.dataset.story;
        app.currentStory = story;
        wx.navigateTo({
            url: '../player/index?artist=' + story.artist + '&path=' + story.path + '&title=' + story.title + '&cover=' + story.cover
        });
    },

    scrolledToEnd: function() {
        this.fetchMoreStories();
    },

    fetchMoreStories: function() {
        if (this.data.skip>this.data.total) {
            return;
        }

        if (this.data.loading) {
            return;
        }

        this.setData({
            loading: true
        });
        datasource.filterStory({
            album: this.options.name,
            skip: this.data.skip
        }, (list, pageTotal) => {
            this.setData({
                loading: false,
                skip: this.data.skip + 18,
                stories: this.data.stories.concat(list),
                total: pageTotal
            });
        });
    },

    onReady: function() {
        wx.setNavigationBarTitle({
            title: '专辑:' + this.options.name
        });

        this.setData({
            albumCover: config.IMAGE_SERVER + '/' + this.options.cover + '.png@w_420,q_80',
            albumName: this.options.name
        });
        this.fetchMoreStories();

    },
});
