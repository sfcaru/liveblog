liveblogMarketplace
    .controller('PreviewController', ['$scope', '$routeParams', 'api', '$sce',
        function($scope, $routeParams, api, $sce) {
            var iframeAttrs = [
                'width="100%"',
                'height="715"',
                'frameborder="0"',
                'allowfullscreen'
            ].join(' ');

            $scope.blog = {};
            $scope.backwardUrl = '/#/marketplace/' + 
                $routeParams.type + '/' + $routeParams.producerId;

            var onReceivedData = function(data) {
                data._items.forEach(function(item) {
                    if (item._id == $routeParams.blogId)
                        $scope.blog = angular.extend(item, {
                            embed: '<iframe '+iframeAttrs+' src="'+item.public_url+'"></iframe>',
                            public_url: $sce.trustAsResourceUrl(item.public_url)
                        });
                });
            };

            if ($routeParams.type == 'marketers')
                api.get('/marketplace/marketers/' + $routeParams.producerId + '/blogs')
                    .then(onReceivedData);
            else
                api.get('/producers/' + $routeParams.producerId + '/blogs')
                    .then(onReceivedData);
        }]);
