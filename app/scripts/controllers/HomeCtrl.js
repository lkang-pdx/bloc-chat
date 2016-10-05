(function() {
     function HomeCtrl(Room, Message, $cookies, $uibModal) {
         var ctrl = this;
         
         ctrl.rooms = Room.all;
         
         ctrl.currentRoom = null;
         
         
         ctrl.open = function() {
             $uibModal.open({
                templateUrl: '/templates/modal.html',
                 controller: 'ModalCtrl as modal'
             });
         };
         
         ctrl.setCurrentRoom = function(room) {
             ctrl.currentRoom = room;
             ctrl.currentMessages = Message.getByRoomId(ctrl.currentRoom.$id);
         };
         
         ctrl.sendMessage = function(message) {
             message.username = $cookies.get('blocChatCurrentUser');
             message.roomId = ctrl.currentRoom.$id;
             Message.send(message);
             console.log(message);
         }
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();