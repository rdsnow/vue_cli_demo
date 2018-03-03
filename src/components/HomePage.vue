<template>
  <div class="home-page">
    <header-bar></header-bar>
    <h1>This is home page.....</h1>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import HeaderBar from './HeaderBar'
  import FooterBar from './FooterBar'


  export default {
    components: {HeaderBar, FooterBar},
    name: "home-page",
    created() {
      this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
        console.log(data);
      })
    }
  }
</script>


<style scoped>
  h1 {
    font-family: "Microsoft YaHei UI Light";
    width: 1000px;
    margin: 0 auto;
    text-align: center;
    color: red;
    line-height: 600px;
    border: 1px solid #dddddd;
  }
</style>
