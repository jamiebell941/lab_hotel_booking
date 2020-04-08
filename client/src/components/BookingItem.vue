<template>
    <div>
        <ul>
            <li v-on:click="chooseBooking">
                <span>{{ booking.name }}</span>
                <span>{{ booking.email }}</span>
                <span><button v-on:click="deleteBooking">Delete</button></span>
            </li>
        </ul>
        
    </div>
</template>

<script>
import { eventBus } from '../main.js';
import BookingService from '../services/BookingService'
export default {
    name: 'booking-item',
    props: ['booking'],
    methods: {
        chooseBooking() {
            eventBus.$emit('select-booking', this.booking);
        },
        deleteBooking() {
           BookingService.deleteBookings(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted',this.booking._id))
        }
    }
}
</script>

<style lang="css" scoped>
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    li{
        text-align: left;
        border: 2px solid green;
        height: 40px;
        margin: 20px 0;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
</style>