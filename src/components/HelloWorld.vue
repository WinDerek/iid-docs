<template>
  <div class="hello">
    <h1>Welcome to the documentation page for iid-servers.</h1>

    <p style="padding: 20px; margin: 0;">Contact: <a href="mailto:houjf@shanghaitech.edu.cn">houjf@shanghaitech.edu.cn</a></p>

    <h2>Port allocation</h2>

    <table class="table-fill">
<thead>
<tr>
<th class="text-left">User</th>
<th class="text-left">iid-server-1</th>
<th class="text-left">iid-server-2</th>
</tr>
</thead>
<tbody class="table-hover">
<tr>
<td class="text-left">xin</td>
<td class="text-left">41001 - 41100</td>
<td class="text-left">None</td>
</tr>
<tr>
<td class="text-left">bian</td>
<td class="text-left">41101 - 41200</td>
<td class="text-left">None</td>
</tr>
<tr>
<td class="text-left">lengqy</td>
<td class="text-left">41201 - 41300</td>
<td class="text-left">None</td>
</tr>
<tr>
<td class="text-left">xih</td>
<td class="text-left">41301 - 41400</td>
<td class="text-left">None</td>
</tr>
<tr>
<td class="text-left">jingye</td>
<td class="text-left">41401 - 41500</td>
<td class="text-left">None</td>
</tr>

<tr>
<td class="text-left">houjf</td>
<td class="text-left">41501 - 41600</td>
<td class="text-left">None</td>
</tr>
</tbody>
</table>

    <h2>Example usage for Jupyter Lab</h2>
    <code>
        jupyter-lab --ip 0.0.0.0 --port your_port
    </code>
    <p style="padding: 20px; margin: 0;">
    Then visit <a href="10.19.125.52:your_port/" target="_blank">http://10.19.125.52:your_port/</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "monaco";
  src: url("../assets/fonts/monaco.ttf");
}

.hello {
  min-height: 100%;
}

a {
  color: #42b983;
}

code {
  font-family: "monaco";
  color: white;
  background: #2e3131;
  padding: 10px 20px;
  border-radius: 3px;
}

/*** Table Styles **/

.table-fill {
  font-family: 'monaco';
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  height: 320px;
  margin: 0 auto 20px auto;
  max-width: 600px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}
 
th {
  color:#D5DDE5;;
  background:#1b1e24;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: 1rem;
  font-style: bold;
  padding: 24px;
  text-align:left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align:middle;
}

th:first-child {
  border-top-left-radius:3px;
}
 
th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  
tr {
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#666B85;
  font-size: 1rem;
  padding: 10px 24px;
  font-weight:normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}
 
tr:hover td {
  background:#4E5066;
  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
tr:first-child {
  border-top:none;
}

tr:last-child {
  border-bottom:none;
}
 
tr:nth-child(odd) td {
  background:#EBEBEB;
}
 
tr:nth-child(odd):hover td {
  background:#4E5066;
}

tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 
td {
  background:#FFFFFF;
  padding: 10px 24px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 1rem;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
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
</style>
