function HomeCtrl($scope){
    $scope.count = 0;
    $scope.increment = function (){
        $scope.count = $scope.count + 1;
    }
}