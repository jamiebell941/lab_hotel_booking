<template lang="html">
    <div class="list-container">
        <h2>All the Booking info</h2>
        <booking-item v-for="(booking, index) in bookings" :booking="booking" :key="index"></booking-item>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';
import BookingItem from './BookingItem.vue';
import BookingService from '../services/BookingService';

export default {
    name: 'booking-list',
    props: ['bookings'],
    data(){ 
        return {
            booked: [],
            selectBooking: null
         }
    },
    components: {
        "booking-item": BookingItem
    },
    methods:{
        chooseBooking() {
            alert(this.selectBooking);
            eventBus.$emit('select-booking',this.selectBooking);
        },
        fetchData(){
            BookingService.getBookings()
            .then(bookings => this.booked = bookings);
        }
    },
    mounted(){
        this.fetchData();
        eventBus.$on('booking-added', booking => this.booked.push(booking));

        eventBus.$on('booking-deleted', (id) => {
            let index = this.bookings.findIndex(booking => booking._id === id)
            this.bookings.splice(index,1)
        } )
    }
}
</script>

<style lang="css" scoped>
    .list-container{background-color: darkgray;
    border: darkslategrey;
    border-radius: 12px;
    padding: 2%;
    margin: 4%;
    width: 100%;
    position: relative;
    top: 20%;
    }
</style>