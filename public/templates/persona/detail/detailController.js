angular.module("personaApp")
.controller('detailController', ['$animate', '$routeParams', '$http', '$scope', function($animate, $routeParams, $http, $scope){
    var ctrl = this;
    ctrl.current = 1;
    ctrl.type = 1;
    ctrl.data = null;
    ctrl.rightImages = null;
    ctrl.currentRelation = 1;
    ctrl.dropdownData = null;

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

    ctrl.relationNumberChecker = function(num){
        var current = ctrl.currentRelation + num;
        current = current > 9 ? current - 9 : current < 1 ? current + 9 : current;
        return current;
    }

    ctrl.setRelationNumber = function(num){
        ctrl.currentRelation = ctrl.relationNumberChecker(num);
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

    ctrl.load = function(){
        var asset = '/assets/data/persona' + ctrl.current + '.json';
        $http.get(asset).success(function(data){
            ctrl.data = data;
            console.log("Successfully loaded persona " + ctrl.current + " data");
        });

        $http.get('/assets/data/relationRight.json').success(function(data){
            ctrl.rightImages = data;
            console.log("Successfully loaded right picture data");
        });

        $http.get('/assets/data/quizResults.json').success(function(data){
            ctrl.dropdownData = data;
            console.log("Successfully loaded results data");
        });  
    }

    if($routeParams.typeNumber){
        ctrl.current = Number($routeParams.typeNumber);
    }
    else ctrl.current = 1;

    ctrl.checkType();
    ctrl.load();
    ctrl.currentRelation = ctrl.current;
}]);