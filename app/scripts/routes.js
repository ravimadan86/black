define(['angularAMD'], 
    function(angularAMD) {
    'use strict';
	return ['$routeProvider', function($routeProvider) {

        $routeProvider.when('/admingui', angularAMD.route({
            templateUrl: 'scripts/modules/adminGUI/adminGUIView.html',
            controller: 'AdminGUICtrl',
            controllerUrl: 'modules/adminGUI/adminGUICtrl'
        }));

        $routeProvider.when('/conteditor', angularAMD.route({
            templateUrl: 'scripts/modules/contentEditor/contentEditorView.html',
            controller: 'ContentEditorCtrl',
            controllerUrl: 'modules/contentEditor/contentEditorCtrl'
        }));

        $routeProvider.when('/teditor', angularAMD.route({
            templateUrl: 'scripts/modules/typeEditor/typeEditorView.html',
            controller: 'TypeEditorCtrl',
            controllerUrl: 'modules/typeEditor/typeEditorCtrl'
        }));

        $routeProvider.when('/compeditor', angularAMD.route({
            templateUrl: 'scripts/modules/componentEditor/componentEditorView.html',
            controller: 'ComponentEditorCtrl',
            controllerUrl: 'modules/componentEditor/componentEditorCtrl'
        }));

        $routeProvider.otherwise({redirectTo: '/admingui'});
	}]
});
