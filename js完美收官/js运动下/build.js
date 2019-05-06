

function buildHtml(obj,targetWidth, targetHeight){
    obj.className = 'wrapper';
    obj.style.width = targetWidth + 'px';
    obj.style.height = targetHeight + 'px';
    var ul = document.createElement("ul");
    obj.appendChild(ul);
    ul.className = "sliderPage";
    var len = arr.length;
    for(var i = 0;i <= len; i++){
        var li = document.createElement('li');
        var img =document.createElement('img');
        img.style.width = '100%';
        img.style.height = '100%';
        if(i == len){
            img.src = arr[0];
        }
        else img.src= arr[i];
        li.appendChild(img);
        li.style.width = targetWidth + 'px';
        li.style.height = targetHeight + 'px';
        ul.appendChild(li);
        ul.style.width = targetWidth * (len+1) + 'px';
        ul.style.height = targetHeight + 'px';
    }
    var div1 = document.createElement('div');
    div1.className = 'btn leftBtn';
    obj.appendChild(div1);
    div1.innerHTML='<';
    var div2 = document.createElement('div');
    div2.className='btn rightBtn';
    obj.appendChild(div2);
    div2.innerHTML='>';
    var div3 = document.createElement('div');
    div3.className = 'sliderIndex';
    
    for(var i = 0;i < len; i++){
        var span = document.createElement('span');                
        if(i == 0){
            span.className = 'active';
        }
        div3.appendChild(span);
    }
    obj.appendChild(div3);
}