liveblogMarketplace
    .controller('PreviewController', ['$scope', '$routeParams', function($scope, $routeParams) {
        var onReceivedData = function(data) {
        };

        if ($routeParams.type == 'marketers')
            api.get('/marketplace/marketers/' + $routeParams.id + '/blogs')
                .then(onReceivedData);
        else
            api.get('/producers/' + $routeParams.id + '/blogs').then(onReceivedData);
    }]);
