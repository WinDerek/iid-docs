<!--
Component for displaying the information of all the accounts on our servers.
 -->
<template>
  <div class="accounts SubPage">
    <div class="content_container">
      <h1 class="content__title">Accounts</h1>

      <h2 class="content__subtitle">Port allocation</h2>

      <p>
        The accounts on each server with the corresponding allocated ports are listed below:
      </p>

      <div class="table-container">
        <table class="table-fill">
          <thead>
          <tr>
          <th class="text-left">User</th>
          <th class="text-left">iid-server-1 (10.19.129.132)</th>
          <th class="text-left">iid-server-2 (10.19.129.133)</th>
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
          <td class="text-left">derek</td>
          <td class="text-left">41501 - 41600</td>
          <td class="text-left">41501 - 41600</td>
          </tr>

          <tr>
          <td class="text-left">tangyx</td>
          <td class="text-left">41601 - 41700</td>
          <td class="text-left">None</td>
          </tr>

          <tr>
          <td class="text-left">xiaoxuan</td>
          <td class="text-left">41701 - 41800</td>
          <td class="text-left">None</td>
          </tr>

          <tr>
          <td class="text-left">wss</td>
          <td class="text-left">41801 - 41900</td>
          <td class="text-left">41801 - 41900</td>
          </tr>

          <tr>
          <td class="text-left">taou</td>
          <td class="text-left">41901 - 42000</td>
          <td class="text-left">None</td>
          </tr>
          </tbody>
        </table>
      </div>
      
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
  border-radius: 3px;
  border-collapse: collapse;
  max-width: 600px;
  margin: 4px;
  width: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
 
th {
  color:#D5DDE5;;
  background:#1b1e24;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: 16px;
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
  border-bottom: 1px solid #C1C3D1;
  color:#666B85;
  font-size: 16px;
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

/* For narrow screens. */
@media only screen and (max-width: 768px) {
  th, tr, td {
    font-size: 14px;
  }
}
/* Ending for the table styles */
</style>
