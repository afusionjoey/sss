"use strict";
var core_1 = require("@angular/core");
var GameComponent = (function () {
    function GameComponent() {
        this.counter = 16;
    }
    Object.defineProperty(GameComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    GameComponent.prototype.onTap = function () {
        this.counter--;
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: "game",
            templateUrl: "./game/game.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map