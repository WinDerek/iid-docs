<!--
Component for displaying some websites for fun.
 -->
<template>
  <div class="SubPage">
    <div class="content_container">
      <h1 class="content__title">学习网站集合</h1>

      <h2 class="content__subtitle">俄罗斯方块</h2>

      <p>
        <a href="https://binaryify.github.io/vue-tetris/" target="_blank">https://binaryify.github.io/vue-tetris/</a>
      </p>

      <h2 class="content__subtitle">免费空调</h2>

      <p>
        <a href="https://ac.yunyoujun.cn/" target="_blank">https://ac.yunyoujun.cn/</a>
      </p>

      <h2 class="content__subtitle">Game of Life</h2>

      <p>
        <a href="https://troytae.github.io/game-of-life/" target="_blank">https://troytae.github.io/game-of-life/</a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'my-relax',
  metaInfo: {
    title: "Have Some Fun!"
  },
  props: {
  },
  data: function () {
    return {}
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
