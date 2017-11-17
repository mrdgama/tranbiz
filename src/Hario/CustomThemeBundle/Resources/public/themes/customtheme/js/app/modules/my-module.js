// src/Acme/DemoBundle/Resources/public/js/app/modules/my-module.js
require([
    'oroui/js/app/controllers/base/controller'
], function (BaseController) {
    'use strict';

    BaseController.loadBeforeAction([
        'hariocustomtheme/themes/customtheme/js/app/components/my-component'
    ], function (MyComponent) {
        /* add composition to reuse between controller actions */
        BaseController.addToReuse('myComponent', MyComponent, {
            /* define options for your component here, like: */
            keepServerConnection: true
        });
    });
});
