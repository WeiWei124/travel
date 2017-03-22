<template>
	<div class="main">
		<section>
			<router-view></router-view>
		</section>
		<footer>
			<router-link to="/home">
				<span class="fa fa-home"></span>
				首页
			</router-link>
			<router-link to="/indent">
				<span class="fa fa-print"></span>
				订单
			</router-link>
			<router-link to="/myself">
				<span class="fa fa-user"></span>
				个人
			</router-link>
			<router-link to="/more">
				<span class="fa fa-ellipsis-h"></span>
				更多
			</router-link>
		</footer>
	</div>
	
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
	.main{
		height: 100%;
		display: flex;
		flex-direction:column;
	}
	section{
		flex:1;
		display: flex;
		flex-direction:column;
	}
	footer{
		height: .96rem;
		font-size: .2rem;
	}
	footer a{
		float: left;
		width: 25%;
		height: 100%;
		text-align: center;
	}
	footer span{
		font-size: .4rem;
		display: block;
		margin-top: .17rem;
	}
	footer .router-link-active{
		color: #66c665;
	}
</style>
