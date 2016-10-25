liveblogSyndication
    .controller('SyndicationProducerBlogsController', 
        ['$scope', 'api', '$routeParams', function($scope, api, $routeParams) {
            api.get('/producers/' + $routeParams.id)
                .then(function(producer) {
                    $scope.producer = producer;
                });

            api.get('/producers/' + $routeParams.id + '/blogs')
                .then(function(blogs) {
                    console.log('blogs', blogs);
                    $scope.blogs = blogs;
                    $scope.blogsLoading = false;
                    $scope.blogsView = 'grid';
                });

            $scope.syndicate = function(blog) {
                console.log('ima gonna syndicate that blog', blog._id, blog.syndicated);
            };
        }])
