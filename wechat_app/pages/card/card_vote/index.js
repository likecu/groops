Page({
  data: {
    members: [
      {
        userName:"123",
        userId:"id1"
      },
      {
        userName:"12113",
        userId:"id2"
      }
    ],

  isShow: false,
  heightConfig: 0,
  navTop: 0,
  themeMessage:"",
  },

  onLoad: function (options) {
    this.init(options);
  },
  
  init(options){
    let that = this;
    this.setData({
      navTop: getApp().globalData.navTop,
      heightConfig: getApp().globalData.windowHeight,
      group_id:options.id,
      "joinGroups.group_id":options.id
    })
    console.log("小组成员页面加载");
    wx.request({
      url: getApp().globalData.url + '/getGroupMembers/'+this.data.group_id,
      header: {
        "authorization": wx.getStorageSync("token")
      },
      method: 'POST',
      success: (result) => {
        if (result.data.code == 200) {
          console.log("小组列表request返回值",result.data.data);
          that.setData({
            'joinGroups.list':result.data.data,
          })
        } else {
            wx.showModal({
              title: '提示',
              content: result.data.msg + '，错误码：' + result.data.code,
              confirmText: '确定',
              showCancel: false,
            })
        }
      }
    });
  },
  submit(e){
    //console.log("表单携带的数据：",e.detail.value);
    let that=this;
    let a3=e.detail.value;
    console.log("表单携带的数据：",a3);
     wx.request({
      url: getApp().globalData.url + '/addGroup',
      data: a3,
      header: {
        "authorization": wx.getStorageSync("token")
      },
      method: 'POST',
      success: (result) => {
        if (result.data.code == 200) {
          that.setData({
            isShow: false,
            result_data:result.data.data,
          })
          console.log(that.data.result_data);
          wx.showToast({
            title: '保存成功',
          })
          that.setData({
            'userInfo.userMotto': that.data.motto
          })
          wx.redirectTo({
            url:"/otherpage/dashboard/index"})
        } else {
            wx.showModal({
              title: '提示',
              content: result.data.msg + '，错误码：' + result.data.code,
              confirmText: '确定',
              showCancel: false,
            })
        }
      }
    });
  },
});