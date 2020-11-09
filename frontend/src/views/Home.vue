<!--
Component for the home page.
 -->
<template>
  <div class="home SubPage">
    <div class="content_container">
      <h1 class="content__title">Home</h1>

      <img class="content__image" src="../assets/images/home.jpg" />

      <p>
        The original purpose of this website is to provide some useful instructions for the members of the IID laboratory to conduct simulations on our Linux servers.
        As time passed by, our group grew larger and I think it is meaningful to re-design the UI of this website and think about its mission seriously.
        Now this website not only serves as the documentation site for our servers, but also presents other useful information like the timeline of some conferences, etc.
      </p>
      
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
