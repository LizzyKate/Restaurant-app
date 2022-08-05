<script>
export default {
  name: "HeaderVue",
  methods:{
    logout(){
      localStorage.removeItem("user-token");
      this.$router.push("/login");
    }
  },
  data(){
    return{
        links: [
            {
                name: "Home",
                url: "/"
            },
            {
                name: "Add Restaurant",
                url: "/add-restaurant"
            },
            {
                name: "Update Restaurant",
                url: "/update-restaurant/:id"
            },

        ]
    }
  }
};
</script>
<template lang="">
  <div class="nav">
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.url">{{link.name}}</router-link>
      </li>
      </ul>
    <button @click="logout">Logout</button>
  </div>
</template>

<style scoped>
.nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;

}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding:0;
    margin:0;
}
li{
    list-style: none;
    margin: 10px;
}
button{
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100px;
    margin-top: 0 !important;
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: #ff0000;
}
</style>
