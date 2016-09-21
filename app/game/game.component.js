"use strict";
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var plugin = require("nativescript-screenshot");
var imageColorModule = require('nativescript-image-colors/nativescript-image-colors');
// import { ImageColors  } from 'nativescript-image-colors/nativescript-image-colors';
var GameComponent = (function () {
    function GameComponent() {
        this.url = 'http://mobile3.gameassists.co.uk/MobileWebServices/casino/game/launch/12bet/ageOfDiscovery/en?casinoID=4107&lobbyURL=http://www.12bet.uk/en-gb/casino&bankingURL=&loginType=VanguardSessionToken&authToken=Flash_4760821572597542023&isRGI=true';
        this.isItemVisible = false;
    }
    ;
    GameComponent.prototype.ngOnInit = function () {
        // var webViewImage = plugin.getImage(this.webView.nativeElement);
        // this.img1 = webViewImage;
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
        this.isItemVisible = !this.isItemVisible;
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
    GameComponent.prototype.buttonTap2 = function () {
        // var colorThief = new ColorThief();
        // console.dump(colorThief);
        // var dominantColor = colorThief.getColor(this.photo, true, true);
    };
    GameComponent.prototype.buttonTap = function (args) {
        // var img = new image.Image();
        // console.dump(this.webView);
        var webViewImage = plugin.getImage(this.webView.nativeElement);
        this.img1 = webViewImage;
        // this.photo.src = webViewImage;
        //         var color = ce.topColours(webViewImage, true);
        // console.log(color);
        var colors = imageColorModule.ImageColors.getColorPalette(this.photo.nativeElement);
        console.dump(colors);
        // console.dump(colors);
        // console.dump(webViewImage);
        // var colorThief = new ColorThief();
        // console.dump(colorThief);
        // var dominantColor = colorThief.getColor(this.img1);
        // oNSCanvasInterface = new nsCanvasInterfaceModule.NativescriptCanvasInterface(this.webView, 'myWebView');
        // console.dump(oNSCanvasInterface);
        // var blockSize = 5, // only visit every 5 pixels
        //     defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        //    var canvas = document.createElement('canvas');
        //     context = canvas.getContext && canvas.getContext('2d'),
        //     data, width, height,
        //     i = -4,
        //     length,
        //     rgb = {r:0,g:0,b:0},
        //     count = 0;
        // if (!context) {
        //     return defaultRGB;
        // }
        // height = canvas.height = webViewImage.naturalHeight || webViewImage.offsetHeight || webViewImage.height;
        // width = canvas.width = webViewImage.naturalWidth || webViewImage.offsetWidth || webViewImage.width;
        // context.drawImage(webViewImage, 0, 0);
        // try {
        //     data = context.getImageData(0, 0, width, height);
        // } catch(e) {
        //     /* security error, img on diff domain */alert('x');
        //     return defaultRGB;
        // }
        // length = data.data.length;
        // while ( (i += blockSize * 4) < length ) {
        //     ++count;
        //     rgb.r += data.data[i];
        //     rgb.g += data.data[i+1];
        //     rgb.b += data.data[i+2];
        // }
        // // ~~ used to floor values
        // rgb.r = ~~(rgb.r/count);
        // rgb.g = ~~(rgb.g/count);
        // rgb.b = ~~(rgb.b/count);
        // console.log(rgb);
    };
    __decorate([
        core_1.ViewChild("myWebView"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "webView", void 0);
    __decorate([
        //: webViewModule.WebView;
        core_1.ViewChild("myPhoto"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "photo", void 0);
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