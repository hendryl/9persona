angular.module("personaApp")
.controller('aboutController', ['$animate', function($animate){
    var ctrl = this;

    ctrl.status = 1;
    ctrl.previous = 0;

    ctrl.previousAnim = '';
    ctrl.currentAnim = '';

    ctrl.getStatus = function(stat) {
        return ctrl.status === stat;
    }

    ctrl.getPrevious = function(stat) {
        return ctrl.previous === stat;
    }

    ctrl.setStatus = function(stat) {
        ctrl.previous = ctrl.status;
        ctrl.status = stat;
    }

    ctrl.shouldFadeInLeft = function(stat) {
        var result = false;

        if(ctrl.getStatus(stat)){
            if(stat < ctrl.previous) {
                result = true;
                console.log(stat + " shouldFadeInLeft " + result);
            }
        } else {
            result = false;
        }
        return result;
    }

    ctrl.shouldFadeInRight = function(stat) {
        var result = false;

        if(ctrl.getStatus(stat)){
            if(stat > ctrl.previous) {
                result = true;
            }
        } else {
            result = false;
        }
        return result;
    }

    ctrl.shouldFadeOutLeft = function(stat) {
        var result = false;
        console.log(ctrl.getPrevious(stat))
        if(ctrl.getPrevious(stat)) {
            if(stat < ctrl.status) {
                result = true; 
            }
        } else {
            result = false;
        }
        
        return result;
    }
    
    ctrl.shouldFadeOutRight = function(stat) {
        var result = false;

         if(ctrl.getPrevious(stat)) {
            if(stat > ctrl.status) {
                result = true;
            }
        } else {
            result = false;
        }
        return result;
    }
}]);