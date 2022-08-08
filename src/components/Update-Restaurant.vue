
<script>
import axios from 'axios';
export default {
   name: "UpdateRestaurantVue", 
    data(){
         return{
            restaurant:{
                id:"",
                name:"",
                address:"",
                phone:"",
                city:"",
                state:"",
                zip:"",
            },
         }
    },
    async mounted(){
        let user = localStorage.getItem("user-token");
        if (!user) {
            this.$router.push("/signup");
        }
        let result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
        this.restaurant = result.data;
        
    },

    methods:{
        async updateRestaurant(){
            let result = await axios.put("http://localhost:3000/restaurant/"+this.restaurant.id, this.restaurant);
            if(result.status === 200){
                alert("Restaurant Updated");
                this.$router.push("/");
            }
        }
    }
}
</script>

<template lang="">
    <div>
       <h1>Update Restaurant</h1> 
       <form @submit.prevent="updateRestaurant()">
        
          <input type="text" v-model="restaurant.name" placeholder="Name">
            <input type="text" v-model="restaurant.address" placeholder="Address">
            <input type="text" v-model="restaurant.phone" placeholder="Phone">
            <input type="text" v-model="restaurant.city" placeholder="City">
            <input type="text" v-model="restaurant.state" placeholder="State">
            <input type="text" v-model="restaurant.zip" placeholder="Zip">
            <button type="submit">Update Restaurant</button>
       </form>
    </div>
</template>

<style scoped>
    
</style>