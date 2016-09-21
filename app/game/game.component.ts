import {Component, ElementRef, ViewChild} from "@angular/core";
import webViewModule = require("ui/web-view");
import dialogs = require("ui/dialogs");
import { Animation } from "ui/animation";
import image = require("ui/image");
var plugin = require("nativescript-screenshot");

@Component({
    selector: "game",
    templateUrl: "./game/game.component.html",
    styleUrls: ["game/game.component.css"]
})
export class GameComponent {
    constructor() {};

    private url = 'http://mobile3.gameassists.co.uk/MobileWebServices/casino/game/launch/12bet/ageOfDiscovery/en?casinoID=4107&lobbyURL=http://www.12bet.uk/en-gb/casino&bankingURL=&loginType=VanguardSessionToken&authToken=Flash_4760821572597542023&isRGI=true';
    private isItemVisible = false;
    private img1;
    @ViewChild("myWebView") webView;//: webViewModule.WebView;

    @ViewChild("menuContainer") menuContainer: ElementRef;

    ngOnInit() {
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

    buttonTap(args) {
        //var img = new image.Image();
        console.dump(this.webView);
        var webViewImage = plugin.getImage(this.webView.nativeElement);
        this.img1 = webViewImage;


    
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }
    
    height = canvas.height = webViewImage.naturalHeight || webViewImage.offsetHeight || webViewImage.height;
    width = canvas.width = webViewImage.naturalWidth || webViewImage.offsetWidth || webViewImage.width;
    
    context.drawImage(webViewImage, 0, 0);
    
    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */alert('x');
        return defaultRGB;
    }
    
    length = data.data.length;
    
    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }
    
    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);
    
    console.log(rgb);

    

    }
}
