<script>
import axios from 'axios';


export default {
   name: "LoginVue", 
   data() {
      return {
         email: "",
         password: "",
      };
   },

   methods:{
        async login(){
             const user = {
                email: this.email,
                password: this.password,
             };
            //  try {
            //     let result = await axios.post("http://localhost:3000/user/login", user);
            //     if(result.status === 200){
            //      alert("Login Successful");
            //      localStorage.setItem("user-token", JSON.stringify(result.data));
            //      this.$router.push("/");
            //     }
            //  } catch (error) {
            //     console.log(error);
            //  }
            try {
               let result = await axios.get(`http://localhost:3000/user?email=${user.email}&password=${user.password}`);
               if(result.status === 200){
                  alert("Login Successful");
                  localStorage.setItem("user-token", JSON.stringify(result.data[0]));
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
}
</script>

<template lang="">
  <div class="__form">
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button type="submit">Login</button>
      <router-link to="/signup">Sign Up</router-link>
    </form>
  </div>
</template>

<style scoped>

</style>
