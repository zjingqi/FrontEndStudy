/**
 1. I shall not waste my days in trying to prolong them.
                                  - Ian L. Fleming
                                  （347cf73）
2.Maybe this world is another planet's Hell.
                                    - Aldous Huxley                          
                                    （background-color: rgb(155, 89, 182);）
3.Louis, I think this is the beginning of a beautiful friendship.
                                    - Casablanca
                                    （background-color: rgb(251, 105, 100);）
4.Say hello to my little friend!
                                    - Scarface                                    
                                    （background-color: rgb(155, 89, 182);）
5.Whether you think that you can, or that you can't, you are usually right.
                                    - Henry Ford
                                        （background-color: rgb(22, 160, 133);）
6.Frankly, my dear, I don't give a damn.
                                    - Gone With the Wind
                                    background-color: rgb(39, 174, 96);                                    
 
 color: rgb(119, 177, 169)
                                    */
var color;
function setBackground(i){
    switch(i){
        case 0:
            color='rgb(251, 105, 100)';//red
            break;
        case 1:
            color='rgb(119, 177, 169)';
            break;    
        case 2:
            color='rgb(39, 174, 96)';//green
            break;
        case 3:
            color='rgb(155, 89, 182)';//purple
            break;
        case 4:
            color='rgb(22, 160, 133)';
            break;3
      
        case 5:
            color='rgb(155, 89, 182)';
            break;
    }
}
var quotes;
var author;
function setQuote(i){
    switch(i){
        case 0:
            quotes='I shall not waste my days in trying to prolong them.';//red
            author='- Ian L. Fleming';
            break;
        case 1:
            quotes="Maybe this world is another planet's Hell.";
            author=' - Aldous Huxley';
            break;    
        case 2:
            quotes='.Louis, I think this is the beginning of a beautiful friendship.';
            author='- Casablanca';
            break;
        case 3:
            quotes='Say hello to my little friend!';        
            author='- Scarface';
            break;
        case 4:
            quotes="Whether you think that you can, or that you can't, you are usually right";
            author=' - Henry Ford';
            break;
      
        case 5:
           quotes="Elementary, my dear Watson.";
           author='- The Adventures of Sherlock Hol';
           break;
    }
}
$(function(){

    function showIn(){
        $('.yuju p,.quote-author p').fadeIn(500);
    }
    var count=0;
    $('.send').on('click',function(){

        $('.yuju p,.quote-author p').fadeOut(500,function(){
            
            count%=6;
            setBackground(count);
            setQuote(count);
            $('body,#qq-quote,#weChat-quote,.send').css(
                'background-color',color
            ) ; 
    
            $('.yuju p').text(quotes);
            $('.quote-author p').text(author);
            $('.quote p').css({
                color:color
            });
            showIn();            
        }); 
        count++;
    });
})

function shareToQq(title,url,picurl){
    var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+title+'&url='+url+'&pics='+picurl;
    window.open(shareqqzonestring,'newwindow','height=400,width=400,top=100,left=100');
    }
    var cnt=$('.yuju p,.quote-author p').html();

    function subinfo(){
        shareToQq(cnt,"www.baidu.com","http://aladdin-vray.oss-cn-beijing.aliyuncs.com/Other/80de988c-ad11-449b-af48-b5341c957668.jpg");
    }
$('#qq-quote').on('click',function(){
subinfo();
    
});