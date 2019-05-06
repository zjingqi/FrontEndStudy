Vue.component('tabs',{
	template:`
		<div class="tabs">
			<div class="tabs-bar" >
				<div v-for="(item,index) in navList"
					:class="tabCls(item)"
					@click="handleChange(item)">
				    {{ item.label }}
				</div>
			</div>
			<div class="tabs-content">
				<slot></slot>
			</div>
			<button @click="destroy">-</button>
		</div>`,
	
	props:{
		value:{
			type:[String,Number]
		},

	},
	data:function(){
		return {
			navList:[],
			currentValue:this.value,
		}
	},
	methods:{
		tabCls(item){
			return [
			     'tabs-tab',
			     {
			     	'tabs-tab-active':item.name===this.currentValue
			     }
			]
		},
		getTabs(){//得到所有pane标签
			return this.$children.filter(function(item){
				return item.$options.name='pane';
			})
		},
		updateNav(){//将所有表头加入数组以便上面遍历显示
			this.navList=[];
			var _this=this;
			this.getTabs().forEach(function(pane,index){
				_this.navList.push({
					label:pane.label,
					name:pane.name||index
				})
				if(!pane.name){
					pane.name=index;
				}
				if(!index){
					
					if(!_this.currentValue){	
						_this.currentValue=pane.name||index;
					}
				}
			});
			this.updateStatus();
		},
		updateStatus(){
			var tabs=this.getTabs();
			var _this=this;
			tabs.forEach(function(tab){
				return tab.show=tab.name===_this.currentValue;
			})
		},
		handleChange(item){
			this.currentValue=item.name;
		}
	},
	watch:{
		currentValue(){
			this.updateStatus();
		}
	}
})