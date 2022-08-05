<script>
import axios from "axios";
export default {
  name: "SignUpVue",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    async signUp() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      try {
        let result = await axios.post("http://localhost:3000/user", user);
        if(result.status === 201){
            alert("User created successfully");
            localStorage.setItem("user-token", JSON.stringify(result.data));
            this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted(){
    let user = localStorage.getItem("user-token");
    if(user){
        this.$router.push("/");
    }
  }
};
</script>
<template lang="">
  <div class="__form">
    <form @submit.prevent="signUp">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button type="submit">Sign Up</button>
      <router-link to="/login">Login</router-link>
    </form>
  </div>
</template>

<style scoped>
</style>
