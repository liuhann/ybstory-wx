const datasource = require('../../utils/datasource.js');
const config = require('../../utils/config.js');
var app = getApp();
Page({
    data: {
        imgServer: config.IMAGE_SERVER,
        filter: {},
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
        this.setData({
            loading: true
        });
        this.data.filter.skip = this.data.skip;
        datasource.filterStory(this.data.filter,
            (list, pageTotal) => {
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
            title: this.options.title
        });
        if (this.options.label) {
            this.setData({
                filter: {
                    label: this.options.label
                }
            });
            this.fetchMoreStories();
        }
    },
});
