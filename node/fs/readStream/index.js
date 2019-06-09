var fs = require("fs");

// var rs = fs.createReadStream("../data.txt",{start:9,end:11,encoding:"utf-8"});
var rs = fs.createReadStream("../data.txt","utf-8");
var ws = fs.createWriteStream("../temp.txt"，{
    defaultEncoding:"utf-8",
    flags:"a"//在原内容下附加，w是把原内容覆盖
});
rs.pipe(ws);//把rs内容读取到ws中，是下面的简写
rs.on("data",function(data){//把从rs读出的每节数据
    ws.write(data);//写到ws中
})
rs.on("end",function(){//读取结束时
    ws.end();//写入也结束
})


// rs.on('data',function(data){//监听读取事件
//     console.log('111');
//     // console.log(data);
// })
var chunk = "";
rs.on("readable",function(){//读取完一节数据触发
    var data = rs.read();//继续读下去
    if(data){
        chunk+=data;
    }
})

rs.on("end",function(){
    console.log("end!!");
});

