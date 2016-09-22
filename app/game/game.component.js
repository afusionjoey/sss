"use strict";
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var plugin = require("nativescript-screenshot");
var imageColorModule = require('nativescript-image-colors/nativescript-image-colors');
// import { ImageColors  } from 'nativescript-image-colors/nativescript-image-colors';
var GameComponent = (function () {
    function GameComponent() {
        this.url = 'http://mobile3.gameassists.co.uk/MobileWebServices/casino/game/launch/12bet/ageOfDiscovery/en?casinoID=4107&lobbyURL=http://www.12bet.uk/en-gb/casino&bankingURL=&loginType=VanguardSessionToken&authToken=Flash_4760821572597542023&isRGI=true';
        this.menuVisibility = false;
        this.offlineTopUpVisibility = false;
        this.mainAccountVisibility = false;
        this.saveVisibility = true;
    }
    ;
    GameComponent.prototype.ngAfterViewChecked = function () {
        // var self = this;
        // var webViewImage;
        // this.webView.nativeElement.on(webViewModule.WebView.loadFinishedEvent, function (args: webViewModule.LoadEventData) {
        //     // alert('finished');
        //     webViewImage = plugin.getImage(self.webView.nativeElement);
        //     self.img = webViewImage;
        //     console.dump(self.img);
        //     var colors = imageColorModule.ImageColors.getColorPalette(webViewImage);
        //     // console.dump(colors);
        //     var rgb = colors.IosPalette.primaryColor;
        //     var r = Math.floor(rgb._r);
        //     var g = Math.floor(rgb._g);
        //     var b = Math.floor(rgb._b);
        //     // console.log(r + ',' + g + ',' + b);
        //     self.button.nativeElement.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        // })
    };
    GameComponent.prototype.ngOnInit = function () {
        // var self = this;
        // var webViewImage;
        // this.webView.nativeElement.on(webViewModule.WebView.loadFinishedEvent, function (args: webViewModule.LoadEventData) {
        //     // alert('finished');
        //     webViewImage = plugin.getImage(self.webView.nativeElement);
        //     self.img = webViewImage;
        //     console.dump(self.img);
        //     var colors = imageColorModule.ImageColors.getColorPalette(webViewImage);
        //     // console.dump(colors);
        //     var rgb = colors.IosPalette.primaryColor;
        //     var r = Math.floor(rgb._r);
        //     var g = Math.floor(rgb._g);
        //     var b = Math.floor(rgb._b);
        //     // console.log(r + ',' + g + ',' + b);
        //     self.button.nativeElement.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        // })
        // var webViewImage = plugin.getImage(this.webView.nativeElement);
        // this.img = webViewImage;
        //console.dump(this.webView);
        // this.webView = new webViewModule.WebView();
        // this.webView.on(webViewModule.WebView.loadFinishedEvent, function (args: webViewModule.LoadEventData) {
        //     // let message;
        //     console.log('inside');
        //     // if (!args.error) {
        //     //     message = "WebView finished loading " + args.url;
        //     // }
        //     // else {
        //     //     console.log('loading 2');
        //     //     message = "Error loading " + args.url + ": " + args.error;
        //     // }
        // });
        // console.log(webViewModule.WebView.loadFinishedEvent);
        // this.webView.url = "https://www.google.com/";
        // myWebView
    };
    GameComponent.prototype.menu = function () {
        // menuContainer.animate({
        //     opacity: 0,
        //     duration: 500
        // });
        // this.isItemVisible = !this.isItemVisible;
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
    GameComponent.prototype.menuButtonTap = function (args) {
        // alert();
        this.showMenu();
        var webViewImage = plugin.getImage(this.webView.nativeElement);
        this.img = webViewImage;
        var colors = imageColorModule.ImageColors.getColorPalette(this.screenshot.nativeElement);
        console.dump(colors);
        var rgb = colors.IosPalette.primaryColor;
        var r = Math.floor(rgb._r);
        var g = Math.floor(rgb._g);
        var b = Math.floor(rgb._b);
        console.log(r + ',' + g + ',' + b);
        this.button.nativeElement.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    };
    GameComponent.prototype.showMenu = function () {
        // let menuContainer = this.menuContainer.nativeElement;
        var animations = [];
        this.menuVisibility = !this.menuVisibility;
        // Fade out the initial content over one half second
        // menuContainer.animate({
        //     opacity: 0,
        //     duration: 500
        // }).then(function() {
        // // this.menuVisibility = true;
        //     alert();
        // })
    };
    GameComponent.prototype.transferButtonTap = function () {
        alert('transfer');
    };
    GameComponent.prototype.saveButtonTap = function () {
    };
    GameComponent.prototype.close = function () {
        this.menuVisibility = false;
    };
    GameComponent.prototype.doNothing = function () {
        this.menuVisibility = true;
    };
    GameComponent.prototype.transferIn = function () {
    };
    GameComponent.prototype.transferOut = function () {
    };
    __decorate([
        core_1.ViewChild("myWebView"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "webView", void 0);
    __decorate([
        //: webViewModule.WebView;
        core_1.ViewChild("screenshot"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "screenshot", void 0);
    __decorate([
        core_1.ViewChild("button1"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "button", void 0);
    __decorate([
        core_1.ViewChild("menuContainer"), 
        __metadata('design:type', core_1.ElementRef)
    ], GameComponent.prototype, "menuContainer", void 0);
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