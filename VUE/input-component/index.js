Vue.component('input-number',{
    template:'\
        <div class="input-number">\
            <input type="text" :value="currentValue" @change="handleChange" @keyup="addkeyEvents">\
            <button @click="handleDown">-</button>\
             <button @click="handleUp">+</button>\
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
        },
        step:{
            type:Number,
            default:Infinity
        }
    },
    data: function(){
        return {
            currentValue:this.value
        }
    },
    watch:{
        value:function(val){//父组件值改变
            this.updateValue(val);//更新子组件的值
        },
        currentValue:function(val){//子组件值改变
             console.log('子组件值改变');
            this.$emit('input',val);//更新父组件
            this.$emit('change',val);
        }
    },
    methods:{
        updateValue:function(val){
            if(isNaN(val)==false){
                if(val>this.max)val=this.max;
                else if(val<this.min)val=this.min;
                this.currentValue=val;
            }
        },
        handleUp:function(){
            // this.currentValue+=1;
            this.currentValue+=Number(this.step);

        },
        handleDown:function(){
            this.currentValue-=1;
            // this.currentValue-=Number(this.step);

        },
        handleChange:function(event){
            var val=event.target.value.trim();
            this.currentValue=Number(val);
        },
        addkeyEvents:function(event){
            if(event.keyCode===38){
                var val=event.target.value.trim();
                val=Number(val)+Number(this.step);
                this.currentValue=val;
                this.$emit('input',val);//更新父组件 
            }
            else if(event.keyCode===40){
                var val=event.target.value.trim();
                val=Number(val)-1;
                this.currentValue=val; 
                this.$emit('input',val);//更新父组件
            }
          

        }
    }
});
var app=new Vue({
    el:'#app',
    data:{
        value:10
    }
})
