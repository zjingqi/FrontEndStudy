var btn1=document.getElementsByClassName('btn1')[0];
var btn2=document.getElementsByClassName('btn2')[0];

var input=document.getElementsByTagName('input')[0];
var content=document.getElementsByTagName('div')[0];
var count=0;

function changeColor(temp,pp){
    switch(temp){
        case 0:
            pp.style.color='blue';
            break;
        case 1:
            pp.style.color='red';
            break;
        case 2:
            pp.style.color='darkorange';
            break;
        case 3:
            pp.style.color='chartreuse';
            break;
        case 4:
            pp.style.color='brown';
            break;
        case 5:
            pp.style.color='darkgreen';
            break;
        case 6:
            pp.style.color='purple';
            break;
        case 7:
            pp.style.color='brown';
            break;
        case 8:
            pp.style.color='darkred';
            break;
        case 9:
            pp.style.color='aquamarine';
            break;
    }
    
}
var pre='';
function run(){
    if(count>=10)count=0;
    var danmu=input.value;
    var p=document.createElement('p');
    p.style.position='absolute';
    p.style.fontSize='25px';
    p.innerHTML=danmu;
    changeColor(count,p);
    content.appendChild(p);
    var tempLen=danmu.length;
    p.style.right=-10*tempLen+'px';
    p.style.top=count*50+'px';
    var speed=1;
    var time1=setInterval(function(){
        speed+=speed/50;
        p.style.right=parseInt(p.style.right)+speed+'px';
        p.style.whiteSpace= 'nowrap';
        if(p.style.right=='1300px'){
            clearInterval(time1);
        }
    },100); 
     count++;
     pre=input.value;
     input.value='';
}

var time=setInterval(function(){
   
    if(input.value==''){
        input.value=pre;
        run();
    }
    
},2000);
btn1.onclick=function(){
 run();
}
document.onkeyup=function(event){
    if(event.key=='Enter'){
        run();
    }
}
btn2.onclick=function(){
    content.innerHTML='';
}