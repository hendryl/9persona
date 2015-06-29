angular.module("personaApp")
.controller('detailController', ['detailService', '$http', function(detailService, $http){
    var ctrl = this;
    ctrl.current = 1;
    ctrl.previous = null;
    ctrl.type = 1;
    ctrl.carouselImages = null;
    ctrl.data = null;
    ctrl.rightImages = null;
    ctrl.currentRelation = 1;
    ctrl.dropdownData = null;

    ctrl.relationNumberChecker = function(num){
        var current = ctrl.currentRelation + num;
        current = current > 9 ? current - 9 : current < 1 ? current + 9 : current;
        return current;
    };

    ctrl.setRelationNumber = function(num){
        ctrl.currentRelation = ctrl.relationNumberChecker(num);
    };

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
    };

    ctrl.loadAll = function(){
        $http.get('/assets/data/carousel.json').success(function(data){
            ctrl.carouselImages = data;
        });

        $http.get('/assets/data/persona.json').success(function(data){
            ctrl.data = data;
        });

        $http.get('/assets/data/relationRight.json').success(function(data){
            ctrl.rightImages = data;
        });

        $http.get('/assets/data/quizResults.json').success(function(data){
            ctrl.dropdownData = data;
        });
    };

    ctrl.shouldSlideInLeft = function(stat) {
        var result = false;
        if(ctrl.current === stat) {

            if(ctrl.previous == 9 && ctrl.current == 1) {
                result = false;
            }
            else if(stat < ctrl.previous 
                || (ctrl.previous == 1 && ctrl.current == 9)) {
                result = true;
            }
        } else {
            result = false;
        }
        return result;
    };

    ctrl.shouldSlideInRight = function(stat) {
        var result = false;
        if(ctrl.current === stat) {

            if(ctrl.previous == 1 && ctrl.current == 9) {
                result = false;
            }
            else if(stat > ctrl.previous 
                || (ctrl.previous == 9 && ctrl.current == 1)
                ) {
                result = true;
            }
        } else {
            result = false;
        }
        return result;
    };

    ctrl.shouldSlideOutLeft = function(stat) {
        var result = false;
        if(ctrl.previous === stat) {

            if(ctrl.previous == 1 && ctrl.current == 9) {
                result = false;
            }
            else if(stat < ctrl.current 
                || (ctrl.previous == 9 && ctrl.current == 1)
            ) {
                result = true; 
            }
        } else {
            result = false;
        }
        
        return result;
    };
    
    ctrl.shouldSlideOutRight = function(stat) {
        var result = false;
        if(ctrl.previous === stat) {
            
            if(ctrl.previous == 9 && ctrl.current == 1) {
                result = false;
            }
            else if(stat > ctrl.current 
                || (ctrl.previous == 1 && ctrl.current == 9)
                ) {
                result = true;
            }
        } else {
            result = false;
        }
        return result;
    };

    ctrl.checkNumber = function() {
        var x = detailService.getNumber();
        if(x){
            ctrl.current = x;
            detailService.setNumber(null);
        }
        else ctrl.current = 1;
    };

    ctrl.start = function() {
        ctrl.checkNumber();
        ctrl.checkType();
        ctrl.loadAll();
        ctrl.currentRelation = ctrl.current;
    };

    ctrl.left = function() {
        var num = Number(ctrl.current);
        ctrl.previous = num;
        num = num === 1 ? 9 : num - 1;
        ctrl.current = num;
        ctrl.checkType();
        ctrl.currentRelation = ctrl.current;
    };

    ctrl.right = function() {
        var num = Number(ctrl.current);
        ctrl.previous = num;
        num = num === 9 ? 1 : num + 1;
        ctrl.current = num;
        ctrl.checkType();
        ctrl.currentRelation = ctrl.current;
    };

    ctrl.start();
}]);