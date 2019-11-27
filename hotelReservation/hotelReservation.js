const checkRoom = (listArrialTime = [], listDepartureTime = [], roomQuantity) => {
    let tempRoomQuantity = roomQuantity;
    for(i = 0; i< listArrialTime.length; i++){
      if (listArrialTime[0] < listDepartureTime[0] || listDepartureTime.length === 0) {
        listArrialTime.shift();
        tempRoomQuantity--;
      } else {
        listDepartureTime.shift();
        tempRoomQuantity++;
        if (tempRoomQuantity > roomQuantity) {
          return new Error('Please check arrial time and departure time again!');
        }
      }
      if (tempRoomQuantity < 0) {
        return false;
      }
    }
    return true;
  };
  
  const reservation = (listArrialTime = [], listDepartureTime = [], roomQuantity) => {
    if (isNaN(roomQuantity) || roomQuantity <= 0) {
      return new Error('Invalid number of rooms');
    }
    if (listArrialTime.length > 0 && listDepartureTime.length > 0) {
      listArrialTime.sort(function(arrial1, arrial2) {
        return arrial1 - arrial2;
      });
      listDepartureTime.sort(function(departure1, departure2) {
        return departure1 - departure2;
      });
    }
    return checkRoom(listArrialTime, listDepartureTime, roomQuantity);
  };
  
  module.exports = reservation;
  