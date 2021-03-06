'use strict';

define([
    'appcommons',
    'routes',
    'interceptor'
    //'mockModule'
], function(angularAMD, routes,interceptor) {
    // Declare app level module which depends on views, and components
    var app = angular.module('naehasstore', [
        'ngRoute',
        //'mockModule',
        'directives',
        'filters',
        'services',
        'ngSanitize'
    ]);

    app.config(routes);
    app.config(interceptor);
    
    /*app.run(['$rootScope','COMMONSTORE',function($rootScope,COMMONSTORE){
        
    }]);*/

    return angularAMD.bootstrap(app);
});

