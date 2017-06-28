const API_SERVER = 'https://jinjing.duapp.com';
const IMAGE_SERVER = 'http://imagek.cdn.bcebos.com/';


function home(callback) {
  wx.request({
    url: API_SERVER + '/home?labels=今日推荐,精选',
    success: function(res){
      callback(res.data);
    }
  });
}

module.exports = {
  home: home
};
