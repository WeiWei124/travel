<template>
	<div class="login">
		<back></back><div class="top">酒店查询</div>
		<div class="login-main">
			 <div class="inputs">
			 	<input type="text" placeholder="请输入用户名" v-model="name">
			 	<input type="text" placeholder="请输入密码" v-model="password">
			 	<div class="hint" v-if="bool">密码或用户名错误</div>
			 </div>
			 <button @click="admin(name,password)">点击登录</button>
			 <p class="register">点击注册</p>

		</div>
	</div>
</template>
<script>
	import back from "./back"
	export default{
		components:{
			back
		},
		data(){
			return{
				name:"",
				password:"",
				bool:false
			}
		},
		methods:{
			admin(name,password){
				this.$http({
					url:"/api/admin",
					method:"POST"
				})
				.then(function(res){
					// console.log(name+","+password)
					let arr=res.body.admin
					let len=res.body.admin.length
					for(var i = 0;i < len; i++){
						if(name==arr[i].name && password==arr[i].password){
							localStorage.setItem("lastname",name);
							this.$router.go(-1)
						}else{
							this.bool=true
						}
					}
				},function(err){
					console.log(err)
				})
			}
			
		}
	}
</script>
<style scoped>
	.inputs{
		margin-top: 1rem;
		border:1px solid #1bcb66;
		overflow: hidden;
		width: 80%;
		margin-left: 10%;
		border-radius: .1rem;
	}
	.inputs input{
		height: 1rem;
		outline: none;
		float: left;
		border: none;
		width: 90%;
		padding:0 5%
	}
	.inputs input:first-child{
		border-bottom: 1px solid #1bcb66
	}
	.hint{
		position: absolute;
		font-size: .3rem;
		color: red;
		top: 4rem;
		z-index: 1000
	}
	button{
		color: #fff;
		background: #1bcb66;
		border: none;
		width: 80%;
		margin-left: 10%;
		height: 1rem;
		border-radius: .1rem;
		outline: none;
		font-size: .35rem;
		margin-top: .8rem
	}
	.register{
		float: right;
		font-size: .3rem;
		color: red;
		margin: .3rem 10% 0 0 
	}
</style>