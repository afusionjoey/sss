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
    private isItemVisible = false;
    private img1;
    @ViewChild("myWebView") webView;//: webViewModule.WebView;
    @ViewChild("myPhoto") photo;
    @ViewChild("menuContainer") menuContainer: ElementRef;

    ngOnInit() {
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
    }

    menu() {
        // menuContainer.animate({
        //     opacity: 0,
        //     duration: 500
        // });
        this.isItemVisible = !this.isItemVisible;
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

    buttonTap2() {
        // var colorThief = new ColorThief();
        // console.dump(colorThief);
        // var dominantColor = colorThief.getColor(this.photo, true, true);
    }

    buttonTap(args) {
        var webViewImage = plugin.getImage(this.webView.nativeElement);
        this.img1 = webViewImage;
        var colors = imageColorModule.ImageColors.getColorPalette(this.photo.nativeElement);
        console.dump(colors);
    }
}
