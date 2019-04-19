// componment/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     rate:{
       type: Number,
       value:0
     },
     starsize:{
       type:Number,
       value:20
     },
     fontsize:{
       type:Number,
       value:20
     }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  
 
  attached() {
    var that = this;
    var rate = that.properties.rate;
    var intRate = parseInt(rate);
    var light = parseInt(intRate/2);
    var half = intRate % 2;
    var grey = 5- light - half;
    var lights = [];
    var halfs = [];
    var greys = [];
    console.log(light);
    console.log(half);
    console.log(grey);
    for(var i =1 ;i<=light;i++){
      lights.push(i);
    }
    for(var i =1 ;i<=halfs;i++){
      halfs.push(i);
    }

    for(var i =1 ;i<=grey;i++){
      greys.push(i);
    }
       
   var ratetext = rate && rate > 0 ? rate.toFixed(1) :"未评分";
    that.setData({
      "lights":lights,
      "halfs":halfs,
      "greys":greys,
      "ratetext": ratetext
    })
  }
})
