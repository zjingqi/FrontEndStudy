var mainPic = document.getElementsByClassName('main-pic')[0];
var picWidth = mainPic.offsetWidth;
console.log(picWidth);
var div = document.getElementsByClassName('turnPic')[0];
var arr=["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","./images/img2.jpg"];  
div.createTurnPage(arr,picWidth,300); 
