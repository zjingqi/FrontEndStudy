Vue.component('pane',{
	name:'pane',
	template:`
		<div class="pane" v-show="show">
			<slot></slot>			
		</div>
	`,
	props:{
		label:{
			type:String,
			default:''
		},
		name:{
			type:String
		},
	},
	data:function(){
		return {
			show:true
		}
	},
	methods:{
		updateNav(){
			this.$parent.updateNav();
		},

	},
	watch:{
		label(){
			console.log('监听到label变化');
			this.updateNav();
		}
	},
	mounted(){
		this.updateNav();
	},
	// beforeDestroy(){
	// 	console.log('执行销毁');
	// }
})