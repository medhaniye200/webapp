<template>
  <v-responsive>
    <div>
      <HeaderPage />
      <h1>Welcome {{ name }} to Home page</h1>

      <table Border="1">
        <tr>
          <td>id</td>
          <td>name</td>
          <td>branch</td>
          <td>contact</td>
          <td>action</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.branch }}</td>
          <td>{{ item.contact }}</td>
          <td>
            <router-link :to="'/update-restaurant/' + item.id">
              Update
            </router-link>
            <button v-on:click="deleteRestaurant(item.id)">delete</button>
          </td>
        </tr>
      </table>
    </div>
  </v-responsive>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    HeaderPage,
  },
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete(
        "  http://localhost:3000/restaurant/" + id
      );
      console.warn(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUP" });
      }
      let result = await axios.get("  http://localhost:3000/restaurant");
      this.restaurant = result.data;
      console.warn(result);
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>
