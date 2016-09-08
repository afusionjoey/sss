"use strict";
var core_1 = require("@angular/core");
var webViewModule = require("ui/web-view");
var GameComponent = (function () {
    function GameComponent() {
    }
    ;
    GameComponent.prototype.ngOnInit = function () {
        console.log('loading');
        var webView = new webViewModule.WebView();
        console.dump('load');
        webView.on(webViewModule.WebView.loadFinishedEvent, function (args) {
            // let message;
            console.log('inside');
            // if (!args.error) {
            //     message = "WebView finished loading " + args.url;
            // }
            // else {
            //     console.log('loading 2');
            //     message = "Error loading " + args.url + ": " + args.error;
            // }
        });
        console.log(webViewModule.WebView.loadFinishedEvent);
        webView.url = "http://www.example.com/";
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