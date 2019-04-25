//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onLoad:function(options){
    var that = this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      success:function(res){
        console.log(res);
        console.log(res.data.subjects);
        that.setData({
          "movies": res.data.subjects
        })
      }
    })
  }
 

})
