<template>
  <div>
    <img src="../assets/download.jpeg" class="logo" />
    <h1>SignUp</h1>
  </div>
  <div class="register">
    <input type="text" v-model="name" placeholder="enter Name" />
    <input type="email" v-model="email" placeholder="enter Email" />
    <input type="password" v-model="password" placeholder="enter Password" />
    <button v-on:click="signup">SignUp</button>
  </div>
  <p>
    <router-link to="/log-in">login</router-link>
  </p>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUP",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>
<style scoped>
.logo {
  width: 100px;
}

.register input {
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
.register button {
  width: 310px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  cursor: pointer;
  color: #fff;
}
</style>
