const datasource = require('../../utils/datasource.js');
const config = require('../../utils/config.js');

//获取应用实例
var app = getApp();

Page({
    onReady: function () {
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
        favicon: '../../images/star-empty.svg',
        isFavorite: false,
        poster: null,
        name: null,
        author: null,
        src: null
    },


    toggleFavorite: function () {
        if (this.data.isFavorite) {
            datasource.removeFavorite(app.currentStory);
            this.setData({
                favicon: '../../images/star-empty.svg',
                isFavorite: false
            });
        } else {
            datasource.addToFavorite(app.currentStory);
            this.setData({
                favicon: '../../images/star-full.svg',
                isFavorite: true
            });
        }
    },

    onLoad: function () {
        if (datasource.isFavorite(app.currentStory._id)) {
            this.setData({
                favicon: '../../images/star-full.svg',
                isFavorite: true
            })
        } else {
            this.setData({
                favicon: '../../images/star-empty.svg',
                isFavorite: false
            })
        }

    }
});
