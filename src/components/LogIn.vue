<template>
  <div>
    <img src="../assets/download.jpeg" class="logo" />
    <h1>LogIn</h1>
  </div>
  <div class="log-in">
    <input
      type="email"
      v-model="email"
      placeholder="enter Email"
      required
      aria-required="true"
      aria-invalid="false"
      aria-label="E-mail"
      pattern="^[\w\.-]+@[\w\.-]+\.\w+$"
      class="w100"
      :class="{ invalid: email.error }"
      ref="email"
      autofocus
      @blur="validateEmail"
      @keydown="validateEmail"
    />
    <input
      type="password"
      v-model="password"
      placeholder="enter Password"
      required
      aria-required="true"
      class="w100"
      :class="{ invalid: password.error }"
      @blur="validatePassword"
      @keydown="validatePassword"
    />
    <button v-on:click="logIn" type="submit" value="Submit">login</button>
  </div>
  <p>
    <router-link to="/sign-up">SignUp</router-link>
  </p>
</template>
<script>
import axios from "axios";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      console.warn(result);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
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

.log-in input {
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
.log-in button {
  width: 310px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  cursor: pointer;
  color: #fff;
}
</style>
