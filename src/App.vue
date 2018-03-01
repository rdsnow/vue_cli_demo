<template>
  <div id="app">
      <img src="http://www.jste.net.cn/cmsplus/images/2014/logo.gif">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/backstage">后台</router-link>
        </li>
        <li>|</li>
        <li>教师培训</li>
        <li>|</li>
        <li>教师会议</li>
        <li>|</li>
        <li>退出系统</li>
      </ul>
    <router-view/>
  </div>

</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  #app {
    color: #034DA4;
    margin: 0 auto;
    width: 1000px;
    overflow: hidden;
  }

  #app ul {
    float: right;
    height: 90px;
    width: 500px;
    padding: 0;
    margin: 0 auto;
  }

  #app img {
    float: left;
  }

  #app ul li {
    line-height: 90px;
    list-style-type: none;
    float: left;
    margin: 0 3px;
  }

  #app ul li a {
    color: #034DA4;
    text-decoration: none;
  }
  #app ul li a:hover {
    color: #034DA4;
    text-decoration: none;
  }
  #app ul li a:visited {
    color: #034DA4;
    text-decoration: none;
  }
</style>
