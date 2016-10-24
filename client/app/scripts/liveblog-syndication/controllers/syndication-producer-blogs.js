liveblogSyndication
    .controller('SyndicationProducerBlogsController', 
        ['$scope', 'api', '$routeParams', function($scope, api, $routeParams) {
            //api.producers.query($routeParams.id)
            //    .then(function(producer) {
            //        console.log('producer', producer);
            //    });

            api.get('/producers/' + $routeParams.id + '/blogs')
                .then(function(blogs) {
                    console.log('blogs', blogs);
                    $scope.blogs = blogs;
                    $scope.blogsLoading = false;
                    $scope.blogsView = 'grid';
                });
        }])
