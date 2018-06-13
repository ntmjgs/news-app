Page({
  data:{
    'newsId':'',
    'newsDetail':{}
  },
  onLoad(option){
    let id = option.id
    this.setData({
      newsId:id
    })
    this.getNewsDetail()
  },
  goBack(){
    wx.navigateBack()
  },
  //自定义导航栏看不到下拉刷新的...,因此用loading页面显示刷新效果
  onPullDownRefresh() {
    wx.showLoading({
      title: '刷新中...',
    })
    this.getNewsDetail(() => {
      setTimeout(() => {
        wx.stopPullDownRefresh()
        wx.hideLoading()
      }, 500)
    });

  },
  getNewsDetail(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {       
        id: this.data.newsId
      },
      success: res => {
        let result = res.data.result;
        result.date = result.date.split('T')[1].substr(0, 5);
        this.setData({
          newsDetail:result
        })
        
      },
      complete: () => {
        callback && callback()

      }
    })
  }
})