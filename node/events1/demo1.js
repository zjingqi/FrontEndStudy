
var event = require("events") ;//引入模块（核心模块）
var event1 = new event();
event1.on('call',function(name, age){//注册事件
    console.log('calling',name, age);
})
event1.on('show',function(name,age){
    console.log("show1",name,age);
})
event1.on('show',function(){
    console.log("show2");
})
event1.prependListener('show',function(){//事件添加到事件队列头部
    console.log("show3");
})
event1.emit("call",'zq',18);//emit触发事件
event1.emit("call",'zq',19);

// event1.emit("show")
event1.emit("show")
