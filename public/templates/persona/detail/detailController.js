angular.module("personaApp")
.controller('detailController', ['$routeParams', function($routeParams){
    var ctrl = this;

    ctrl.popInVisible = false;

    ctrl.togglePopIn = function(){
        ctrl.popInVisible = !ctrl.popInVisible;
    }

    if($routeParams.typeNumber){
        ctrl.current = $routeParams.typeNumber;
    }
    else ctrl.current = 1;

    $(document).ready(function() {
        document.title += "Tipe " + ctrl.current;
    });
}]);