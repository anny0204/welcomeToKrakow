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

    $scope.isBookButton = true;

    $scope.hideBookingComp = function () {
        $scope.showHideTitleBlockOnBocking();
        $location.path("/");
        $scope.showError = false;
    }

    $scope.hideComp = function () {
        titleBlock = document.getElementById("titleBlock");
        if ($location.path() == '/booking') {
            $scope.isBookButton = true;
            titleBlock.style.display = "block";
        }
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
            $location.path("/");
        } else {
            $scope.showError = true;
        }
    };

        $scope.showHideTitleBlockOnBocking = function () {
            alert($scope.isBookButton);
        let titleBlock = document.getElementById("titleBlock");
        if ($scope.isBookButton || $location.path() == '/booking') {
            titleBlock.style.display = "none";
            $scope.isBookButton = false;
        }
        else {
            titleBlock.style.display = "block";
            $scope.isBookButton = true;
        }
        };

        $scope.showHideTitleBlock = function () {
            let titleBlock = document.getElementById("titleBlock");
            if (!$scope.isBookButton || $location.path() == '/booking') {
                titleBlock.style.display = "block";
                $scope.isBookButton = true;
            }
        };

})