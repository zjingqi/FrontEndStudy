// 1.文件操作
const fs = require("fs");
var path = require("path");
var  stat = fs.statSync("./data.txt");
console.log(stat);
console.log(stat.isFile());

if(stat.isFile()){
    fs.readFile("./data.txt","utf-8",function(err,data){//异步
        if(err){
            console.log('error');
            return ;
        }
        // console.log(data);
        // fs.writeFile('./temp.txt',data,"utf-8",function(){//在temp.txt中写入获取的数据
        //     console.log('write success!!');
        // })
        fs.mkdir('./dir2',function(){
            fs.writeFile('./dir2/temp.txt','aaabbbcc',"utf-8",function(){
                console.log("make and write success!!");
            })
        })
    });
}

var data = fs.readFileSync('./data.txt','utf-8');//同步获取文件
console.log("sync" + data);

/**
 * 文件夹操作
 */

//  fs.mkdir("./dir",function(){
//      console.log('make dir success');
//  })
/**
 * 文件夹读操作
 */
// var fs = require("fs");
fs.readdir("./dir2",function(err,data){
    if(err){
        console.log(err);
        return ;
    }
    // console.log(data);
    data.forEach(function(item){
        var stat  = fs.statSync("./dir2/"+item);
        console.log(item + '---' + stat.isFile());
    })
})