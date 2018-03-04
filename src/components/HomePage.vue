<template>
  <div class="home-page">
    <header-bar></header-bar>
    <UserTab></UserTab>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import HeaderBar from './HeaderBar'
  import FooterBar from './FooterBar'
  import UserTab from './UserTab'


  export default {
    components: {HeaderBar, FooterBar,UserTab},
    name: "home-page",
  }
</script>


<style scoped>

</style>
