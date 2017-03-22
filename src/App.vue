<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
@import "./css/font-awesome.css";
@import '~vux/src/styles/index.less';
*{
  margin: 0;
  padding: 0
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'microsoft yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction:column ;
}
a{
	color: #000;
	text-decoration: none;
}
.top{
		height: .86rem;
		background: #1ebf62;
		font-size: .4rem;
		text-align: center;
		color: #fff;
		line-height: .86rem;
	}
</style>
