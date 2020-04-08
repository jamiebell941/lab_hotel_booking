
use hotel_bookings;
db.dropDataBase();

db.bookings.insertMany([
    {name: "Chuck Berry", email: "chuck@berry.com", checkedIn: false},
    {name: "Lou Reed", email: "lou@reed.com", checkedIn: false},
    {name: "David Bowie", email: "david@bowie.com", checkedIn: false}
]);