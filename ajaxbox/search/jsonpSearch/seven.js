

//1.点击图标出现搜索框
$(document).ready(function(){
    $('.img').on("click",function(){
       $('.img').css("display","none");
          $(".search-text").fadeIn(400);
    });
//监听输入框回车事件

$(".searchWord").keydown(function(event){
    if(event.keyCode==13){
        var keyword=$(".searchWord").val();
        if(keyword){
            $(".foot").css("display","none");

            $(".search").animate({
                left:"600px",
                top:"50px"
            },500);
            $(".imgIcon").animate({
                left:"120px",
                top:"-20px"
            },500);
            getFromWiki(keyword);
        }
    }
});

var getFromWiki=function(keyword){
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+keyword+"&inprop=url&format=json",
        data: "data",
        dataType: "jsonp",
        success: function (response) {
             showResult(response,keyword);
        } ,error:function(){
                 alert("Sorry!there is not found!!");
        }
    });
    var showResult=function(response,keyword){
        // console.log(typeof response);
        // console.log(response);
        $('.search-ul').html("");
        $(".search-ul").css( {fontSize:"16px",
        color:"#fff"});
        if(response.query.search.length==0){
            var output='';
            output+='<p>SORRY</p>'+'<p>NO FOUND</p>';
            $('.search-ul').html(output);
            $(".search-ul").css({
                            fontSize:"20px",
                            color:"pink"
                        });
        } 
   
      for(var i=0;i<response.query.search.length;i++){
          var outputs=''
          outputs+='<a class="search-link" href="https://en.wikipedia.org/wiki/'+response.query.search[i].title+'" target="_blank">';
          outputs+='<li class="search-li"><h3>'+response.query.search[i].title+'</h3>';
          outputs+='<p class="search-abs">'+response.query.search[i].snippet+'</p>';
          outputs+='<p class="search-time">'+response.query.search[i].timestamp+'</p></li></a>'
          $(".search-ul").append(outputs);
      }
    }
    }
});

