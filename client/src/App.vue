<template>
    <section class="flex-container">
      <header class="flex-item header"> <h1>Welcome to JJD(Jamie, Jun and Daniel) hotel!</h1></header>
      <main class="flex-item main">
         <div class="main-container">
          <booking-detail></booking-detail>
          <booking-form></booking-form>
          <booking-list :bookings = "bookings"></booking-list>
         </div>
      </main>
      <aside class="flex-item sidebar"></aside>
    </section>
</template>

<script>
import BookingList from '@/components/BookingList';
import CreateNewBooking from '@/components/CreateNewBooking';
import BookingDetail from '@/components/BookingDetail'

export default {
  name: 'app',
  components: {
    'booking-list': BookingList,
    'booking-form': CreateNewBooking,
    'booking-detail': BookingDetail
  },

  data(){
    return {
      bookings: []
    }
  },

  mounted(){
    fetch('http://localhost:3000/api/bookings')
    .then( res => res.json())
    .then( bookings => this.bookings = bookings )
  }
}
</script>

<style scoped>
.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
  background-image: "background.jpg";
  /* background-repeat: no-repeat;
  background-size: 100%; */
}
.header {
  height: 100px;
  flex: 1 100%;
  text-align: center;
  background-color: lightblue;
}
.sidebar {
  flex: 1;
}
.main {
  flex: 7;
}
.flex-item {
  /* background: tomato; */
  padding: 10px;
  width: 100px;
  border: 1px none black;
  color: black;
  font-weight: normal;
  font-size: 1.5em;
  text-align: left;
  font-family: 'Hind', sans-serif;
}
.main-container{background-color: gainsboro;
                margin:2%;
                padding:1%;
                width:120%;}
</style>