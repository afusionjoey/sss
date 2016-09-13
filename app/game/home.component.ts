import {Component} from "@angular/core";
import webViewModule = require("ui/web-view");
import { Router } from "@angular/router";

@Component({
    selector: "home",
    templateUrl: "./game/home.component.html",
})
export class HomeComponent {
    constructor(private router: Router) {};

    ngOnInit() {
        // alert('home');
    }

    nav() {
        // alert('nav');
        this.router.navigate(["game"]);
    }
}
