/*global define*/
define(['jquery', 'uiRegistry', 'ko'], function ($, registry, ko) {
    'use strict';

    return function (Multiselect) {
        return Multiselect.extend({

            initialize: function () {
                this._super();
                
                this.counter = ko.observable(this.initialValue.length);
            },

            selectAll: function (element) {
                const input = $(`#${element.uid}`);
                input.children().prop('selected', true);
                this.counter(input.children("option:selected").length);
            },

            resetAll: function (element) {
                const input = $(`#${element.uid}`);
                input.children().prop('selected', false);
                this.counter(0);
            }
        });
    };
});
