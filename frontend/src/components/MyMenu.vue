<template>
  <div class="my-menu">
    <div class="menu-item-flex left logo">
      <img src="../assets/images/iid2019_logo.svg" style="width: 32px; margin: 20px 0px 20px 20px;" />
    </div>

    <div class="menu-item-flex left organization-label">
      <div class="organization-text">IID Docs</div>
    </div>

    <!-- The links -->
    <router-link
      to="/home"
      class="menu-item-block left black link-label"
      :class="{ selected: selectedIndex === 0 }"
      v-on:click.native="onLinkClicked(0)">
      <div class="link-text-container">
        <div class="link-text">Home</div>
      </div>
    </router-link>
    <router-link
      to="/accounts"
      class="menu-item-block left black link-label"
      :class="{ selected: selectedIndex === 1 }"
      v-on:click.native="onLinkClicked(1)">
      <div class="link-text-container">
        <div class="link-text">Accounts</div>
      </div>
    </router-link>
    <router-link
      to="/tutorial"
      class="menu-item-block left black link-label"
      :class="{ selected: selectedIndex === 2 }"
      v-on:click.native="onLinkClicked(2)">
      <div class="link-text-container">
        <div class="link-text">Tutorial</div>
      </div>
    </router-link>
    <router-link
      to="/conferences"
      class="menu-item-block left black link-label"
      :class="{ selected: selectedIndex === 3 }"
      v-on:click.native="onLinkClicked(3)">
      <div class="link-text-container">
        <div class="link-text">Conferences</div>
      </div>
    </router-link>
    <router-link
      to="/miscellaneous"
      class="menu-item-block left black link-label"
      :class="{ selected: selectedIndex === 4 }"
      v-on:click.native="onLinkClicked(4)">
      <div class="link-text-container">
        <div class="link-text">Miscellaneous</div>
      </div>
    </router-link>

    <div class="menu-item-flex github-link-container">
      <a href="https://github.com/DerekDick/iid-docs" target="_blank">
        <!-- The GitHub text -->
        <!-- <svg height="24" viewBox="0 0 45 16" version="1.1" width="67" aria-hidden="true"><path fill="#333333" fill-rule="evenodd" d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"></path></svg> -->
        <span>GitHub</span>

        <!-- The octicon -->
        <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill="#333333" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>
    </div>

    <!-- The menu toggle button and the navigation menu -->
    <div class="menu-item-flex toggle-button-container">
      <button class="toggle-button" :class="{ 'active': toggleButtonActive }" @click="onToggleButtonClicked()">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>

      <!-- The navigation menu for narrow (mobile) screens -->
      <nav id="mobileMenu" :class='{ active: toggleButtonActive }'>
        <ul>
          <li>
            <router-link
              to="/home"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 0 }"
              v-on:click.native="onMobileMenuLinkClicked(0)">
              Home
            </router-link>
          </li>

          <li>
            <router-link
              to="/accounts"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 1 }"
              v-on:click.native="onMobileMenuLinkClicked(1)">
              Accounts
            </router-link>
          </li>

          <li>
            <router-link
              to="/tutorial"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 2 }"
              v-on:click.native="onMobileMenuLinkClicked(2)">
              Tutorial
            </router-link>
          </li>

          <li>
            <router-link
              to="/conferences"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 3 }"
              v-on:click.native="onMobileMenuLinkClicked(3)">
              Conferences
            </router-link>
          </li>

          <li>
            <router-link
              to="/miscellaneous"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 4 }"
              v-on:click.native="onMobileMenuLinkClicked(4)">
              Miscellaneous
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  name: "my-menu",
  model: {
    prop: 'selectedIndex',
    event: 'selectedIndexChange'
  },
  props: {
    selectedIndex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data: function() {
    return {
      toggleButtonActive: false
    }
  },
  created() {
  },
  methods: {
    onLinkClicked(index) {
      this.$emit('selectedIndexChange', index);
    },
    onToggleButtonClicked() {
      // Invert the value
      this.toggleButtonActive = !this.toggleButtonActive;
      
      // If the toggle button is active
      if (this.toggleButtonActive) {
        // Show the mobile menu
        this.showMobileMenu();
      }
      // Else, the toggle button is inactive
      else {
        // Dismiss the mobile menu
        this.dismissMobileMenu();
      }
    },
    onMobileMenuLinkClicked(index) {
      this.$emit('selectedIndexChange', index);
      this.onToggleButtonClicked();
    },
    showMobileMenu() {
      let mobileMenuElement = document.getElementById("mobileMenu");
      mobileMenuElement.style.display = "block";

      anime({
        targets: '#mobileMenu',
        translateX: '0%',
        // translateX: [100, 0],
        opacity: '1.0',
        easing: 'cubicBezier(0.040, 0.855, 0.060, 0.985)',
        delay: 0,
        duration: 160,
        loop: false,
        direction: 'normal'
      });
    },
    dismissMobileMenu() {
      anime({
        targets: '#mobileMenu',
        translateX: '100%',
        // translateX: [100, 0],
        opacity: '0.0',
        easing: 'cubicBezier(0.925, 0.290, 0.915, 0.785)',
        delay: 0,
        duration: 80,
        loop: false,
        direction: 'normal',
        complete: function(anim) {
          let mobileMenuElement = document.getElementById("mobileMenu");
          mobileMenuElement.style.display = "none";
        }
      });
    }
  }
};
</script>

<style scoped>
.my-menu {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), inset 0 -1px 0 0 #dadce0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

  position: relative;
}

.white {
  color: white;
}

.black {
  color: #5f6368;
}

.left {
  float: left;
}

.logo {
  margin: 4px 8px;
  user-select: none;
}

.organization-label {
  margin: 4px 8px;
  margin-left: 0;
}

.organization-text {
  font-size: 22px;
  font-family: "OpenSans";
  font-style: normal;
  font-weight: 400;
  margin-left: 0px;
  user-select: none;
  padding: 0.3rem;
  letter-spacing: -0.25px;
  color: #2c82c9ff;
}

.right {
  float: right;
}

.menu-item-flex {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

.menu-item-block {
  display: block;
}

.link-label {
  text-decoration: none;
  margin: 0 18px;

  position: relative;

  overflow: hidden;

  display: none;
}

.link-label:hover {
  color: #000000;
  transition: color 0.25s linear;
}

.link-text-container {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  font-family: "OpenSans";
  letter-spacing: 0.25px;
  user-select: none;
}

.link-label::after {
  content: "";
  background: #2c82c9ff;
  height: 3px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  transform: translateY(100%);
  transition: transform 0.16s cubic-bezier(0.4, 0, 0.2, 1);
}

.link-label:hover::after {
  transform: translateY(0);
}

.selected {
  color: #000000;
}

.github-link-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;

  display: none;
}

.github-link-container > a {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-style: normal;
  font-size: 20px;
}

.github-link-container > a > span {
  font-family: "OpenSans";
  font-weight: 300;
  font-size: 20px;
  color: #333333;
}

.github-link-container > a > * {
  cursor: pointer;
  border: none;
  text-decoration: none;
  user-select: none;
  margin: 4px 4px;
}

/* Beginning of the styles for the toggle button */
.toggle-button-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 768px) {
  .github-link-container {
    display: flex;
  }

  .link-label {
    display: block;
  }
  
  .toggle-button-container {
    display: none;
  }
}

.toggle-button {
  background: transparent;
  border: none;
  text-transform: none;
  overflow: visible;
  text-decoration: none;
  user-select: none;
  outline: 0;

  /* Larger than #mobileMenu */
  z-index: 10000;
}

.toggle-button .line {
  width: 28px;
  height: 3px;
  background-color: #333333;
  display: block;
  margin: 6px 0;
  -webkit-transition: all 0.16s;
  -o-transition: all 0.16s;
  transition: all 0.16s;
}

.toggle-button:hover{
  cursor: pointer;
}

.toggle-button .line:nth-child(2) {
  transition: none;
}

.toggle-button.active .line:nth-child(2) {
  opacity: 0;

  background-color: #eeeeee;
}

.toggle-button.active .line:nth-child(1) {
  -webkit-transform: translateY(9px) rotate(45deg);
  -ms-transform: translateY(9px) rotate(45deg);
  -o-transform: translateY(9px) rotate(45deg);
  transform: translateY(9px) rotate(-45deg);

  background-color: #eeeeee;
}

.toggle-button.active .line:nth-child(3) {
  -webkit-transform: translateY(-9px) rotate(-45deg);
  -ms-transform: translateY(-9px) rotate(-45deg);
  -o-transform: translateY(-9px) rotate(-45deg);
  transform: translateY(-9px) rotate(45deg);

  background-color: #eeeeee;
}
/* Ending of the styles for the toggle button */

/* Beginning of the styles for the mobile menu */
#mobileMenu {
  display: none;

  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  z-index: 9999;

  background: #2c82c9ff;
  opacity: 0.0;

  transform: translateX(100%);
}

#mobileMenu > ul {
  display: block;
  list-style: none;
  margin: 0;
  padding: 24px 32px;
}

#mobileMenu > ul > li {
  display: block;
  margin: 0;
  padding: 0;
}

.mobile-menu-link-label {
  text-decoration: none;
  margin: 0 0 24px 0;

  display: block;

  overflow: hidden;

  font-size: 20px;
  font-family: "OpenSans";
  letter-spacing: 0.25px;
  font-weight: 300;
  user-select: none;
  color: #eeeeee;
}
/* Ending of the styles for the mobile menu */
</style>
