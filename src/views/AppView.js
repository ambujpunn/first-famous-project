/*** AppView ***/

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var LoginView = require('views/LoginView');

    function AppView() {
        View.apply(this, arguments);

        this.rootModifier = new StateModifier({
            size: [300, 450]
        });
        // saving a reference to the new node
        this.mainNode = this.add(this.rootModifier);

        var loginView = new LoginView();
        this.mainNode.add(loginView);

        var background = new Surface({
           // undefined size will inherit size from parent modifier
            properties: {
                backgroundColor: '#FF9933',
                boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
            }
        }); 
        
        this.mainNode.add(background);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {};

    module.exports = AppView;
});