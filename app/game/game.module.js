"use strict";
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var game_routing_1 = require("./game.routing");
var game_component_1 = require("./game.component");
var GameModule = (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                game_routing_1.gameRouting
            ],
            declarations: [
                game_component_1.GameComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GameModule);
    return GameModule;
}());
exports.GameModule = GameModule;
//# sourceMappingURL=game.module.js.map