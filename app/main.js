"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [app_routes_1.APP_ROUTER_PROVIDERS]);
// nativeScriptBootstrap(AppComponent);
//# sourceMappingURL=main.js.map