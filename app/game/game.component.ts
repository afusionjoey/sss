import {Component} from "@angular/core";
import webViewModule = require("ui/web-view");
import dialogs = require("ui/dialogs");

@Component({
    selector: "game",
    templateUrl: "./game/game.component.html",
})
export class GameComponent {
    constructor() {};

    private url = 'http://mobile3.gameassists.co.uk/MobileWebServices/casino/game/launch/12bet/ageOfDiscovery/en?casinoID=4107&lobbyURL=http://www.12bet.uk/en-gb/casino&bankingURL=&loginType=VanguardSessionToken&authToken=Flash_4760821572597542023&isRGI=true';

    ngOnInit() {
        var webView = new webViewModule.WebView();
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
        webView.url = "https://www.google.com/";
    }

    tap() {
        alert('test');
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
}
