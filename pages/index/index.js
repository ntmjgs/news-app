Page({
  data:{
    firstnews:{},
    newslist: []
  },
  onLoad(){
    let formerfirst = {
      "id": 1519631218506,
      "title": "外媒称香港回归15年打破“经济将死”预言",
      "date": "09:34",
      "source": "中国新闻网",
      "firstImage": "http://img1.gtimg.com/news/pics/hv1/38/85/1076/69988613.jpg"

    };
    let formerlist = [{
      "id": 1519631218591,
      "title": "实德指媒体窃公司机密 已向某媒体递律师函",
      "date": "2012-04-21T11:32:04.000Z",
      "source": "腾讯财经",
      "firstImage": "http://img1.gtimg.com/finance/pics/hv1/33/207/1023/66573393.jpg"
    },
    {
      "id": 1519631218595,
      "title": "公务员医疗费用成迷 学者呼吁管理应公开透明",
      "date": "2012-02-26T08:13:00.000Z",
      "source": "财新网",
      "firstImage": "http://img1.gtimg.com/finance/pics/hv1/241/102/983/63945826.jpg"
    }]
    let afterlist = formerlist.map((list)=>{
      list.date = list.date.split('T')[1].substr(0,5);
      return list
    })
    this.setData({
      firstnews:formerfirst,
      newslist:afterlist
    })

  }
})