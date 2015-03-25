/*** LoginView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var InputSurface = require('famous/surfaces/InputSurface');

    // Constructor function for our LoginView class
    function LoginView() {

        // Applies View's constructor function to LoginView class
        View.apply(this, arguments);
        this.rootModifier = new StateModifier({
            size: this.options.size
        });

        this.mainNode = this.add(this.rootModifier); 

        _createBackground.call(this);
      //  _createUserNameTextField.call(this);
       // _createPasswordTextField.call(this);
       // _createSubmitButton.call(this);        
        _createFieldsAndButton.call(this);
    }

    // Establishes prototype chain for LoginView class to inherit from View
    LoginView.prototype = Object.create(View.prototype);
    LoginView.prototype.constructor = LoginView;

    // Default options for LoginView class
    LoginView.DEFAULT_OPTIONS = {
        size:[375,650]
   };

    /*
    * Private function
    */
    function _createBackground() {
        var background = new Surface({
            properties: {
                backgroundColor: '#FF9933',
                boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
            }
        }); 
        this.mainNode.add(background);
    }

    function _createFieldsAndButton() {
        var userName = new InputSurface({
            size: [250, 40],
            name: 'inputSurface',
            placeholder: 'User Name',
            value: '',
            type: 'text'
        });
        this.mainNode.add(new StateModifier({
            align: [.5, .2],
            origin: [.5, .1]
        })).add(userName); 

        var password = new InputSurface({
            size: [250, 40],
            name: 'inputSurface',
            placeholder: 'Password',
            value: '',
            type: 'text'
        });
        this.mainNode.add(new StateModifier({
            align: [.5, .2],
            origin: [.5, -1]
        })).add(password); 

        var submit = new Surface({
                size:[250,40],
                content:  'Submit',
                properties: {
                    backgroundColor: '#3399FF'
                }
        });
        this.mainNode.add(new StateModifier({
            align: [.5, .2],
            origin: [0.5, -2.1]
        })).add(submit);

        submit.on('click', function () {
            alert(password.getValue());
        });
    }

    // Define your helper functions and prototype methods here

    module.exports = LoginView;
});
