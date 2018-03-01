<template>
  <div class="backstage">
    <HeaderBar></HeaderBar>
    <h1>This is backstage page......</h1>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import HeaderBar from './HeaderBar'
  import FooterBar from './FooterBar'

  export default {
    components: {HeaderBar, FooterBar},
    name: "backstage"
  }
</script>

<style scoped>
  h1 {
    font-family: "Microsoft YaHei UI Light";
    width: 1000px;
    margin: 0 auto;
    text-align: center;
    color: green;
    line-height: 600px;
    border: 1px solid #dddddd;
  }
</style>
