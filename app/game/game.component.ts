import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import webViewModule = require("ui/web-view");
import dialogs = require("ui/dialogs");
import { Animation } from "ui/animation";
import image = require("ui/image");
var plugin = require("nativescript-screenshot");
var imageColorModule = require('nativescript-image-colors/nativescript-image-colors');
// import { ImageColors  } from 'nativescript-image-colors/nativescript-image-colors';
import { Color } from "color";
import { setHintColor } from "../utils/hint-util";
import { TextField } from "ui/text-field";

@Component({
    selector: "game",
    templateUrl: "./game/game.component.html",
    styleUrls: ["game/game.component.css"]
})
export class GameComponent implements OnInit {
    constructor() {};

    private url = 'http://mobile3.gameassists.co.uk/MobileWebServices/casino/game/launch/12bet/ageOfDiscovery/en?casinoID=4107&lobbyURL=http://www.12bet.uk/en-gb/casino&bankingURL=&loginType=VanguardSessionToken&authToken=Flash_4760821572597542023&isRGI=true';
    private img;
    private menuVisibility = false;
    private transferMenuVisibility = false;
    private offlineTopUpVisibility = false;
    private mainAccountVisibility = false;
    private saveVisibility = false;
    private subSaveVisibility = false;
    private saveMenuVisibility = false;
    private menuButtonVisibility = true;
    private messageVisibility = true;
    private isFilled1 = false;
    private isFilled2 = false;
    private isFilled3 = false;
    private transferText;
    private saveContainerRow = 1;
    private optionsBarRow = 2;
    @ViewChild("myWebView") webView;//: webViewModule.WebView;
    @ViewChild("screenshot") screenshot;
    @ViewChild("button1") button;
    @ViewChild("menuContainer") menuContainer;
    @ViewChild("saveContainer") saveContainer;
    @ViewChild("transferContainer") transferContainer;
    @ViewChild("transferAmt") transferAmt;
    @ViewChild("transferSubmitBtn") transferSubmitBtn;
    @ViewChild("transferSubmitBtn2") transferSubmitBtn2;
    @ViewChild("transferSubmitBtn3") transferSubmitBtn3;
    @ViewChild("mainAccountSubmitBtn") mainAccountSubmitBtn;

    @ViewChild("topUp") topUp;
    @ViewChild("remark") remark;
    @ViewChild("payAmt") payAmt;
    @ViewChild("passcode") passcode;
    @ViewChild("merchantBank") merchantBank;

    ngAfterViewChecked() {
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
    }

    ngOnInit() {
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
    }

    menu() {
        // menuContainer.animate({
        //     opacity: 0,
        //     duration: 500
        // });
        // this.isItemVisible = !this.isItemVisible;
    }

    transfer() {
        this.prompt('Transfer', 'Enter the amount that you wish to transfer.');
    }

    save() {
        this.prompt('Save', 'Enter the amount that you wish to save.');
    }

    prompt(title, message) {
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
    }

    menuButtonTap(args) {
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
    }

    showMenu() {
        // let menuContainer = this.menuContainer.nativeElement;
        let animations = [];

        this.menuVisibility = !this.menuVisibility;
        this.menuButtonVisibility = false;
        // Fade out the initial content over one half second
        this.menuContainer.nativeElement.animate({
            translate: { x: 0, y: 0},
            duration: 500
        }).then(function() {
        // this.menuVisibility = true;
            // alert();
        })
    }

    transferButtonTap() {
        this.transferMenuVisibility = !this.transferMenuVisibility;
        this.saveMenuVisibility = false;
        if (this.transferMenuVisibility === true) {
            this.saveContainerRow = 3;
            this.optionsBarRow = 1;
        } else {
            this.saveContainerRow = 1;
            this.optionsBarRow = 3;
        }
        // this.saveContainerToggle = !this.saveContainerToggle;
        // console.dump(this.transferContainer.nativeElement);
    }

    transferIn() {
        this.transferText = "进";
        this.saveVisibility = !this.saveVisibility;
        this.menuVisibility = false;
        this.messageVisibility = true;
    }

    transferOut() {
        this.transferText = "出";
        this.saveVisibility = !this.saveVisibility;
        this.menuVisibility = false;
        this.messageVisibility = true;
    }

    saveButtonTap() {
        this.saveMenuVisibility = !this.saveMenuVisibility;
        this.transferMenuVisibility = false;

        if (this.transferMenuVisibility === true) {
            this.saveContainerRow = 3;
            this.optionsBarRow = 1;
        } else {
            this.saveContainerRow = 1;
            this.optionsBarRow = 3;
        }
    }

    mainAccountTap() {
        this.mainAccountVisibility = !this.mainAccountVisibility;
        this.menuVisibility = false;
    }

    weChatPayTap() {
        this.mainAccountVisibility = !this.mainAccountVisibility;
        this.menuVisibility = false;
    }

    bankTransferTap() {
        this.offlineTopUpVisibility = !this.offlineTopUpVisibility;
        this.menuVisibility = false;
    }

    doNothing() {
        this.menuVisibility = true;
    }

    close() {
        var self = this;

        this.menuContainer.nativeElement.animate({
            translate: { x: 200, y: 0},
            duration: 500
        }).then(function(){
            self.menuVisibility = false;
            self.menuButtonVisibility = true;
        });
    }

    closeMainAccount() {
        this.mainAccountVisibility = false;
    }

    closeSave() {
        this.saveVisibility = false;
    }

    exitGame() {
        alert('exit');
    }

    textChange1(field) {
        if (field != '') {
            this.isFilled1 = true;
            this.mainAccountSubmitBtn.nativeElement.style.backgroundColor = '#CD1F1F';
        } else {
            this.isFilled1 = false;
            this.mainAccountSubmitBtn.nativeElement.style.backgroundColor = '#979797';
        }
    }

    textChange2(field1, field2) {
        if (field1 != '' || field2 != '') {
            this.isFilled2 = true;
            this.transferSubmitBtn2.nativeElement.style.backgroundColor = '#CD1F1F';
        } else {
            this.isFilled2 = false;
            this.transferSubmitBtn2.nativeElement.style.backgroundColor = '#979797';
        }
    }

    textChange3(field1, field2) {
        if (field1 != '' || field2 != '') {
            this.isFilled3 = true;
            this.transferSubmitBtn3.nativeElement.style.backgroundColor = '#CD1F1F';
        } else {
            this.isFilled3 = false;
            this.transferSubmitBtn3.nativeElement.style.backgroundColor = '#979797';
        }
    }

    selection() {
        if (this.messageVisibility === true) {
            this.messageVisibility = false;
        } else {
            this.subSaveVisibility = true;
            this.saveVisibility = false;
        }
    }

    closeSubSaveAccount() {
        this.subSaveVisibility = false;
    }

    closeOfflineTopUp() {
        this.offlineTopUpVisibility = false;
    }

    setTextFieldColors() {
        let topUp = <TextField>this.topUp.nativeElement;
        let remark = <TextField>this.remark.nativeElement;
        let payAmt = <TextField>this.payAmt.nativeElement;
        let passcode = <TextField>this.passcode.nativeElement;
        let transferAmt = <TextField>this.transferAmt.nativeElement;
        let merchantBank = <TextField>this.merchantBank.nativeElement;
        let hintColor = new Color("#C60000");
        var allTextField = [topUp, remark, payAmt, passcode, transferAmt, merchantBank];

        allTextField.map((tf) => {
            tf.color = hintColor;
            setHintColor({ view: tf, color: hintColor });
            // console.log(tf);
        });
    }

    updateMenuBtnColor() {
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
    }
}
