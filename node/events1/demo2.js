

/**
 * demo2中的实现原理
 */
function eventEmit(){
    this.eventList = {};
}
eventEmit.prototype.on = function(eventname,callback){
    if(!this.eventList[eventname]){
        this.eventList[eventname] = [];
    }
    this.eventList[eventname].push(callback);
}
eventEmit.prototype.emit = function(eventname,...arg){
    // var arg = Array.prototype.slice.call(arguments,1);
    console.log(arg);
    var _this = this;
    var arr = this.eventList[eventname];
    arr.forEach(function(item){
        item.apply(_this,arg);
    })
}
var cb1 = function(){
    console.log('calling');
}

var event1 = new eventEmit();
event1.on('call',cb1)
event1.on('show',function(name,age){
    console.log("showing",name,age);
})

event1.removeListener("call",cb1);//删除事件
event1.removeAllListeners("call")//删除事件名为call的所有事件
event1.emit("call",'zzqq',18);
event1.emit("show",'qqqzzz',19);