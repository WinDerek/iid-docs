<!--
Component for the home page.
 -->
<template>
  <div class="home SubPage">
    <div class="content_container">
      <h1 class="content__title">Home</h1>

      <img class="content__image" src="../assets/images/home.jpg" />
      
      <p>
        There are two servers (Dell Precision Workstation) of our laboratory residing in Room 511, 1C Building of SIST, ShanghaiTech. Since they were deployed in May 2020, the two servers have been running stably and providing services for the laboratory members to conduct simulations.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  },
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
