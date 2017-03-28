angular.module('myApp', []).controller('todoCtrl', function($scope) {
    $scope.todoList = [];

    $scope.todoAdd = function() {
        $scope.todoList.push({name:$scope.todoInput, done:true});
        $scope.todoInput = "";
    };


    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };

    $scope.vis=false;
    $scope.enableEditor=function(){
        $scope.vis=true;
        $scope.todoName=x.name;
    };
   $scope.saveVis=function(){
       // $scope.x.name= $scope.todoName;
        $scope.vis=false;
        
    };
     
});