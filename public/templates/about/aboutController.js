angular.module("personaApp")
.controller('aboutController', ['$animate', function($animate){
    var ctrl = this;

    ctrl.status = 1;

    ctrl.getStatus = function(stat) {
        return ctrl.status === stat;
    }

    ctrl.setStatus = function(stat) {
        ctrl.status = stat;
    }
}]);