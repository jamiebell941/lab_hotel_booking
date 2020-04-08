<template>
  <div class="form-container">
      New Booking
      <form id="booking-form" v-on:submit="handleSubmit">
          <label for="name">Name: </label>
          <input type="text" id="name" v-model="name">
          <label for="email">Email: </label>
          <input type="text" id="email" v-model="email">
          <input type="submit" value="Save" id="save"/>
      </form>
  </div>
</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService'

export default {
    name: 'booking-form',
    data(){
        return {
            name: "",
            email: "",
            checkedIn: null
        }
    },
    methods: {
        handleSubmit(event){
            event.preventDefault();

            const payload = {
                name: this.name,
                email: this.email,
                checkedIn: this.checkedIn
            };

            BookingService.postBooking(payload)
            .then(booking => {
                eventBus.$emit('booking-added', booking);
            });
        }
    }

}
</script>

<style scoped>
.form-container {
    background-color: darkgray;
    border: darkslategrey;
    border-radius: 12px;
    padding: 2%;
    margin: 2%;
    float: left;
    width: 40%;
  }
</style>