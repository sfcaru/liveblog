var liveblogSyndication = angular
    .module('liveblog.syndication', ['liveblog.security']);

liveblogSyndication
    .config(['superdeskProvider', function(superdesk) {
        superdesk
            .activity('/consumers/', {
                label: gettext('Consumers Management'),
                controller: 'ConsumersController',
                templateUrl: 'scripts/liveblog-syndication/views/consumer-list.html',
                category: superdesk.MENU_MAIN,
                priority: 100,
                adminTools: true,
                resolve: {isArchivedFilterSelected: function() {return false;}}
            })
            .activity('/producers/', {
                label: gettext('Producers Management'),
                controller: 'ProducersController',
                templateUrl: 'scripts/liveblog-syndication/views/producer-list.html',
                category: superdesk.MENU_MAIN,
                priority: 100,
                adminTools: true,
                resolve: {isArchivedFilterSelected: function() {return false;}}
            })
            .activity('/syndication/producers/', {
                label: gettext('Producers Blogs'),
                controller: 'SyndicationProducersController',
                templateUrl: 'scripts/liveblog-syndication/views/syndication-producers.html',
                category: superdesk.MENU_MAIN,
                priority: 100,
                adminTools: false,
                resolve: {isArchivedFilterSelected: function() {return false;}}
            })
            .activity('/syndication/producers/:id', {
                label: gettext('Producers Blogs'),
                controller: 'SyndicationProducerBlogsController',
                templateUrl: 'scripts/liveblog-syndication/views/syndication-producer-blogs.html',
                //category: superdesk.MENU_MAIN,
                priority: 100,
                adminTools: false,
                resolve: {isArchivedFilterSelected: function() {return false;}}
            });
  
    }])
    .config(['apiProvider', function(apiProvider) {
        apiProvider
            .api('consumers', {
                type: 'http',
                backend: {rel: 'consumers'}
            })
            .api('producers', {
                type: 'http',
                backend: {rel: 'producers'}
            });
    }]);
