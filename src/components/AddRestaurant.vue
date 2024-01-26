<template>
  <div>
    <HeaderPage />
    <h1>Welcome to Add Restaurant page</h1>
    <form class="add">
      <input
        type="text"
        name="name"
        placeholder="enter name"
        v-model="restaurant.name"
      />
      <input
        type="text"
        name="kebele"
        placeholder="enter kebele"
        v-model="restaurant.kebele"
      />
      <input
        type="text"
        name="contact"
        placeholder="enter contact"
        v-model="restaurant.contact"
      />
      <button type="button" v-on:click="AddRestaurant">Add restaurant</button>
    </form>
  </div>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";

export default {
  name: "AddRestaurant",
  components: {
    HeaderPage,
  },
  data() {
    return {
      restaurant: {
        name: "",
        kebele: "",
        contact: "",
      },
    };
  },
  methods: {
    async AddRestaurant() {
      console.warn(this.restaurant);
      const result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        kebele: this.restaurant.kebele,
        contact: this.restaurant.contact,
      });
      if (result.status == 201) {
        this.$router.push({ name: "HomePage" });
      }
      console.warn("result", result);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUP" });
    }
  },
};
</script>
<style scoped>
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;

  border: 1px solid skyblue;

  padding: 3px;
}
.add button {
  width: 310px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  cursor: pointer;
  color: #fff;
}
</style>
