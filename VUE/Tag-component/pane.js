

Vue.component('pane',{
	name:'pane',
	template:'\
		<div class="pane" v-show="show">\
			<slot></slot>\
		</div>',
	props:{
		name:{
			type:String
		},
		label:{
			type:String,
			default:''
		}
	},
	data:function(){
		return {
			show:true
		}
	},
	methods:{
		updateNav :function(){
			this.$parent.updateNav();
		}
	},
	mounted(){
		this.updateNav();
	}	
})



// Vue.component('pane',{

// 	name:'pane',
// 	template:'\
// 		<div class="pane" v-show="show">\
// 			<slot></slot>\
// 		</div>',
// 	props:{
// 		name:{
// 			type:String
// 		},
// 		label:{
// 			type:String,
// 			default:''
// 		}
// 	},
// 	data:function(){
// 		return{
// 			show:true
// 		}
// 	},
// 	methods:{
// 		updateNav(){
// 			this.$parent.updateNav();
// 		}
// 	},
// 	watch:{
// 		label(){//调用方法更新标题
// 			this.updateNav();
// 		}
// 	},
// 	mounted (){
// 		this.updateNav();
// 	}
// })









// Vue.component('pane',{
// 	name:'pane',
// 	template:'\
// 		<div class="pane" v-show="show">\
// 			<slot></slot>\
// 		</div>',	
// 	props:{
// 		name:{
// 			type:String
// 		},
// 		label:{
// 			type:String,
// 			default:''
// 		}
// 	},
// 	data:function(){
// 		return {
// 			show :true
// 		}
// 	},
// 	methods:{
// 		updateNav(){
// 			this.$parent.updateNav();
// 		}
// 	},
// 	watch:{
// 		label(){
// 			this.updateNav();
// 		}
// 	},
// 	mounted(){
// 		this.updateNav();
// 	}

// })

