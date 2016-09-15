"use strict";
var core_1 = require("@angular/core");
var webViewModule = require("ui/web-view");
var dialogs = require("ui/dialogs");
var GameComponent = (function () {
    function GameComponent() {
        this.url = 'http://mobile3.gameassists.co.uk/MobileWebServices/casino/game/launch/12bet/ageOfDiscovery/en?casinoID=4107&lobbyURL=http://www.12bet.uk/en-gb/casino&bankingURL=&loginType=VanguardSessionToken&authToken=Flash_4760821572597542023&isRGI=true';
    }
    ;
    GameComponent.prototype.ngOnInit = function () {
        var webView = new webViewModule.WebView();
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
        webView.url = "https://www.google.com/";
    };
    GameComponent.prototype.tap = function () {
        alert('test');
    };
    GameComponent.prototype.transfer = function () {
        this.prompt('Transfer', 'Enter the amount that you wish to transfer.');
    };
    GameComponent.prototype.save = function () {
        this.prompt('Save', 'Enter the amount that you wish to save.');
    };
    GameComponent.prototype.prompt = function (title, message) {
        dialogs.prompt({
            title: title,
            message: message,
            okButtonText: "Confirm",
            cancelButtonText: "Cancel",
            defaultText: "100",
            inputType: dialogs.inputType.text
        }).then(function (r) {
            console.log("Response: " + r.result + ", Amount: " + r.text);
            // if (dialogs.inputType.text)
        });
    };
    GameComponent.prototype.menu = function () {
        alert('menu');
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: "game",
            templateUrl: "./game/game.component.html",
            styleUrls: ["game/game.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map