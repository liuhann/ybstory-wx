const API_SERVER = 'https://jinjing.duapp.com';
const IMAGE_SERVER = 'http://imagek.cdn.bcebos.com/';
const utils = require('./util');


function home(callback) {
  wx.request({
    url: API_SERVER + '/home?labels=' + encodeURIComponent('今日推荐,精选'),
    success: function(res){
      callback(res.data);
    }
  });
}


function getFavorites() {
    let favs = wx.getStorageSync('favorites');
    return favs || [];
}

function isFavorite(id) {
    let favorites = getFavorites();
    for(let i=0; i<favorites.length; i++) {
        if (id === favorites[i]._id) {
            return true;
        }
    }
    return false;
}


function addToFavorite(story) {
    let favorites = getFavorites();
    for(let i=0; i<favorites.length; i++) {
        if (story._id === favorites[i]._id) {
            return;
        }
    }
    delete story.desc;
    favorites.push(story);
    wx.setStorage({
        key: 'favorites',
        data: favorites
    });
}

function removeFavorite(story) {
    let favorites = getFavorites();
    for(let i=0; i<favorites.length; i++) {
        if (story._id === favorites[i]._id) {
            favorites.splice(i);
            break;
        }
    }
    wx.setStorage({
        key: 'favorites',
        data: favorites
    });
}


function listAlbum(callback) {
  wx.request({
    url: API_SERVER + '/album/list',
    success: function(res) {
      callback(res.data);
    }
  })
}

function filterStory(filter, callback) {
  wx.request({
      url: API_SERVER + '/story/list?' + utils.serialize(filter),

      success: function(res) {
          callback(res.data.list, res.data.total);
      }
  })
}

module.exports = {
    getFavorites: getFavorites,
    addToFavorite: addToFavorite,
    removeFavorite: removeFavorite,
    isFavorite: isFavorite,
    home: home,
    listAlbum:listAlbum,
    filterStory: filterStory
};
