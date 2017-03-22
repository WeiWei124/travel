<template>
	<div class="myself">
		<div class="top">个人中心</div>
		<div id="myself-main">
			<div class="myself-box">
				<img src="../../static/images/myself.png" alt="" />
				<p class="admin" @click="login" v-if="bool">请先登录</p>
				<p class="admin" @click="login" v-if="!bool">{{user}}</p>
			</div>
			<group>
				<cell v-for="item in show" :title="item.name" is-link></cell>
			</group>
		</div>
		<button class="quit" v-if="!bool" @click="quit">退出登录</button>
	</div>
	
</template>

<script>
import { Group,Cell } from 'vux'
export default {
  name: 'myself',
  components:{
  	Group,
  	Cell
  },
  data () {
    return {
     	show:[{
      			name:"我的收藏"
      		},{
      			name:"我上传的景点照片"
      		},{
      			name:"行程助手"
      		},{
      			name:"常用旅客"
      		},{
      			name:"我的同城故事"
      		}],
      	user:"",
      	bool:true
    }
  },
  methods:{
  	login(){
  		this.$router.push("/login")
  	},
  	quit(){
  		localStorage.removeItem("lastname")
  		this.bool=!this.bool
  	}
  },
  created(){
  	if(localStorage.getItem("lastname")){
  		this.user=localStorage.getItem("lastname")
  		this.bool=!this.bool
  	}
  	// console.log(localStorage.getItem("lastname"))
  }
}
</script>


<style scoped>
	.myself-box{
		height: 2.87rem;
		background: #1ebf62;
		text-align: center;
	}
	.myself-main{
		overflow: auto;
	}
	.myself-box img{
		width: 1.17rem;
		margin-top: .5rem;
	}
	.admin{
		font-size: .22rem;
		color: #fff;
	}
	.quit{
		width: 80%;
		margin-left: 10%;
		height: .8rem;
		outline: none;
		border: none;
		background: #1bcb66;
		font-size: .3rem;
		color: #fff;
		border-radius: .1rem
	}
</style>
