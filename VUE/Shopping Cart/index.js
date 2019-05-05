
var app=new Vue({
    el:'#app',
    data:{   
        clickallNum:0,
        checkedNames: [],
        list:[      
           [   
               {
                    type:'electronic',
                    id:1,
                    name:'iPhone 7',
                    price:6188,
                    count:1
               },
               {
                   type:'electronic',
                   id:2,
                   name:'iPad Pro',
                   price:5888,
                   count:1                     
               },
               {
                   type:'electronic',
                   id:3,
                   name:'MacBook Pro',
                   price:21488,
                   count:1
               }
           ],
           [
               {
                   type:'daily',
                   id:1,
                   name:'cup',
                   price:100,
                   count:1
               },
               {
                   type:'daily',
                   id:2,
                   name:'shoes',
                   price:500,
                   count:1
               },
               {
                   type:'daily',
                   id:3,
                   name:'cloth',
                   price:1050,
                   count:1
               }
           ],
           [
               {
                   type:'fruits',
                   id:1,
                   name:'apple',
                   price:200,
                   count:1
               },
               {
                   type:'fruits',
                   id:2,
                   name:'banana',
                   price:188,
                   count:1
               },
               {
                   type:'fruits',
                   id:3,
                   name:'Pitaya',
                   price:'350',
                   count:1
               }
           ]

        ]
    },
    computed:{    
        totalPrice:function(){
            var total=0;
            for(var i=0;i<this.list.length;i++){
                for(var j=0;j<this.list[i].length;j++){
                    for(var r=0;r<this.checkedNames.length;r++){
                        if(this.checkedNames[r]==this.list[i][j].name){
                            total+=this.list[i][j].price*this.list[i][j].count;
                        }
                    }  
                }
            }
        return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods:{          
        handleReduce:function(index,indexs){
            this.list[index][indexs].count--;
        },
         handleAdd:function(index,indexs){
            this.list[index][indexs].count++;
        },
        handleRemove:function(index,indexs){
            this.list[index].splice(indexs,1);
        },
        allRefush:function(index){
            this.allclickNum++;
            for(var i=0;i<this.list[index].length;i++){
                var flag=0;
                for(var j=0;j<this.checkedNames.length;j++){
                    if(this.list[index][i].name==this.checkedNames[j]){
                        flag=1;
                    }
                }
                if(!flag){
                    this.checkedNames.push(this.list[index][i].name);
                    flag=1;
                } 
            }
        },
        allThings:function(){
            for(var i=0;i<this.list.length;i++){
                for(var j=0;j<this.list[i].length;j++){
                    var flag=0;
                     for(var r=0;r<this.checkedNames.length;r++){
                        if(this.checkedNames[r]==this.list[i][j].name){
                            flag=1;
                        }
                     }
                    if(!flag){
                        this.checkedNames.push(this.list[i][j].name);
                    }
                }
            }
        }
    }
})











// var app=new Vue({
//     el:'#app',
//     data:{
//         list:[
//             {
//                 id:1,
//                 name:'iPhone 7',
//                 price:6188,
//                 count:1
//             },
//             {
//                 id:2,
//                 name:'iPad Pro',
//                 price:5888,
//                 count:1
//             },
//             {
//                 id:3,
//                 name:'MacBook Pro',
//                 price:21488,
//                 count:1
//             }
//         ]     
//     },
//     computed:{
//         totalPrice:function(){
//             var total=0;
//             for(var i=0;i<this.list.length;i++){
//                 var item=this.list[i];
//                 total+=item.price*item.count;
//             }
//             return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
//         }
//     },
//     methods:{
//         handleReduce:function(index){
//             if(this.list[index].count===1)return ;
//             this.list[index].count--;
//         },
//         handleAdd:function(index){
//             this.list[index].count++;
//         },
//         handleRemove:function(index){
//             this.list.splice(index,1);
//         }
//     }
// });