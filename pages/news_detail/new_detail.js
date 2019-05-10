// pages/news_detail/new_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       console.log(options);
       var that = this;
       var realUrl = "https://news-at.zhihu.com/api/4/news/"+options.id;
       wx.request({
         url: realUrl,
         success:function(res){
           console.log(res);
          var htmlnode = res.data.body.replace(/\“/g,"\"");
          var finalnode = htmlnode.replace(/\”/g,"\"");
          console.log(finalnode);
           that.setData({
             body:finalnode,
             shareurl:res.data.share_url,
           })
         }
       })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})