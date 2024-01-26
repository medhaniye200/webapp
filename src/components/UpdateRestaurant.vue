<template>
  <div>
    <HeaderPage />
    <h1>Welcome to Update Restaurant page</h1>
    <form class="update">
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
      <button type="button" v-on:click="update">update</button>
    </form>
  </div>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import axios from "axios";

export default {
  name: "UpdateRestaurant",
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
    async update() {
      // console.warn(this.restaurant);
      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          kebele: this.restaurant.kebele,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUP" });
    }
    let result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    console.warn(result.data);
    this.restaurant = result.data;

    // console.warn(this.$route.params.id);
  },
};
</script>
<style scoped>
.update input {
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
.update button {
  width: 310px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  cursor: pointer;
  color: #fff;
}
</style>
