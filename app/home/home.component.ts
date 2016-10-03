import {Component} from "@angular/core";
import { Router } from "@angular/router";
import webViewModule = require("ui/web-view");
import imageSource = require("image-source");
import fs = require("file-system");

@Component({
    selector: "home",
    templateUrl: "./home/home.component.html",
    styleUrls: ["home/home.component.css"]
})
export class HomeComponent {
    constructor(private router: Router) {};

    private offset;

    ngOnInit() {
        // alert('home');
        // var folder = fs.knownFolders.documents();
        // var path = fs.path.join(folder.path, "Test.png");
        // var img = imageSource.fromFile(path);
        // console.log(folder.path);
    }

    nav() {
        // alert('nav');
        this.router.navigate(["game"]);
    }

    save() {
        alert('save');
    }

    transfer() {
        alert('transfer');
    }

    main() {

    }

    pageLoaded(args) {
        var mainPage = args[0];
        var saveBtn = args[1];
        var transferBtn = args[2];

        // setTimeout(function(){
        //     var pageWidth = mainPage.getMeasuredWidth();
        //     var buttonWidth = saveBtn.getMeasuredWidth();
        //     var offset =  (pageWidth/2) - buttonWidth;
        //     saveBtn.style.marginLeft = offset;
        //     transferBtn.style.marginRight = offset;
        //     console.log(offset);
        // }, 100);
    }
}
