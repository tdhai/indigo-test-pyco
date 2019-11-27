const reservation = require('./hotelReservation');

const listArrialTime = [1];
const listDepartureTime = [99,99];
const K = 1;

const isEnoughRoom = reservation(listArrialTime, listDepartureTime, K);

console.log(`Is enough room for booking?: ${isEnoughRoom}.`);
