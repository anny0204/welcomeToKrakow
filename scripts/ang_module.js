angular.module("mainModuleApp", ["ngRoute"])
.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when("/about", {
        templateUrl: "/views/about.html"
    });

    $routeProvider.when("/tours", {
        templateUrl: "/views/tours.html"
    });

    $routeProvider.when("/booking", {
        templateUrl: "/views/booking.html"
    });

    $routeProvider.when("/", {
        templateUrl: "/views/main_info.html"
    });

    $routeProvider.otherwise({
        templateUrl: '/views/main_info.html'
    });
})
.controller("mainModuleCtrl", function ($scope, $location) {

    $scope.isTitleBlockVisible = true;

    $scope.hideComp = function () {
        $location.path("/");
        $scope.showError = false;
    }

    $scope.getError = function (error) {
        if (angular.isDefined(error)) {
            if (error.required)
                return "You should fill this field";
        }
    };

    $scope.addNewOrder = function (orderDetails, isValid) {
        if (isValid) {
            $scope.showError = false;
            $scope.orderDetails = orderDetails;
            showHideTitleBlock();
            $location.path("/");
        } else {
            $scope.showError = true;
        }
    };
})