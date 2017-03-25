angular.module('myApp', []).controller('todoCtrl', function($scope) {
    $scope.todoList = [];

    $scope.todoAdd = function() {
        if ($scope.todoInput === "") {
            $scope.ss=1;
        }else{
            $scope.todoList.push({todoText:$scope.todoInput, done:true});
            $scope.todoInput = "";
        }
        
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});