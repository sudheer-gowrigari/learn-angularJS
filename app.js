(function() {
    var app = angular.module('gemStore', ['store-products']);

    app.controller('StoreController',['$http', function($http){
        var store = this;
        store.products = [];
        $http.get('store-products.json').success(function(data){
            store.products = data;
        });
    }]);

    app.controller('ReviewController' , function(){
        this.review = {};
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var assetsPath = 'http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/';
})();

