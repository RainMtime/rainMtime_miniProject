//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onLoad:function(options){
    var that = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=2',
      success:function(res){
        console.log(res.data.subjects);
        that.setData({
          "movies": res.data.subjects
        })
      }
    })
  }
 

})
