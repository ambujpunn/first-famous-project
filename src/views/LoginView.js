/*** LoginView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    // Constructor function for our LoginView class
    function LoginView() {

        // Applies View's constructor function to LoginView class
        View.apply(this, arguments);
        
    }

    // Establishes prototype chain for LoginView class to inherit from View
    LoginView.prototype = Object.create(View.prototype);
    LoginView.prototype.constructor = LoginView;

    // Default options for LoginView class
    LoginView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = LoginView;
});
