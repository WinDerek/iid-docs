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

        <img src="../assets/images/github_mark.png" style="width: 24px;" />
      </a>
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
    return {};
  },
  methods: {
    onLinkClicked(index) {
      this.$emit('selectedIndexChange', index);
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
  right: 0;
  padding: 20px;
}

.github-link-container > a {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-style: normal;
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
</style>
