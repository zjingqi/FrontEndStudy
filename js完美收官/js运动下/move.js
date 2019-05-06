
        //封装获得非行间样式的属性
        function getStyle (obj, attr){//求得某对象中某属性的值
            if(obj.currentStyle){
                return obj.currentStyle[attr];
            }else {
                return window.getComputedStyle(obj, false)[attr];
            }
        }
        //封装把某对象的属性渐进为目标属性的方法
        function startMove(obj, json, callback){
            clearInterval(obj, obj.timer);
            var isSpeed,sur
            obj.timer=setInterval(function(){
                var bStop = true;
                for(var attr in json){  //遍历所有属性              
                    if(attr == 'opacity'){                 
                        sur = parseFloat(getStyle(obj, attr)) * 100;//得到当前的透明度并*100
                    }else{
                        sur = parseInt(getStyle(obj, attr));
                    }
                    isSpeed = (json[attr] - sur) / 7;
                    isSpeed = isSpeed > 0 ? Math.ceil(isSpeed) : Math.floor(isSpeed);
                    if(attr == 'opacity'){
                        obj.style.opacity = (sur + isSpeed) / 100;//设置新的透明度
                    }else {
                        obj.style[attr] = sur + isSpeed + 'px';
                    }
                    if(Math.floor(Math.abs(json[attr]-sur))!=0){
                        bStop = false;                        
                    }                 
                }
                if(bStop){
                    clearInterval(obj.timer);
                    typeof callback == 'function' ? callback() : '';
                }
            },30)
        }