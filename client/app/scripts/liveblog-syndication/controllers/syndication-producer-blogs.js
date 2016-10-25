liveblogSyndication
    .controller('SyndicationProducerBlogsController', 
        ['$scope', 'api', '$routeParams', function($scope, api, $routeParams) {
            api.get('/producers/' + $routeParams.id + '/blogs')
                .then(function(blogs) {
                    console.log('blogs', blogs);
                    $scope.blogs = blogs;
                    $scope.blogsLoading = false;
                    $scope.blogsView = 'grid';
                });

            $scope.syndicate = function(blogId) {
                console.log('ima gonna syndicate that blog', blogId);
            };
        }])
