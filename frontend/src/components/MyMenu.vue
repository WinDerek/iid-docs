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
      to="/birthdays"
      class="menu-item-block left black link-label"
      :class="{ selected: selectedIndex === 4 }"
      v-on:click.native="onLinkClicked(4)">
      <div class="link-text-container">
        <div class="link-text">Birthdays</div>
      </div>
    </router-link>

    <div class="menu-item-flex github-link-container">
      <a href="https://github.com/DerekDick/iid-docs" target="_blank">
        <span>GitHub</span>

        <img src="../assets/images/github_mark_32px.png" style="width: 32px;" />
      </a>
    </div>

    <!-- The menu toggle button -->
    <div class="menu-item-flex toggle-button-container">
      <button class="toggle-button" :class="{ 'active': toggleButtonActive }" v-on:click="onToggleButtonClicked()">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>

      <nav id="mobileMenu" :class="{ active: toggleButtonActive }">
        <ul>
          <!-- <li>
            <router-link
              to="/home"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 0 }"
              v-on:click.native="onMobileMenuLinkClicked(0)">
              <div class="mobile-menu-link-text-container">
                <div class="mobile-menu-link-text">Home</div>
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/home"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 1 }"
              v-on:click.native="onMobileMenuLinkClicked(1)">
              <div class="mobile-menu-link-text-container">
                <div class="mobile-menu-link-text">Accounts</div>
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/home"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 2 }"
              v-on:click.native="onMobileMenuLinkClicked(2)">
              <div class="mobile-menu-link-text-container">
                <div class="mobile-menu-link-text">Tutorial</div>
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/home"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 3 }"
              v-on:click.native="onMobileMenuLinkClicked(3)">
              <div class="mobile-menu-link-text-container">
                <div class="mobile-menu-link-text">Conferences</div>
              </div>
            </router-link>
          </li>

          <li>
            <router-link
              to="/home"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 4 }"
              v-on:click.native="onMobileMenuLinkClicked(4)">
              <div class="mobile-menu-link-text-container">
                <div class="mobile-menu-link-text">Birthdays</div>
              </div>
            </router-link>
          </li> -->
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
              to="/home"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 1 }"
              v-on:click.native="onMobileMenuLinkClicked(1)">
              Accounts
            </router-link>
          </li>

          <li>
            <router-link
              to="/home"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 2 }"
              v-on:click.native="onMobileMenuLinkClicked(2)">
              Tutorial
            </router-link>
          </li>

          <li>
            <router-link
              to="/home"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 3 }"
              v-on:click.native="onMobileMenuLinkClicked(3)">
              Conferences
            </router-link>
          </li>

          <li>
            <router-link
              to="/home"
              class="mobile-menu-link-label"
              :class="{ selected: selectedIndex === 4 }"
              v-on:click.native="onMobileMenuLinkClicked(4)">
              Birthdays
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMenu",
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
  methods: {
    onLinkClicked(index) {
      this.$emit('selectedIndexChange', index);
    },
    onToggleButtonClicked() {
      this.toggleButtonActive = !this.toggleButtonActive;
    },
    onMobileMenuLinkClicked(index) {
      this.$emit('selectedIndexChange', index);
      this.onToggleButtonClicked();
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

  /* visibility: hidden; */
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
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
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

.github-link-container > a > * {
  font-family: "OpenSans";
  color: #000000;
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-style: normal;
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

@media only screen and (min-width: 800px) {
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
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
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
  visibility: hidden;

  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  z-index: 9999;

  background: #2c82c9ff;
  opacity: 0;

  transition: all 0.35s ease-in-out;
}

#mobileMenu.active {
  display: flex;
  visibility: visible;

  opacity: 1.0;
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
  font-weight: 600;
  user-select: none;
  color: #eeeeee;
}
/* Ending of the styles for the mobile menu */
</style>
