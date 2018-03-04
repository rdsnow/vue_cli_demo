<template>
  <div class="user-tab">
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>phone</th>
        <th>website</th>
      </tr>
      <tbody>
      <tr v-for="user in users">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.website}}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
    name: "user-tab",
    data: function () {
      return {
        users: {}
      };
    },
    created() {
      this.$http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
        this.users = data.body;
      })
    }
  }
</script>

<style scoped>
  .user-tab {
    font-family: "Microsoft YaHei UI Light";
    width: 1000px;
    margin: 0 auto;
    text-align: center;
    color: blue;
    height: 600px;
    border: 1px solid #dddddd;
  }
  table{
    margin: auto;
    border: 1px;
  }

</style>
