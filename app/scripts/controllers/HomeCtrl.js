(function() {
     function HomeCtrl(Room) {
         var ctrl = this;
         
         ctrl.rooms = Room.all;
         
         ctrl.addRoom = function(){
             console.log(ctrl.newRoom.name);
             Room.add(ctrl.newRoom);
         }
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
})();