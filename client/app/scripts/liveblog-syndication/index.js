import './styles/syndication.scss';

import './flux';

// ACTIONS
import ingestPanelActions from './actions/ingest-panel';
import incomingSyndicationActions from './actions/incoming-syndication';

// REDUCERS
import ingestPanelReducers from './reducers/ingest-panel';
import incomingSyndicationReducers from './reducers/incoming-syndication';

// CONTROLLERS
import baseController from './controllers/base';
import producersController from './controllers/producers';
import consumersController from './controllers/consumers';

// DIRECTIVES
import attachSyndicatedBlogsModal from './directives/attach-syndicated-blogs-modal';
import consumerEdit from './directives/consumer-edit';
import consumerList from './directives/consumer-list';
import contactsEdit from './directives/contacts-edit';
import copyToClipboard from './directives/copy-to-clipboard';
import firstContact from './directives/first-contact';
import incomingSyndication from './directives/incoming-syndication';
import ingestPanel from './directives/ingest-panel';
import ingestPanelDropdown from './directives/ingest-panel-dropdown';
import notificationsCount from './directives/notifications-count';
import producerEdit from './directives/producer-edit';
import producerList from './directives/producer-list';
import syndicationSwitch from './directives/syndication-switch';
import syndRmBlog from './directives/synd-rm-blog';

var liveblogSyndication = angular
    .module('liveblog.syndication', [
      'liveblog.syndication.flux',
      'liveblog.security'
    ])
    // actions
    .factory('IngestPanelActions', ingestPanelActions)
    .factory('IncomingSyndicationActions', incomingSyndicationActions)

    // reducers
    .factory('IngestPanelReducers', ingestPanelReducers)
    .factory('IncomingSyndicationReducers', incomingSyndicationReducers)

    // controllers
    .controller('BaseController', baseController)
    .controller('ProducersController', producersController)
    .controller('ConsumersController', consumersController)

    // directives
    .directive('lbAttachSyndicatedBlogsModal', attachSyndicatedBlogsModal)
    .directive('lbConsumerEdit', consumerEdit)
    .directive('lbConsumerList', consumerList)
    .directive('lbContactsEdit', contactsEdit)
    .directive('lbCopyToClipboard', copyToClipboard)
    .directive('lbFirstContact', firstContact)
    .directive('lbIncomingSyndication', incomingSyndication)
    .directive('lbIngestPanel', ingestPanel)
    .directive('lbIngestPanelDropdown', ingestPanelDropdown)
    .directive('lbNotificationsCount', notificationsCount)
    .directive('lbProducerEdit', producerEdit)
    .directive('lbProducerList', producerList)
    .directive('lbSyndicationSwitch', syndicationSwitch)
    .directive('lbSyndRmBlog', syndRmBlog);

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
            });
    }])
    .config(['apiProvider', function(apiProvider) {
        apiProvider
            .api('syndicationIn', {
                type: 'http',
                backend: {rel: 'syndication_in'}
            })
            .api('syndicationOut', {
                type: 'http',
                backend: {rel: 'syndication_out'}
            })
             .api('consumers', {
                type: 'http',
                backend: {rel: 'consumers'}
            })
            .api('producers', {
                type: 'http',
                backend: {rel: 'producers'}
            });
    }]);

