var app = angular.module('myApp', []);
                app.controller('personCtrl', function ($scope) {
                    $scope.cpage = 0;
        
                    $scope.nextpage = function () {
                        console.log(22)
                        $scope.list = data.slice(0, ($scope.cpage + 1) * 6)
                        console.log($scope.list)
                        $scope.cpage++;
                    }
                    $scope.nextpage()
                    window.onscroll = function () {
                        console.log(getScrollTop() + getWindowHeight());
                        console.log(getScrollHeight());
                        if (getScrollTop() + getWindowHeight() == getScrollHeight()) {
                            $scope.nextpage()
                            $scope.$apply()
                        }
                    }
                    //$scope.list = data
                });