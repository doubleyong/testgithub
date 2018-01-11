Page({
  data: {
    title: "今天是day02",
    sex: 1,
    score: 80,
    isShow: false,
    list: [{
      name: "doubleyong", age: 18
    },
    {
      name: "sunshine", age: 10
    }, {
      name: "fullmoon", age: 50
    }]
    ,
    switchArr:[
      { id:0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ]
  
  },
  addSwitch(){
    //.concat：联接
    //var newAtt = this.data.switchArr.concat([this.data.switchArr.length]);
    var newArr = [{ id: this.data.switchArr.length},...this.data.switchArr];

    this.setData({ switchArr: newArr});
  },
  changeSate() {
    //  this.isShow = !this.isShow;
    this.setData({ isShow: !this.data.isShow });
  }
})