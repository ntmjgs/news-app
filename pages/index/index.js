Page({
  data:{
    firstnews:{},
    news: [],
    navid:'gn' ,
    navItems :[
      { 'id': 'gn', 'text': '国内' },
      { 'id': 'gj', 'text': '国际' },
      { 'id': 'cj', 'text': '财经' },
      { 'id': 'yl', 'text': '娱乐' },
      { 'id': 'js', 'text': '军事' },
      { 'id': 'ty', 'text': '体育' },
      { 'id': 'other', 'text': '其他' }
    ],
    defaultImage:'/images/default.jpg'
  },
  onLoad() {
    this.requestData()
  },
  onTapNews(event){
    let newsId = event.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + newsId,
    })
  },
  //自定义导航栏看不到下拉刷新的... 因此用loading框显示刷新效果
  onPullDownRefresh() {
    wx.showLoading({
      title: '刷新中...',
    })
    this.requestData(() => {
      setTimeout(()=>{
        wx.stopPullDownRefresh()
        wx.hideLoading()
      },500)
    });
  },
  tapNav(event){
    let navid = event.target.dataset.navid;
    this.setData({
      navid: navid
    })
    this.requestData()
  },
  requestData(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: this.data.navid
      },
      success: res => {
        let result = res.data.result;
        if(!!result){
          result = result.map((list) => {
            list.date = list.date.split('T')[1].substr(0, 5);
            return list
          })
          let firstnews = result[0];
          let newslist = result.slice(1);
          this.setData({
            firstnews: firstnews,
            news: newslist
          })
        }
      },
      complete: () => {
        callback && callback()
      }
    })
  }
})