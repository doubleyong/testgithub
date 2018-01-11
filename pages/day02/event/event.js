// pages/day02/event/event.js
Page({

  handleTap1(e){
    console.log("爷爷被点击了");
  },
  handleTap2(e) {
    console.log("------------------");
    console.log(e);
    console.log("爸爸被点击了");
  }
  ,
  handleTap3(e) {
    console.log(e.target.dataset.id);
    console.log(e);
    console.log("孩子被点击了");
  }
})