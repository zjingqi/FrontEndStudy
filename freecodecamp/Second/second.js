

var button=document.getElementsByTagName('button');
var item=document.getElementsByClassName('item')[0];
var xx=0,yy=0;
button[1].onclick=function(){
    if(scrollY>600){
        var time2=setInterval(function(){
            window.scrollBy(xx,yy-=1);
            console.log(scrollY);
            if(scrollY>=500&&scrollY<=550){
                clearInterval(time2);
                yy=0;
            }
        },1);
    }
    else if(scrollY<600){
        var time1=setInterval(function(){
        window.scrollBy(xx,yy+=1);
            console.log(scrollY);
            if(scrollY>=500&&scrollY<=550){
                clearInterval(time1);
                yy=0;
            }
        },1);
    }
}
button[2].onclick=function(){
    if(scrollY>980){
        var time2=setInterval(function(){
            window.scrollBy(xx,yy-=1);
            if(scrollY>=980&&scrollY<=1010){
                clearInterval(time2);
                yy=0;
            }
        },1);
    }
    else if (scrollY<980){
    var time1=setInterval(function(){
        window.scrollBy(xx,yy+=1);
        if(scrollY>=980&&scrollY<=1010){
            clearInterval(time1);
            yy=0;
       }
    },1);
    }
}
var dispears=document.getElementsByClassName('dispear');
function test(temp,id){
    temp.onfocus=function(){
        console.log('??????');
        if(temp.value==temp.name){
            temp.value='';
        }
        temp.onkeydown=function(){
             if(temp.value==temp.name){
                temp.value='';
            }
        }
    }
    temp.onblur=function(){
        dispears[id].style.color='lightyellow';
        if(temp.value==''){
            temp.value=temp.name;
        }
    }
    temp.oninput=function(){
        if(temp.value==''){
            temp.value=temp.name;
        }
        else if(temp.value==temp.name){
            temp.value='';
        }
        dispears[id].style.display='block';
    }
}
var inputs=document.getElementsByTagName('input');
console.log(inputs);
var len=inputs.length;
for(var i=0;i<len-1;i++){
  test(inputs[i],i);
}

var a=[];
var b=[];

function Prime(n){
    var t=0;
    for(var i=0;i<10000;i++){b[i]=1; }//???????
    b[0]=0;
    b[1]=0;

    for(var i=2;i<=100000;i++){
        if(b[i]){
            a[t++]=i;
            for(var j=2*i;j<=n;j+=i){//????
                b[j]=0;
            }
        }
    }
}
