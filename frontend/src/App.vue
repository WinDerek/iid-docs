<template>
  <div id="app">
    <my-menu v-model="menuSelectedIndex" v-on:selectedIndexChange="onMenuSelectedIndexChange"></my-menu>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import MyMenu from '@/components/MyMenu.vue';

export default {
  name: 'App',
  components: {
    MyMenu
  },
  data: function () {
    return {
      menuSelectedIndex: 0
    }
  },
  created () {
  },
  methods: {
    onMenuSelectedIndexChange(index) {
      this.menuSelectedIndex = index;
    }
  }
};
</script>

<style>
@font-face {
  font-family: "Monaco";
  src: url("./assets/fonts/monaco.ttf");
}

@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/roboto.ttf");
}

@font-face {
  font-family: "OpenSans";
  src: url("./assets/fonts/open_sans__regular.ttf");
}

@font-face {
  font-family: "OpenSansCondensed";
  src: url("./assets/fonts/open_sans_condensed__light.ttf");
}

.SubPage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content_container {
  width: 680px;
}

.content_container > *::selection {
  background: #89c4f466;
}

.content__title {
  font-family: "OpenSans";
  font-size: 44px;
  text-align: center;
  color: #3c4043;
  font-weight: 400;
  margin: 12px 0 12px 0;
}

.content__subtitle {
  font-family: "OpenSans";
  font-size: 28px;
  text-align: start;
  color: #3c4043;
  font-weight: 400;
  margin: 12px 0 12px 0;
}

p {
  font-family: "Roboto";
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.06s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
