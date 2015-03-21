/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;

var appView = require('views/AppView');
// create the main context
var mainContext = Engine.createContext();

// your app here
var appView = new AppView();

mainContext.add(appView); 
