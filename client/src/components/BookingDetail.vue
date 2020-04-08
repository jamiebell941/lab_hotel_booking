<template>
  <div class="detail-container">
      This is Booking Detail
      <form id="update-form" v-on:submit="handleSubmit">
          <label for="name">Name: </label>
          <input type="text" id="name" v-model="booking.name"><br/>
          <label for="email">Email: </label>
          <input type="text" id="email" v-model="booking.email"><br/>
          <input type="submit" value="Update" id="update"/>
      </form>
  </div>
</template>


<script>
import { eventBus } from '@/main.js'
export default {
    name: 'booking-detail',

    data(){
        return {
            booking: null
        }
    },

    mounted(){
        eventBus.$on('select-booking', selectedBooking => this.booking = selectedBooking);
    }

}
</script>

<style scoped>
  .detail-container {
    background-color: darkgray;
    border: darkslategrey;
    border-radius: 12px;
    padding: 2%;
    margin: 2%;
    float: right;
    width: 40%;  
    }

</style>