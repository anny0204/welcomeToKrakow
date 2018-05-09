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

    $routeProvider.when("/photos", {
        templateUrl: "/views/photos.html"
    });

    $routeProvider.when("/contact", {
        templateUrl: "/views/contact.html"
    });

    $routeProvider.when("/", {
        templateUrl: "/views/main_info.html"
    });

    $routeProvider.otherwise({
        templateUrl: '/views/main_info.html'
    });
})
.controller("mainModuleCtrl", function ($scope, $location) {

    $scope.hideComp = function () {
        $location.path("/");
        $scope.showError = false;
        $scope.showHideTitleBlock();
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
            $location.path("/");
        } else {
            $scope.showError = true;
        }
    };

    $scope.showHideTitleBlock = function() {
        let titleBlock = document.getElementById("titleBlock");
        if ($location.path() == '/booking')
            titleBlock.style.display = "none"
        else
            titleBlock.style.display = "block";
    };
})