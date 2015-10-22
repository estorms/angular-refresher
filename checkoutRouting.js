(function () {
  'use strict';
  angular.module('sportsStore')
  .config(function($routeProvider) {
    $routeProvider.when('/complete', {
      templateUrl: '/views/thankYou.html'
    });
    $routeProvider.when('/placeorder', {
      templateUrl: '/views/placeOrder.html'
    });
    $routeProvider.when('/checkout', {
      templateUrl: '/views/checkoutSummary.html'
    });
    $routeProvider.when('/products', {
      templateUrl: '/views/productList.html'
    });
    $routeProvider.otherwise('/checkout', {
      templateUrl: '/views/productList.html'
    });
  });
})();
