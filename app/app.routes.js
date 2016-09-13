"use strict";
var router_1 = require("nativescript-angular/router");
var game_component_1 = require("./game/game.component");
var home_component_1 = require("./game/home.component");
// import { AuthGuard } from "./auth.guard";
exports.routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "game", component: game_component_1.GameComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, { enableTracing: false }),
];
//# sourceMappingURL=app.routes.js.map