<script>
import axios from 'axios';
export default {
    name:"AddRestaurantVue",
    data(){
        return{
            name:"",
            address:"",
            phone:"",
            city:"",
            state:"",
            zip:"",
        }
    },
    methods:{
        async addRestaurant(){
            let restaurantDetails = {
                name:this.name,
                address:this.address,
                phone:this.phone,
                city:this.city,
                state:this.state,
                zip:this.zip,
            }
            try {
                const result = await axios.post("http://localhost:3000/restaurant", restaurantDetails);
                if(result.status == 201){
                    this.$router.push("/");
                }
            } catch (error) {
                console.log(error);
            }
            
           
        }
    },
}
</script>
<template lang="">
    <div>
        <h1>Add Restaurant</h1>
        <form @submit.prevent="addRestaurant()">
            <input type="text" v-model="name" placeholder="Name">
            <input type="text" v-model="address" placeholder="Address">
            <input type="text" v-model="phone" placeholder="Phone">
            <input type="text" v-model="city" placeholder="City">
            <input type="text" v-model="state" placeholder="State">
            <input type="text" v-model="zip" placeholder="Zip">
            <button type="submit">Add New Restaurant</button>
        </form>
    </div>
</template>

<style lang="">
    
</style>