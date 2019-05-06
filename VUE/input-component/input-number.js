

function isValueNumber(value){
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value+'');
}

Vue.component('input-number',{
    template: '\
        <div class="input-number">\
        <input \
            type="text"\
            :value="currentValue"\
            @change="handleChange">\
        <button \
            @click="handleDown"\
            :disabled="currentValue<=min">-</button>\
        <button \
            @click="handleUp"\
            :disabled="currentValue>=max">+</button>\
        </div>',
    props:{
        value:{
            type:Number,
            default:0
        },
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default:-Infinity
        }
    },
    data: function(){
        return{
            currentValue:this.value//引用父组件的value
        }
    },
    // watch:{
    //     currentValue:function(val){
    //         this.$emit('input',val);
    //         this.$emit('change',val);
    //     }
    // }
    watch:{
        currentValue:fucntion(val){
            this.$emit('input',val);
            this.$emit('change',val);
        },
        value:fucntion(val){
            this.updateValue(val);
        }
    },
    methods:{
        
    }
})


// function isValueNumber(value){
//     return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value+'');
// }

// Vue.component('input-number',{
//     template:'\
//             <div class="input-number">\
//             <input \
//                 type="text"\
//                 :value="currentValue"\
//                 @change="handleChange">\
//             <button \
//                 @click="handleDown"\
//                 :disabled="currentValue<=min">-</button>\
//             <button \
//                 @click="handleUp"\
//                 :disabled="currentValue>=max">+</button>\
//             </div>',
//     props:{//声明需要从父级接收的数据
//         max:{
//             type:Number,
//             default:Infinity
//         },
//         min:{
//             type:Number,
//             default:-Infinity
//         },
//         value:{
//             type:Number,
//             default:0
//         }
//     },
//     data:function(){
//         return {
//             currentValue:this.value
//         }
//     },
//     watch:{
//         currentValue:function(val){
//             console.log("点击了按钮");
//             this.$emit('input',val);
//             this.$emit('on-change',val);
//         },
//         value:function(val){
//             console.log('输入框内改变');
//             this.updateValue(val);            
//         }
//     },
//     methods:{
//         handleDown:function(){
//             if(this.currentValue<=this.min) return;
//             this.currentValue-=1;
//         },
//         handleUp:function(){
//             if(this.currentValue>=this.max)return;
//             this.currentValue+=1;
//         },
//         updateValue:function(val){
//             if(val>this.max) val=this.max;
//             if(val<this.min) val=this.min;
//             this.currentValue=val;
//         },
//         handleChange:function(event){
//             var val=event.target.value.trim();
//             var max=this.max;
//             var min=this.min;
//             if(isValueNumber(val)){
//                 val=Number(val);
//                 this.currentValue=val;
//                 if(val>max){
//                     this.currentValue=max;
//                 }
//                 else if(val<min){
//                     this.currentValue=min;
//                 }
//             }
//             else{
//                 event.updateValue(this.value);
//             }
//         }
//     },
//     mounted:function(){
//         this.updateValue(this.value);
//     }
// })