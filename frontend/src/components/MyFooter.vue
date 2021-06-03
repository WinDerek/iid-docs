<template>
  <div class="my-footer">
    <div class="content__container">
      <!-- The logo -->
      <a href="https://winderek.github.io/iid-docs/" target="_blank" class="logo">
        <img src="../assets/images/iid2019_logo.svg" style="width: 32px; margin: 8px;" />
        <span class="logo__text">IID Docs</span>
      </a>

      <p class="footer__text">Crafted with ❤ by <a href="https://github.com/WinDerek" target="_blank">Derek</a> in Shanghai, China.</p>

      <p class="footer__text"> Copyright © 2020 &ndash; 2021 All rights reserved.</p>

      <img src="https://visitor-badge.glitch.me/badge?page_id=iid-docs" alt="Visitors Number" class="visitor__number" />
    </div>
  </div>
</template>

<script>
export default {
  name: "my-footer",
  model: {
  },
  props: {
  },
  data: function() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.my-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background: #f5f5f5;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 260px;
}

.content__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%;
  margin: auto;
  padding: 0;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-style: normal;
  width: max-content;
  margin: 8px;
  user-select: none;
}

.logo__text {
  font-size: 22px;
  font-family: "OpenSans";
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  margin-left: 0px;
  user-select: none;
  letter-spacing: -0.25px;
  color: #2c82c9ff;
}

@media only screen and (min-width: 1000px) {
  .content__container {
    width: 1000px;
  }
}

.footer__text {
  font-size: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  margin: 8px;
  color: #3c4043;
  text-align: center;
}

.my-footer a {
  color: #2c82c9ff;
  text-decoration: none;
}

.my-footer .visitor__number {
  margin: 8px;
}
</style>
