(function() {
  function Room($firebaseArray) {
    var Room = {};
      
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    Room.all = rooms;
      
    Room.add = function(name) {
        rooms.$add(name);
    }
    
    Room.getMessages = function(roomId) {
        return ref.orderByChild('roomId').equalTo(roomId);
    }
      
    return Room; 
    
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();