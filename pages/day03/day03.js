// pages/day03/day03.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
     subTitle:app.title,
     name:'doubleyong'
  },
  updateImage:function(){
    //选择图片
     wx.chooseImage({
       count:1,
       sourceType:['ablum','camera'],
       success:function(res){
        //  图片放到微信的临时文件中
         console.log(res);
         var path = res.tempFilePaths[0];
         //把图片文件上传到服务 器
         wx.uploadFile({
           url: 'http://172.16.10.33:8888/uploadImage.do',
           filePath: path,
           name: 'txtFile',
           success:function(res){
             console.log(res);
           }
         })
       }
     })
  },
  callphone:function(){
    wx.makePhoneCall({
      phoneNumber:'13699417150'
    });
  },

  onShareAppMessage:function(){
      return {
        'title':"doubleyong",
        success:function(res){
          console.log(res);
          console.log('转发成功');
        }
      }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({'user':app.globalData.userInfo});

    wx.getLocation({'success':function(res){
           console.log(res);
           var latitude = res.latitude; //纬度
           var longitude = res.longitude; //经度

           wx.request({
             url: 'http://api.map.baidu.com/geocoder/v2/',
             data:{
               location: latitude + ',' + longitude,
               ak:'QMjmPYmUwGMdwGH7r7NPOEFid8GhkZzI',
               output:'json'
             },
             success:function(res){
               console.log(res);

             }
           })
    }});


    // console.log(app.globalData.userInfo);
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