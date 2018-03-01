<template>
  <div class="header-bar">
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
  </div>
</template>

<script>
  export default {
    name: 'header-bar'
  }
</script>

<style scoped>
  .header-bar {
    color: #034DA4;
    margin: 0 auto;
    width: 1000px;
    overflow: hidden;
  }

  .header-bar ul {
    float: right;
    height: 90px;
    width: 500px;
    padding: 0;
    margin: 0 auto;
  }

  .header-bar img {
    float: left;
  }

  .header-bar ul li {
    line-height: 90px;
    list-style-type: none;
    float: left;
    margin: 0 3px;
  }

  .header-bar ul li a {
    color: #034DA4;
    text-decoration: none;
  }
  .header-bar ul li a:hover {
    color: #034DA4;
    text-decoration: none;
  }
  .header-bar ul li a:visited {
    color: #034DA4;
    text-decoration: none;
  }
</style>
