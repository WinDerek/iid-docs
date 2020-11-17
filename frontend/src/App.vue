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
  metaInfo: {
    meta: [
      { charset: 'utf-8' }
    ],
    titleTemplate: "%s | IID Docs"
  },
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
  font-weight: 300;
  src: url("./assets/fonts/roboto__regular.ttf");
}

@font-face {
  font-family: "Roboto";
  font-weight: 200;
  src: url("./assets/fonts/roboto__light.ttf");
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
  width: 100%;

  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; */
  display: block;
}

@media only screen and (min-width: 768px) {
  .content_container {
    width: 768px;
  }
}

.content_container *::selection {
  background: #89c4f466;
}

.content__title {
  font-family: "OpenSans";
  font-size: 44px;
  text-align: center;
  color: #3c4043;
  font-weight: 400;
  margin: 16px 0 32px 0;
}

.content__subtitle {
  font-family: "OpenSans";
  font-size: 28px;
  text-align: start;
  color: #3c4043;
  font-weight: 400;
  margin: 32px 24px 24px 24px;
}

.content_container p {
  font-family: "Roboto";
  color: #202124;
  line-height: 1.7;
  font-size: 16px;
  font-style: normal;
  text-decoration: none;
  font-weight: 200;
  word-wrap: break-word;

  margin: 12px 24px 24px 24px;
}

.content__header__image {
  width: 100%;
  display: block;
  margin: 12px auto 24px auto;
}

.content__image {
  display: block;
  width: 80%;
  margin: 8px auto 16px auto;
}

.content_container a {
  color: #2c82c9ff;
}

.content__code__container {
  margin: 12px 24px 24px 24px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
  height: 100%;

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
