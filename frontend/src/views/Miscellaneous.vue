<!--
Component for displaying the miscellanous information.
 -->
<template>
  <div class="miscellaneous SubPage">
    <div class="content_container">
      <h1 class="content__title">Miscellaneous</h1>

      <h2 class="content__subtitle">Birthdays</h2>

      <div class="content__code__container">
        <pre class="code"><code class="language-python">raise NotImplementedError</code></pre>
      </div>

      <h2 class="content__subtitle">Lab Cleaning Schudule</h2>

      <div class="content__code__container">
        <pre class="code"><code class="language-python">raise NotImplementedError</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';
import '../prism-themes/themes/prism-nord.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-shell-session';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';

export default {
  name: 'miscellaneous',
  metaInfo: {
    title: "Miscellaneous"
  },
  props: {
  },
  data: function () {
    return {}
  },
  mounted () {
    Prism.highlightAll();
  },
  methods: {
  }
}
</script>

<style scoped>
pre.code {
  padding: 10px 16px;
  border-radius: 3px;
}

pre.code code {
  font-family: "Monaco";
  font-size: 14px;
}
</style>
