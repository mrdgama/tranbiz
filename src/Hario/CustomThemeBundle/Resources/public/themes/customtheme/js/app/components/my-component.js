// src/Acme/DemoBundle/Resources/public/js/app/components/my-component.js
define(function (require) {
    'use strict';

    var MyComponent,
        BaseComponent = require('oroui/js/app/components/base/component');

    MyComponent = BaseComponent.extend({
        initialize: function (options) {
            console.log('MyComponent is initialized', options);
        }
    });

    return MyComponent;
});
