const datasource = require('../../utils/datasource.js');
const config = require('../../utils/config.js');
var app = getApp();
Page({
    data: {
        labels: config.LABEL,
    },

    goLabel: function() {
        wx.navigateTo({
            url: '../storylist/index?title=热门故事&label=精选'
        });
    },

    onReady: function() {
        wx.setNavigationBarTitle({
            title: '故事分类'
        });
    },
});
