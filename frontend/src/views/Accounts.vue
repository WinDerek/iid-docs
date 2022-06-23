<!--
Component for displaying the information of all the accounts on our servers.
 -->
<template>
  <div class="accounts SubPage">
    <div class="content_container">
      <h1 class="content__title">Accounts</h1>

      <h2 class="content__subtitle">1. Introduction</h2>

      <h3 class="content__subsubtitle">1.1 Computation Platform</h3>

      <p>

        In our computation platform, there are currently two servers available for the lab members to conduct simulations or experiments.
        
        The two servers are named <code class="inline-code">iid-server-1</code> and <code class="inline-code">iid-server-2</code> respectively.

        <ul>
          <li><code class="inline-code">iid-server-1</code>
            <ul>
              <li>IP address: <code class="inline-code">10.19.129.132</code></li>
              <li>One GPU (Quadro GV100, 32 GB)</li>
              <li>80 CPUs</li>
            </ul>
          </li>

          <li><code class="inline-code">iid-server-2</code>
            <ul>
              <li>IP address: <code class="inline-code">10.19.129.133</code></li>
              <li>One GPU (Quadro P400, 1991 MB)</li>
              <li>72 CPUs</li>
            </ul>
          </li>
        </ul>

      </p>

      <div class="content__note">
        <p>
          Please note that currently our GPU resources are quite limited (there is only 1 GPU available on <code class="inline-code">iid-server-1</code>).
          
          If your task does not require a GPU, <code class="inline-code">iid-server-2</code> is recommended for you.
        </p>
      </div>

      <h3 class="content__subsubtitle">1.2 Edge Intelligence System</h3>

      <p>
        There are one host server and three Quanser QCars in our Edge Intelligence System.

        <ul>
          <li><code class="inline-code">edge-host-0</code>
            <ul>
              <li>IP address: <code class="inline-code">10.19.136.60</code></li>
            </ul>
          </li>

          <li><code class="inline-code">edge-qcar-1</code>
            <ul>
              <li>IP address: <code class="inline-code">10.19.136.61</code></li>
            </ul>
          </li>

          <li><code class="inline-code">edge-qcar-2</code>
            <ul>
              <li>IP address: <code class="inline-code">10.19.136.62</code></li>
            </ul>
          </li>

          <li><code class="inline-code">edge-qcar-3</code>
            <ul>
              <li>IP address: <code class="inline-code">10.19.136.63</code></li>
            </ul>
          </li>
        </ul>
      </p>

      <h2 class="content__subtitle">2. Table of Accounts</h2>

      <p>
        The accounts on each server with the corresponding allocated ports are listed below:
      </p>

      <div class="table-container">
        <table class="table-fill">
          <thead>
            <tr>
              <th class="text-left">User</th>
              <th class="text-left">Ports on <code class="table-header-code">iid-server-1</code></th>
              <th class="text-left">Ports on <code class="table-header-code">iid-server-2</code></th>
            </tr>
          </thead>

          <tbody class="table-hover">
            <tr>
              <td class="text-left">xin</td>
              <td class="text-left">41001 ~ 41100</td>
              <td class="text-left">None</td>
            </tr>

            <tr>
              <td class="text-left">bian</td>
              <td class="text-left">41101 ~ 41200</td>
              <td class="text-left">None</td>
            </tr>

            <tr>
              <td class="text-left">lengqy</td>
              <td class="text-left">41201 ~ 41300</td>
              <td class="text-left">None</td>
            </tr>

            <tr>
              <td class="text-left">xih</td>
              <td class="text-left">41301 ~ 41400</td>
              <td class="text-left">None</td>
            </tr>

            <tr>
              <td class="text-left">jingye</td>
              <td class="text-left">41401 ~ 41500</td>
              <td class="text-left">None</td>
            </tr>

            <tr>
              <td class="text-left">derek</td>
              <td class="text-left">41501 ~ 41600</td>
              <td class="text-left">41501 ~ 41600</td>
            </tr>

            <tr>
              <td class="text-left">tangyx</td>
              <td class="text-left">41601 ~ 41700</td>
              <td class="text-left">None</td>
            </tr>

            <tr>
              <td class="text-left">xiaoxuan</td>
              <td class="text-left">41701 ~ 41800</td>
              <td class="text-left">None</td>
            </tr>

            <tr>
              <td class="text-left">wss</td>
              <td class="text-left">41801 ~ 41900</td>
              <td class="text-left">41801 ~ 41900</td>
            </tr>

            <tr>
              <td class="text-left">zhangty</td>
              <td class="text-left">41901 ~ 42000</td>
              <td class="text-left">41901 ~ 42000</td>
            </tr>

            <tr>
              <td class="text-left">dingsht</td>
              <td class="text-left">42001 ~ 42100</td>
              <td class="text-left">None</td>
            </tr>

            <tr>
              <td class="text-left">chenming</td>
              <td class="text-left">42101 ~ 42200</td>
              <td class="text-left">None</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Although it is not technically restricted, you should only use the allocated ports for the avoidance of conflicts.
        
        The allocated ports can be used for a variety of user applications.
        
        For example, if you want to start a Jupyter Lab, you should specify an HTTP port among you allocated ports.
      </p>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'accounts',
  metaInfo: {
    title: "Accounts"
  },
  props: {
  },
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
/* Beginning for the table styles */
.table-container {
  overflow-x: auto;
  margin: 12px 24px 12px 24px;
  padding: 0;
}

.table-fill {
  font-family: 'monaco';
  background: white;
  /* border: 1px solid #9ea7af; */
  border-radius: 8px;
  border-collapse: collapse;
  max-width: 600px;
  margin: 10px;
  width: auto;
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.2);
}
 
th {
  color: #ffffff;
  background: #006064;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #9ea7af;
  font-size: 16px;
  font-style: bold;
  font-family: 'Roboto';
  padding: 20px 24px;
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;
}

th > code.table-header-code {
  background: #00363a;
  border-radius: 4px;
  padding: 0.2em 0.4em;
  box-sizing: border-box;

  color: #c1f1f0;
  font-family: "monaco";
  font-size: 85%;
}

th:first-child {
  border-top-left-radius: 4px;
}

th:last-child {
  border-top-right-radius: 4px;
  border-right: none;
}

tr {
  border-top: 1px solid #C1C3D1;
  border-bottom: 1px solid #C1C3D1;
  color: #666B85;
  font-size: 16px;
  font-weight: normal;
}

tr:hover td {
  background: #4E5066;
  color: #FFFFFF;
  border-top: 1px solid #22262e;
}

tr:first-child {
  border-top: none;
}

tr:last-child {
  border-bottom: none;
}

tr:nth-child(odd) td {
  background: #EBEBEB;
}

tr:nth-child(odd):hover td {
  background: #4E5066;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 4px;
}

tr:last-child td:last-child {
  border-bottom-right-radius: 4px;
}

td {
  background: #FFFFFF;
  padding: 10px 24px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 16px;
  /* text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); */
  border-right: 1px solid #C1C3D1;
}

td:last-child {
  border-right: 0px;
}

th.text-left {
  text-align: left;
}

th.text-center {
  text-align: center;
}

th.text-right {
  text-align: right;
}

td.text-left {
  text-align: left;
}

td.text-center {
  text-align: center;
}

td.text-right {
  text-align: right;
}

/* For narrow screens. */
@media only screen and (max-width: 768px) {
  th, td {
    font-size: 14px;
  }

  th {
    padding: 14px 18px;
  }

  td {
    padding: 8px 18px;
  }
}
/* Ending for the table styles */
</style>
