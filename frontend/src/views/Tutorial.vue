<!--
Component for the tutorial.
 -->
<template>
  <div class="tutorial SubPage">
    <div class="content_container">
      <h1 class="content__title">Tutorial</h1>

      <img class="content__header__image" src="../assets/images/tutorial.png" />

      <!-- Conda -->
      <h2 class="content__subtitle">Conda</h2>

      <img class="content__image" src="../assets/images/conda_logo.svg" />

      <p>
        Do not take up excessive disk space, as these servers are shared among all lab members.
        To this end, Miniconda is recommended.
        Execute the following shell commands to install Miniconda:
      </p>

      <div class="content__code__container">
        <pre class="code"><code class="language-shell-session">$ curl -OJ https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh
$ bash ./Miniconda3-latest-Linux-x86_64.sh</code></pre>
      </div>

      <div class="content__note">
        <p>
          References: <a href="https://docs.conda.io/en/latest/index.html" target="_blank">https://docs.conda.io/en/latest/index.html</a>
        </p>

        <p>
          As the official link is not reachable or too slow, here I replace <a href="https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh">the original link</a> with the Tsinghua mirror.
        </p>
      </div>
      
      <!-- Jupyter Lab -->
      <h2 class="content__subtitle">Jupyter Lab</h2>

      <p>
        Example of running Jupyter Lab on port 41001:
      </p>

      <div class="content__code__container">
        <pre class="code"><code class="language-shell-session">$ jupyter-lab --ip 0.0.0.0 --port 41001</code></pre>
      </div>
      
      <p>
        Then visit <a href="http://server_ip:your_port/" target="_blank">http://10.19.129.132:41001/</a>
      </p>

      <!-- Git -->
      <h2 class="content__subtitle">Git and GitHub</h2>

      <p>
        <a href="https://git-scm.com/" target="_blank">Git</a> is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
        
        Keep in mind that Git is different from third-party platforms providing remote Git repository services like GitHub, GitLab, BitBucket and so on. Below is a short Git tutorial.
      </p>

      <img class="content__image" src="../assets/images/git_tutorial.png" style="width: 400px;" alt="A short Git tutorial." />
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
  name: 'tutorial',
  metaInfo: {
    title: "Tutorial"
  },
  props: {
  },
  data: function () {
    return {}
  },
  created () {
  },
  mounted () {
    Prism.highlightAll();
  },
  methods: {}
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

/* pre.code-container code::before, pre.code-container code.normal::before {
  content: "$ ";
}

pre.code-container code.root::before {
  content: "# ";
} */

/* .horizontally_scrollable {
  padding: 10px 16px;
  background: #2e3131;
  border-radius: 3px;

  display: block;
  white-space: nowrap;
  width: 100%;
  overflow-x: auto;
}

ul.shell {
  display: block;
  padding: 4px;
  margin: 0;
  list-style: none;
}

ul.shell li {
  width: max-content;
  margin: 4px;
  font-family: "Monaco";
  color: white;
  font-size: 14px;
}

ul.shell li::before, ul.shell li.normal::before {
  content: "$ ";
}

ul.shell li.root::before {
  content: "# ";
} */
</style>
