
var vm=new Vue({
	el:'.main',
	data:{
		list:[],
		inputValue:'',
		editingTodo:''
	},
	computed:{
		filterList(){
			return this.list.filter(function(item){
				return !item.checked
			}).length
		}
	},
	methods:{
		addTodo(){
			if(this.inputValue){
				this.list.push({
					title:this.inputValue,
					checked:false
				})
			}
			this.inputValue=''		
		},
		editTodo(item){
			this.editingTodo=item
		},
		destory(item){
			var index=this.list.indexOf(item);
			this.list.splice(index,1);
		},
		completed(item){
			this.editingTodo='';
		},
		editedTodo(){
			this.editingTodo=''
		}
	},
	directives:{
		focus:{
			update(el,binding){
				if(binding.value){
					el.focus();
				}
			}
		}
	}
})
































// var list=[
// 	{
// 		title:'apple',
// 		checked:true
// 	},
// 	{
// 		title:'banana',
// 		checked:false
// 	},
// 	{
// 		title:'orange',
// 		checked:false
// 	}
// ]

// var setLocal={
// 	save(key,value){
// 		localStorage.setItem(key,JSON.stringify(value))
// 	},
// 	get(key){
// 		return JSON.parse(localStorage.getItem(key));
// 	}
// }
// var list=setLocal.get("todo")||[];
// var vm=new Vue({

// 	el:'.main',
// 	data:{
// 		list:list,
// 		inputValue:'',
// 		editingTodo:'',//正在编写的内容
// 		beforeEditing:''
// 	},
// 	watch:{
// 		list:{
// 			deep:true,
// 			handler:function(){
// 				setLocal.save("todo",this.list);
// 			}
// 		}
// 	},
// 	computed:{
// 		filterList(){
// 			return this.list.filter(function(item){
// 				return !item.checked
// 			}).length
// 		}	
// 	},
// 	methods:{
// 		addTodo(){
// 			this.list.push({
// 				title:this.inputValue,
// 				checked:false
// 			})
// 			this.inputValue='';//清空输入框		
// 		},  
// 		editTodo(item){//这个值是在点击时刻赋的 并不实时
// 			this.editingTodo=item
// 			this.beforeEditing=item.title
// 		},
// 		editedTodo(){
// 			this.editingTodo=''
// 		},
// 		deleteTodo(index){
// 			this.list.splice(index,1);
// 		},
// 		cancelTodo(item){
// 			item.title=this.beforeEditing;
// 		}

// 	},

// 	directives:{
// 		focus:{
// 			update(el,binding){		
// 				if(binding.value){
// 					el.focus();					
// 				}
// 			}
// 		}
	
// 	}
// })

