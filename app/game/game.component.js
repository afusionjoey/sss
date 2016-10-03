"use strict";
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var plugin = require("nativescript-screenshot");
var imageColorModule = require('nativescript-image-colors/nativescript-image-colors');
// import { ImageColors  } from 'nativescript-image-colors/nativescript-image-colors';
var color_1 = require("color");
var hint_util_1 = require("../utils/hint-util");
var GameComponent = (function () {
    function GameComponent() {
        this.url = 'http://mobile3.gameassists.co.uk/MobileWebServices/casino/game/launch/12bet/ageOfDiscovery/en?casinoID=4107&lobbyURL=http://www.12bet.uk/en-gb/casino&bankingURL=&loginType=VanguardSessionToken&authToken=Flash_4760821572597542023&isRGI=true';
        this.menuVisibility = false;
        this.transferMenuVisibility = false;
        this.offlineTopUpVisibility = false;
        this.mainAccountVisibility = false;
        this.saveVisibility = false;
        this.subSaveVisibility = false;
        this.saveMenuVisibility = false;
        this.menuButtonVisibility = true;
        this.messageVisibility = true;
        this.isFilled1 = false;
        this.isFilled2 = false;
        this.isFilled3 = false;
        this.saveContainerRow = 1;
        this.optionsBarRow = 2;
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
        this.setTextFieldColors();
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
        // this.menuButtonVisibility = false;
        // var webViewImage = plugin.getImage(this.webView.nativeElement);
        // this.img = webViewImage;
        // var colors = imageColorModule.ImageColors.getColorPalette(this.screenshot.nativeElement);
        // console.dump(colors);
        // var rgb = colors.IosPalette.primaryColor;
        // var r = Math.floor(rgb._r);
        // var g = Math.floor(rgb._g);
        // var b = Math.floor(rgb._b);
        // console.log(r + ',' + g + ',' + b);
        // this.button.nativeElement.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    };
    GameComponent.prototype.showMenu = function () {
        // let menuContainer = this.menuContainer.nativeElement;
        var animations = [];
        this.menuVisibility = !this.menuVisibility;
        this.menuButtonVisibility = false;
        // Fade out the initial content over one half second
        this.menuContainer.nativeElement.animate({
            translate: { x: 0, y: 0 },
            duration: 500
        }).then(function () {
            // this.menuVisibility = true;
            // alert();
        });
    };
    GameComponent.prototype.transferButtonTap = function () {
        this.transferMenuVisibility = !this.transferMenuVisibility;
        this.saveMenuVisibility = false;
        if (this.transferMenuVisibility === true) {
            this.saveContainerRow = 3;
            this.optionsBarRow = 1;
        }
        else {
            this.saveContainerRow = 1;
            this.optionsBarRow = 3;
        }
        // this.saveContainerToggle = !this.saveContainerToggle;
        // console.dump(this.transferContainer.nativeElement);
    };
    GameComponent.prototype.transferIn = function () {
        this.transferText = "进";
        this.saveVisibility = !this.saveVisibility;
        this.menuVisibility = false;
        this.messageVisibility = true;
    };
    GameComponent.prototype.transferOut = function () {
        this.transferText = "出";
        this.saveVisibility = !this.saveVisibility;
        this.menuVisibility = false;
        this.messageVisibility = true;
    };
    GameComponent.prototype.saveButtonTap = function () {
        this.saveMenuVisibility = !this.saveMenuVisibility;
        this.transferMenuVisibility = false;
        if (this.transferMenuVisibility === true) {
            this.saveContainerRow = 3;
            this.optionsBarRow = 1;
        }
        else {
            this.saveContainerRow = 1;
            this.optionsBarRow = 3;
        }
    };
    GameComponent.prototype.mainAccountTap = function () {
        this.mainAccountVisibility = !this.mainAccountVisibility;
        this.menuVisibility = false;
    };
    GameComponent.prototype.weChatPayTap = function () {
        this.mainAccountVisibility = !this.mainAccountVisibility;
        this.menuVisibility = false;
    };
    GameComponent.prototype.bankTransferTap = function () {
        this.offlineTopUpVisibility = !this.offlineTopUpVisibility;
        this.menuVisibility = false;
    };
    GameComponent.prototype.doNothing = function () {
        this.menuVisibility = true;
    };
    GameComponent.prototype.close = function () {
        var self = this;
        this.menuContainer.nativeElement.animate({
            translate: { x: 200, y: 0 },
            duration: 500
        }).then(function () {
            self.menuVisibility = false;
            self.menuButtonVisibility = true;
        });
    };
    GameComponent.prototype.closeMainAccount = function () {
        this.mainAccountVisibility = false;
    };
    GameComponent.prototype.closeSave = function () {
        this.saveVisibility = false;
    };
    GameComponent.prototype.exitGame = function () {
        alert('exit');
    };
    GameComponent.prototype.textChange1 = function (field) {
        if (field != '') {
            this.isFilled1 = true;
            this.mainAccountSubmitBtn.nativeElement.style.backgroundColor = '#CD1F1F';
        }
        else {
            this.isFilled1 = false;
            this.mainAccountSubmitBtn.nativeElement.style.backgroundColor = '#979797';
        }
    };
    GameComponent.prototype.textChange2 = function (field1, field2) {
        if (field1 != '' || field2 != '') {
            this.isFilled2 = true;
            this.transferSubmitBtn2.nativeElement.style.backgroundColor = '#CD1F1F';
        }
        else {
            this.isFilled2 = false;
            this.transferSubmitBtn2.nativeElement.style.backgroundColor = '#979797';
        }
    };
    GameComponent.prototype.textChange3 = function (field1, field2) {
        if (field1 != '' || field2 != '') {
            this.isFilled3 = true;
            this.transferSubmitBtn3.nativeElement.style.backgroundColor = '#CD1F1F';
        }
        else {
            this.isFilled3 = false;
            this.transferSubmitBtn3.nativeElement.style.backgroundColor = '#979797';
        }
    };
    GameComponent.prototype.selection = function () {
        if (this.messageVisibility === true) {
            this.messageVisibility = false;
        }
        else {
            this.subSaveVisibility = true;
            this.saveVisibility = false;
        }
    };
    GameComponent.prototype.closeSubSaveAccount = function () {
        this.subSaveVisibility = false;
    };
    GameComponent.prototype.closeOfflineTopUp = function () {
        this.offlineTopUpVisibility = false;
    };
    GameComponent.prototype.setTextFieldColors = function () {
        var topUp = this.topUp.nativeElement;
        var remark = this.remark.nativeElement;
        var payAmt = this.payAmt.nativeElement;
        var passcode = this.passcode.nativeElement;
        var transferAmt = this.transferAmt.nativeElement;
        var merchantBank = this.merchantBank.nativeElement;
        var hintColor = new color_1.Color("#C60000");
        var allTextField = [topUp, remark, payAmt, passcode, transferAmt, merchantBank];
        allTextField.map(function (tf) {
            tf.color = hintColor;
            hint_util_1.setHintColor({ view: tf, color: hintColor });
            // console.log(tf);
        });
    };
    GameComponent.prototype.updateMenuBtnColor = function () {
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
        __metadata('design:type', Object)
    ], GameComponent.prototype, "menuContainer", void 0);
    __decorate([
        core_1.ViewChild("saveContainer"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "saveContainer", void 0);
    __decorate([
        core_1.ViewChild("transferContainer"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "transferContainer", void 0);
    __decorate([
        core_1.ViewChild("transferAmt"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "transferAmt", void 0);
    __decorate([
        core_1.ViewChild("transferSubmitBtn"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "transferSubmitBtn", void 0);
    __decorate([
        core_1.ViewChild("transferSubmitBtn2"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "transferSubmitBtn2", void 0);
    __decorate([
        core_1.ViewChild("transferSubmitBtn3"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "transferSubmitBtn3", void 0);
    __decorate([
        core_1.ViewChild("mainAccountSubmitBtn"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "mainAccountSubmitBtn", void 0);
    __decorate([
        core_1.ViewChild("topUp"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "topUp", void 0);
    __decorate([
        core_1.ViewChild("remark"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "remark", void 0);
    __decorate([
        core_1.ViewChild("payAmt"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "payAmt", void 0);
    __decorate([
        core_1.ViewChild("passcode"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "passcode", void 0);
    __decorate([
        core_1.ViewChild("merchantBank"), 
        __metadata('design:type', Object)
    ], GameComponent.prototype, "merchantBank", void 0);
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