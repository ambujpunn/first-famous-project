/*** AppView ***/

define(function(require, exports, module) {
    var View = famous.core.View;
    var Surface = famous.core.Surface;
    var Transform = famous.core.Transform;
    var StateModifier = famous.modifiers.StateModifier;

    var LoginView = require('views/LoginView');

    function AppView() {
        View.apply(this, arguments);

        var loginView = new LoginView();
        this.add(loginView);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = {};

    module.exports = AppView;
});