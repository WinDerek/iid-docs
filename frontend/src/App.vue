<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/iid_logo.png" style="max-height: 100px; max-width: 40%; margin: 20px 10px;">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e4f1fe;
  min-height: 100%;
}
</style>
