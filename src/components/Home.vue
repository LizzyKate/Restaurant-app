<script>
import axios from "axios";
import HeaderVue from "./Header.vue";

export default {
  name: "HomeVue",
  components: {
    HeaderVue,
  },
  data() {
    return {
      name: "",
      restaurant:[]
    };
  },
 async mounted() {
    let user = localStorage.getItem("user-token");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push("/signup");
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    this.restaurant = result.data;
  },
};
</script>

<template lang="">
  <div>
    <header-vue />
    <div class="">
      <h1>Welcome {{ name }}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(restaurant, restaurantIndex) in restaurant" :key="restaurantIndex">
            <td>{{ restaurant.name }}</td>
            <td>{{ restaurant.address }}</td>
            <td>{{ restaurant.phone }}</td>
            <td>{{ restaurant.city }}</td>
            <td>{{ restaurant.state }}</td>
            <td>{{ restaurant.zip }}</td>
            <!-- <td>
              <router-link to="/edit/{{ restaurant.id }}">Edit</router-link>
              <router-link to="/delete/{{ restaurant.id }}">Delete</router-link>
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table{
    width: 100%;

}
th{
    text-align: left;
    padding: 10px;
}
td{
    padding: 10px;
}
</style>
