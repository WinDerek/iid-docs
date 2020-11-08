<template>
  <div class="my-menu">
    <div class="menu-item left">
      <img src="../assets/iid2019_logo.svg" style="width: 40px; margin: 10px 0px 10px 10px;" />
    </div>

    <div class="menu-item left organization-label">
      <div class="black organization-text">IID Server Documentation</div>
    </div>

    <router-link to="/home" class="menu-item left black link-label" :class="{ selected: selectedIndex === 0 }" v-on:click.native="selectedIndex = 0">
      <div class="link-text">Home</div>
    </router-link>
    <router-link to="/accounts" class="menu-item left black link-label" :class="{ selected: selectedIndex === 1 }" v-on:click.native="selectedIndex = 1">
      <div class="link-text">Accounts</div>
    </router-link>
    <router-link to="/tutorial" class="menu-item left black link-label" :class="{ selected: selectedIndex === 2 }" v-on:click.native="selectedIndex = 2">
      <div class="link-text">Tutorial</div>
    </router-link>
    <router-link to="/conferences" class="menu-item left black link-label" :class="{ selected: selectedIndex === 3 }" v-on:click.native="selectedIndex = 3">
      <div class="link-text">Conferences</div>
    </router-link>
    <router-link to="/birthdays" class="menu-item left black link-label" :class="{ selected: selectedIndex === 4 }" v-on:click.native="selectedIndex = 4">
      <div class="link-text">Birthdays</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MyMenu',
  props: {
    selectedIndex: {
      type: Number,
      required: false,
      default: 0
    },
  },
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.my-menu {
  padding: 0;
  margin: 0;
  width: 100%;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.12), inset 0 -1px 0 0 #dadce0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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

.organization-label {
  display: inline-block;
}

.organization-text {
  font-size: 22px;
  font-family: "roboto" !important;
  font-style: normal;
  font-weight: 400;
  margin-left: 0px;
  user-select: none;
  padding: 0.3rem;
  border: #ffffff solid 1px;
  border-radius: 1000rem;
}

.right {
  float: right;
}

.menu-item {
  margin: 8px;
}

.link-label {
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
}

.link-text {
  font-size: 14px;
  font-family: "roboto";
  padding: 6px 10px;
}

.link-text:hover {
  color: #000000;
  transition: color 0.25s linear;
}

.selected {
  color: #000000;
}
</style>
