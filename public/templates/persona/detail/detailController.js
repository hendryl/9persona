angular.module("personaApp")
.controller('detailController', ['$routeParams, $http', function($routeParams, $http){
    var ctrl = this;
    ctrl.current = 1;
    ctrl.popInVisible = false;
    ctrl.type = 1;

    ctrl.toggleDropdown = function(){
        ctrl.dropdownVisible = !ctrl.dropdownVisible;
    }

    ctrl.checkType = function(){
        if(ctrl.current == 1 ||
            ctrl.current == 8 ||
            ctrl.current == 9){
            ctrl.type = 1;
        }

        else if(ctrl.current == 2 ||
            ctrl.current == 3 ||
            ctrl.current == 4){
            ctrl.type = 2;
        }
        else ctrl.type = 3;
    }

    ctrl.previous = function(){
        var num = Number(ctrl.current);

        num = num === 1 ? 9 : num - 1;
        window.location.href = '#/persona/' + num;
    }

    ctrl.next = function(){
        var num = Number(ctrl.current);
        num = num === 9 ? 1 : num + 1;
        window.location.href = '#/persona/' + num;
    }

    if($routeParams.typeNumber){
        ctrl.current = $routeParams.typeNumber;
    }
    else ctrl.current = 1;

    $(document).ready(function() {
        document.title = "9Persona - Tipe " + ctrl.current;
        ctrl.checkType();
    });
}]);