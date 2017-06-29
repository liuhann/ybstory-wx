const API_SERVER = 'https://jinjing.duapp.com';
const IMAGE_SERVER = 'http://imagek.cdn.bcebos.com/';
const utils = require('./util');


function home(callback) {
  wx.request({
    url: API_SERVER + '/home?labels=今日推荐,精选',
    success: function(res){
      callback(res.data);
    }
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
    home: home,
    listAlbum:listAlbum,
    filterStory: filterStory
};
