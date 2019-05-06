
Vue.component('tabs',{
	name:'tabs',
	template:'\
		<div class="tabs">\
			<div tabs-bar>\
				<div :class="tabCls(item)"\
				     v-for="(item,index) in navList"\
					 @click="handleChange(index)">\
					{{ item.label }}\
				</div>\
			</div>\
			<div tabs-content>\
				<slot></slot>\
			</div>\
		</div>',
	props:{
		value:{
			type:[String,Number]
		}
	},
	data:function(){
		return{
			currentValue:this.value,
			navList:[]
		}
	},
	methods:{
		tabCls:function(item){
			return[
				'tabs-tab',
				{
					'tabs-tab-active': item.name===this.currentValue
				}
			]
		},
		handleChange:function(index){
			var nav=this.navList[index];
			var name=nav.name;
			this.currentValue=name;//点击后子组件的值改变
		},
		getTabs:function(){//找出所有pane组件
			return this.$children.filter(function(item){
				return item.$options.name='pane';
			})
		},

		updateNav:function(){
			this.navList=[];
			var _this=this;//获取navList数组
			this.getTabs().forEach(function(pane,index){
				_this.navList.push({
					label:pane.label,
					name:pane.name||index
				});
			});
			this.updateStatus();
		},
		updateStatus:function(){
			var tabs=this.getTabs();
			var _this=this;
			tabs.forEach(function(tab){
				return tab.show=tab.name===_this.currentValue;
			})
		}
	},

	watch:{
		value:function(val){
			this.currentValue=val;
		},
		currentValue:function(){
			this.updateStatus();
		}
	}
})


// Vue.component('tabs',{
// 	template:'\
// 		<div class="tabs">\
// 		 <div class="tabs-bar">\
// 			<div :class="tabCls(item)"\
// 				v-for="(item,index) in navList"\
// 				@click="handleChange(index)">\
// 				{{ item.label }}\
// 			</div>\
// 		 </div>\
// 		 <div class="tabs-content">\
// 				<slot></slot>\
// 		 </div>\
// 		</div>',
// 	props:{
// 		value:{
// 			type:[String,Number]
// 		}
// 	},
// 	data :function(){
// 		return{
// 			currentValue:this.value,
// 			navList:[]
// 		}
// 	},
// 	methods:{
// 		tabCls:function(item){
// 			console.log('执行添加属性');
// 			return[
// 				'tabs-tab',
// 				{
// 					'tabs-tab-active':item.name===this.currentValue
// 				}
// 			]
// 		},	
// 		handleChange:function (index) {
// 			console.log('点击了'+index+'标签');
// 			var nav=this.navList[index];
// 			var name=nav.name;
// 			this.currentValue=name;
// 			// this.$emit('input',name);
// 			// this.$emit('on-click',name);
// 		},
// 		getTabs () {
// 			return this.$children.filter(function(item) {
// 				return item.$options.name==='pane';
// 			});
// 		},
// 		updateStatus(){
// 			var tabs=this.getTabs();
// 			var _this=this;
// 			tabs.forEach(function (tab) {
// 				return tab.show=tab.name===_this.currentValue;
// 			})
// 		},
// 		updateNav(){
// 			this.navList=[];
// 			var _this=this;
// 			this.getTabs().forEach(function(pane,index){
// 				_this.navList.push({
// 					label:pane.label,
// 					name:pane.name||index
// 				});
// 				if(!pane.name) pane.name=index;
// 				if(index===0){
// 					if(!_this.currentValue){
// 						_this.currentValue=pane.name||index;
// 				    }
// 				}
// 			});
// 			this.updateStatus();
// 		}
// 	},
// 	watch:{
// 		value:function(val){
// 			this.currentValue=val;
// 		},
// 		currentValue:function(){
// 			this.updateStatus();
// 		}
// 	}
// })


// Vue.component('tabs',{
// 	template:'\
// 		<div class="tabs">\
// 			<div class="tabs-bar">\
// 				<div\
// 					:class="tabCls(item)" \
// 					v-for="(item,index) in navList"\
// 					@click="handleChange(index)">\
// 					{{item.label}}\
// 				</div>\
// 			</div>\
// 			<div class="tabs-content">\
// 				<slot></slot>\
// 			</div>\
// 		</div>',
// 	props:{
// 		value:{
// 			type:[String,Number]
// 		}
// 	},
// 	data:function(){
// 		return {
// 			currentValue:this.value,
// 			navList:[]
// 		}
// 	},
// 	methods:{//为当前选中的项添加属性值
// 		tabCls:function(item){
// 			return [
// 				'tabs-tab',
// 				{
// 					'tabs-tab-active':item.name===this.currentValue
// 				}
// 			]
// 		},
// 		getTabs(){//选出所有pane组件
// 			return this.$children.filter(function(item){
// 				return item.$options.name==='pane';
// 			});
// 		},
// 		updateNav(){//
// 			this.navList=[];
// 			var _this=this;
// 			this.getTabs().forEach(function(pane,index){
// 				_this.navList.push({
// 					label:pane.label,
// 					name:pane.name||index
// 				});
// 				if(!pane.name)pane.name=index;
// 				if(index===0){
// 					if(!_this.currentValue){
// 						_this.currentValue=pane.name||index;
// 					}
// 				}
// 			});
// 			this.updateStatus();
// 		},
// 		updateStatus(){
// 			var tabs=this.getTabs();
// 			var _this=this;
// 			tabs.forEach(function(tab){//显示当前选中的tab对应的pane组件
// 				return tab.show=tab.name===_this.currentValue;
// 			})
// 		},
// 		handleChange:function(index){
// 			var nav=this.navList[index];
// 			var name=nav.name;
// 			this.currentValue=name;
// 			this.$emit('input',name);
// 			this.$emit('on-click',name);
// 		}
// 	},
// 	watch:{
// 		value:function(val){
// 			this.currentValue=val;
// 		},
// 		currentValue:function () {
// 			this.updateStatus();
// 		}
// 	}
// })



