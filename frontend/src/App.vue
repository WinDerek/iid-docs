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
  name: 'app',
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
    // Print the greeting message to the console
    console.log("%cThis website is crafted by Jianfeng Hou from scratch, without using any existing code or template.", "color: #ffffff; font-size: 16px; background: #2c82c9; padding: 10px 16px;");
    console.log("%c本站未使用任何现成代码或模板，欢迎 star ⭐", "color: #ffffff; font-size: 16px; background: #2c82c9; padding: 10px 16px;");
    console.log("%chttps://github.com/WinDerek/iid-docs", "background: #dadfe1; font-size: 16px; padding: 10px 16px;");
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

  margin-bottom: 140px; /* 140px is the distance between content and the footer) */
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
  font-size: 38px;
  text-align: center;
  color: #3c4043;
  font-weight: 400;
  margin: 32px 0 32px 0;
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
  /* font-weight: 200; */
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
  color: #2c82c9;
  text-decoration: none;
}

.content_container a:hover {
  text-decoration: underline;
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
  height: 0px;
  background: #ffffff;
  margin: 0;
  padding: 0;

  padding-top: 260px; /* 260px is the height of the footer */

  border: none;
}

.content_container > button {
  margin: 12px;
}

/* For narrow screens. */
@media only screen and (max-width: 768px) {
  .content__title {
    font-size: 32px;
  }

  .content__subtitle {
    font-size: 28px;
  }
}

code.inline-code {
  background: rgba(175, 184, 193, 0.2);
  border-radius: 6px;
  padding: 0.2em 0.4em;
  box-sizing: border-box;

  color: rgb(36, 41, 47);
  font-family: "Monaco";
  font-size: 85%;
}

.content_container ol {
  font-family: "Roboto";
  font-size: 16px;
  line-height: 1.7;
}
</style>
