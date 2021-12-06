<!--
Component for the tutorial.
 -->
<template>
  <div class="tutorial SubPage">
    <div class="content_container">
      <h1 class="content__title">Tutorials</h1>

      <img class="content__header__image" src="../assets/images/tutorial.png" />

      <!-- Login basics -->
      <h2 class="content__subtitle">Login Basics</h2>

      <div class="content__code__container">
        <pre class="code"><code class="language-shell-session">$ ssh ${USERNAME}@${SERVER_IP}</code></pre>
      </div>

      <p>
        Here <code class="inline-code">${USERNAME}</code> is the username of your account on the server, and <code class="inline-code">${SERVER_IP}</code> is the IP address of the server.
        
        For example, a user named <code class="inline-code">test</code> can connect to <code class="inline-code">iid-server-1</code> using the following command:
      </p>

      <div class="content__code__container">
        <pre class="code"><code class="language-shell-session">$ ssh test@10.19.129.132</code></pre>
      </div>

      <p>
        If your are tired of remembering the IP address and typing it each time you want to login, you can add the IP address into the file <code class="inline-code">/etc/hosts</code> of your local machine:
      </p>

      <div class="content__code__container">
        <pre class="code">
          <code class="language-shell-session">
            # IID servers
            10.19.129.132    iid-server-1
            10.19.129.133    iid-server-2
          </code>
        </pre>
      </div>

      <p>
        Then you can use the command <code class="inline-code">ssh test@iid-server-1</code> to login.
      </p>

      <p>
        Furthermore, you can even save the trouble of password input. To achieve that, you only need to add your local SSH public key to the server's authorized list. First, on your local machine, get your SSH public key:
      </p>

      <div class="content__code__container">
        <pre class="code"><code class="language-shell-session">$ cat ~/.ssh/id_rsa.pub</code></pre>
      </div>

      <p>
        If the file does not exist, use <code class="inline-code">ssh-keygen</code> to generate the keys. Then copy the content of your key and paste into the authorized list file of your server:
      </p>

      <div class="content__code__container">
        <pre class="code">
          <code class="language-shell-session">
            $ nano ~/.ssh/authorized_keys
          </code>
        </pre>
      </div>

      <p>
        Now you can login by <code class="inline-code">ssh test@iid-server-1</code> without typing the password. Cool!
      </p>

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
        
        Keep in mind that Git is different from third-party platforms providing remote Git repository services like GitHub, GitLab, BitBucket and so on. Below is a cheatsheet for a typical workflow for using Git and GitHub.
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
