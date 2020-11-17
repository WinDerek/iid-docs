<template>
  <div id="app">
    <my-menu v-model="menuSelectedIndex" v-on:selectedIndexChange="onMenuSelectedIndexChange"></my-menu>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <hr class="footer__delimiter">

    <my-footer></my-footer>
  </div>
</template>

<script>
import MyMenu from '@/components/MyMenu.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
  name: 'App',
  metaInfo: {
    meta: [
      { charset: 'utf-8' }
    ],
    titleTemplate: "%s | IID Docs"
  },
  components: {
    MyMenu, MyFooter
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

  padding-bottom: 500px; /* 300px (the height of the footer) + 200px (the distance between content and the footer) */
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

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  position: relative;
}

#app *::selection {
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
  font-size: 32px;
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
  text-decoration: none;
}

.content__code__container {
  margin: 12px 24px 24px 24px;
}

.content__note {
  background: #eeeeee;
  padding: 4px 8px;
  margin: 12px 24px 24px 24px;
  border-radius: 3px;
  border: solid 1px #999999;
}

.content__note::before {
  content: "Note:";
  font-family: "Roboto";
  color: #202124;
  font-size: 16px;
  font-weight: 600;
  margin: 8px;
  display: block;
}

.content__note > p {
  margin: 8px;
  line-height: 1.2;
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

.footer__delimiter {
  width: 100%;
  height: 0.4px;
  background: #ffffff;
  margin: 0;
  padding: 0;
  border: none;
}
</style>
