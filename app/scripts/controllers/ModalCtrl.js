(function() {
     function ModalCtrl($scope, Room, $uibModalInstance) {
         var ctrl = this;
         
         ctrl.addRoom = function(){
             console.log(ctrl.newRoom);
             Room.add(ctrl.newRoom);
             $uibModalInstance.close();
         }
         ctrl.cancel = function(){
             $uibModalInstance.dismiss('cancel');
         }

     }
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$scope','Room', '$uibModalInstance', ModalCtrl]);
})();