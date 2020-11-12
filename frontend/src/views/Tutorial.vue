<!--
Component for the tutorial.
 -->
<template>
  <div class="tutorial SubPage">
    <div class="content_container">
      <h1 class="content__title">Tutorial</h1>

      <img class="content__image" src="../assets/images/tutorial.png" />
      
      <h2 class="content__subtitle">Jupyter Lab</h2>
      <p>
        Example of running Jupyter Lab on port 41001:
      </p>

      <code class="normal">jupyter-lab --ip 0.0.0.0 --port 41001</code>
      
      <p>
        Then visit <a href="http://server_ip:your_port/" target="_blank">http://10.19.129.132:41001/</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tutorial',
  props: {
  },
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
a {
  color: #42b983;
}

code {
  font-family: "Monaco";
  color: white;
  background: #2e3131;
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 14px;
  margin: 12px 24px 24px 24px;
}

code::before, code.normal::before {
  content: "$ ";
}

code.root::before {
  content: "# ";
}
</style>
