<!--
Component for the tutorial.
 -->
<template>
  <div class="tutorial SubPage">
    <div class="content_container">
      <h1 class="content__title">Tutorials</h1>

      <img class="content__header__image" src="../assets/images/tutorial.png" />

      <!-- Login Basics -->
      <h2 class="content__subtitle">1. Login Basics</h2>

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
      <h2 class="content__subtitle">2. Conda</h2>

      <img class="content__image" src="../assets/images/conda_logo.svg" />

      <p>
        Python is a modern programming language widely used in both academia and industry.
        
        However, there are so many Python versions and Python packages (and their different versions).
        
        Sometimes you may want to use one version in a project, and another version in another project.

        It seems that there exist so many tools for the isolation of Python versions/packages: Anaconda/Conda, <code class="inline-code"><a href="https://pypi.org/project/virtualenv/" target="_blank">pip</a></code>, <code class="inline-code"><a href="https://pypi.org/project/virtualenv/" target="_blank">virtualenv</a></code>, <code class="inline-code"><a href="https://docs.python.org/3/library/venv.html" target="_blank">venv</a></code>, and so on.

        Which tool should I use?
      </p>

      <p>
        One best practice is to use <code class="inline-code">conda</code> as the Python environment management tool and <code class="inline-code">pip</code> as the Python package management tool.

        To do this, create a new Conda environment, acivate it and execute <code class="inline-code">conda install pip</code>.
      </p>

      <p>
        Do not take up excessive disk space, as these servers are shared among all lab members.
        To this end, Miniconda is recommended.
        Execute the following shell commands to install Miniconda:
      </p>

      <div class="content__code__container">
        <pre class="code">
          <code class="language-shell-session">
            $ curl -OJ https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh
            $ bash ./Miniconda3-latest-Linux-x86_64.sh
          </code>
        </pre>
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
      <h2 class="content__subtitle">3. Jupyter Lab</h2>

      <p>
        Example of running Jupyter Lab on port 41001:
      </p>

      <div class="content__code__container">
        <pre class="code"><code class="language-shell-session">$ jupyter-lab --ip 0.0.0.0 --port 41001</code></pre>
      </div>
      
      <p>
        Then visit <a href="http://server_ip:your_port/" target="_blank">http://10.19.129.132:41001/</a>
      </p>

      <!-- Shell -->
      <h2 class="content__subtitle">4. Shell</h2>

      <p>
        Good tutorials on shell:
      </p>

      <ol>
        <li><a href="https://missing.csail.mit.edu/2020/course-shell/" target="_blank">Course overview + the shell · the missing semester of your cs education</a></li>
        <li><a href="https://missing.csail.mit.edu/2020/shell-tools/" target="_blank">Shell Tools and Scripting · the missing semester of your cs education</a></li>
        <li><a href="https://www.shellscript.sh/" target="_blank">https://www.shellscript.sh/</a></li>
      </ol>

      <!-- Git -->
      <h2 class="content__subtitle">5. Git and GitHub</h2>

      <p>
        <a href="https://git-scm.com/" target="_blank">Git</a> is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
        
        Keep in mind that Git is different from third-party platforms providing remote Git repository services like GitHub, GitLab, BitBucket and so on. Below is a cheatsheet for a typical workflow for using Git and GitHub.
      </p>

      <img class="content__image" src="../assets/images/git_tutorial.png" style="width: 400px;" alt="A short Git tutorial." />

      <!-- Remote Editors -->
      <h2 class="content__subtitle">6. Remote Editors</h2>

      <p>
        Editing files on servers can sometimes be annoying. It is bothering to edit files locally, then transfer them to the server, and do these operations repeatedly.

        Actually, there exist several solutions for editing files on a server directly.
      </p>

      <ol>
        <li>code-server</li>

        VS Code in your browser: <a href="https://github.com/cdr/code-server" target="_blank">https://github.com/cdr/code-server</a>

        <li>VS Code Remote SSH</li>

        <a href="https://code.visualstudio.com/docs/remote/ssh" target="_blank">https://code.visualstudio.com/docs/remote/ssh</a>

        <li>Sublime Text 3</li>

        <a href="https://gist.github.com/connorjan/8b9d9fa8f252cf145ef3e2ad9b708f46" target="_target">https://gist.github.com/connorjan/8b9d9fa8f252cf145ef3e2ad9b708f46</a>

        <li>Jupyter Lab</li>

        As mentioned above, Jupyter Lab can also be used as a remote editor.
      </ol>
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
