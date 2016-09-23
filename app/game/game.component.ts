import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import webViewModule = require("ui/web-view");
import dialogs = require("ui/dialogs");
import { Animation } from "ui/animation";
import image = require("ui/image");
var plugin = require("nativescript-screenshot");
var imageColorModule = require('nativescript-image-colors/nativescript-image-colors');
// import { ImageColors  } from 'nativescript-image-colors/nativescript-image-colors';


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
    private transferVisibility = false;
    private offlineTopUpVisibility = false;
    private mainAccountVisibility = false;
    private saveVisibility = false;
    private saveMenuVisibility = false;
    @ViewChild("myWebView") webView;//: webViewModule.WebView;
    @ViewChild("screenshot") screenshot;
    @ViewChild("button1") button;
    @ViewChild("menuContainer") menuContainer: ElementRef;

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
    }

    showMenu() {
        // let menuContainer = this.menuContainer.nativeElement;
        let animations = [];

        this.menuVisibility = !this.menuVisibility;
        // Fade out the initial content over one half second
        // menuContainer.animate({
        //     opacity: 0,
        //     duration: 500
        // }).then(function() {
        // // this.menuVisibility = true;
        //     alert();
        // })
    }

    transferButtonTap() {
        this.transferVisibility = !this.transferVisibility;
    }

    transferIn() {
        this.saveVisibility = !this.saveVisibility;
    }

    transferOut() {
        this.saveVisibility = !this.saveVisibility;
    }

    mainAccountTap() {
        this.mainAccountVisibility = !this.mainAccountVisibility;
    }

    saveButtonTap() {
        this.saveMenuVisibility = !this.saveMenuVisibility;
    }

    weChatPayTap() {
        this.mainAccountVisibility = !this.mainAccountVisibility;
    }

    bankTransferTap() {
        this.mainAccountVisibility = !this.mainAccountVisibility;
    }

    doNothing() {
        this.menuVisibility = true;
    }

    close() {
        this.menuVisibility = false;
    }

}
