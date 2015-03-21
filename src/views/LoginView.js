/*** LoginView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = famous.core.View;
    var Surface = famous.core.Surface;
    var Transform = famous.core.Transform;
    var StateModifier = famous.modifiers.StateModifier;

    // Constructor function for our LoginView class
    function LoginView() {

        // Applies View's constructor function to LoginView class
        View.apply(this, arguments);
        this.rootModifier = new StateModifier({
            size: [400, 450]
        });

        // saving a reference to the new node
        this.mainNode = this.add(this.rootModifier);

        var background = new Surface({
           // undefined size will inherit size from parent modifier
            properties: {
                backgroundColor: '#CA3030',
                boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
            }
        }); 
        this.mainNode = this.add(background);
    }

    // Establishes prototype chain for LoginView class to inherit from View
    LoginView.prototype = Object.create(View.prototype);
    LoginView.prototype.constructor = LoginView;

    // Default options for LoginView class
    LoginView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = LoginView;
});
