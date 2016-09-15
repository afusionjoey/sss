"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var imageSource = require("image-source");
var fs = require("file-system");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        // alert('home');
        var folder = fs.knownFolders.documents();
        var path = fs.path.join(folder.path, "Test.png");
        var img = imageSource.fromFile(path);
        console.log(folder.path);
    };
    HomeComponent.prototype.nav = function () {
        // alert('nav');
        this.router.navigate(["game"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "./home/home.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map