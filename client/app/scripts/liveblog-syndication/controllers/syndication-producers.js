liveblogSyndication
    .controller('SyndicationProducersController', ['$scope', 'api', function($scope, api) {
        api.producers.query().then((producers) => {
            $scope.producers = producers;
        });
    }]);
