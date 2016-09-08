import {Component} from "@angular/core";
// import webViewModule = require("ui/web-view");
import frameModule = require('ui/frame');
import pageModule = require('ui/page');
import webViewModule = require("ui/web-view");

@Component({
    selector: "game",
    templateUrl: "./game/game.component.html",
})
export class GameComponent {
    constructor() {};

    ngOnInit() {
        console.log('loading');
        var webView = new webViewModule.WebView();
        console.dump('load');
        webView.on(webViewModule.WebView.loadFinishedEvent, function (args: webViewModule.LoadEventData) {
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
    }
}
