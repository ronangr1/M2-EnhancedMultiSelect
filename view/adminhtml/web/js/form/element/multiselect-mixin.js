/*global define*/
define(['jquery'], function ($) {
    'use strict';

    return function (Multiselect) {
        return Multiselect.extend({
            selectAll : function (config, event) {
                $(`#${config.uid}`).children().prop('selected', true);
            },

            resetAll: function (config, event) {
                $(`#${config.uid}`).children().prop('selected', false);
            }
        });
    };
});
