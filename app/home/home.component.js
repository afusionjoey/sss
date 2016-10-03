"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        // alert('home');
        // var folder = fs.knownFolders.documents();
        // var path = fs.path.join(folder.path, "Test.png");
        // var img = imageSource.fromFile(path);
        // console.log(folder.path);
    };
    HomeComponent.prototype.nav = function () {
        // alert('nav');
        this.router.navigate(["game"]);
    };
    HomeComponent.prototype.save = function () {
        alert('save');
    };
    HomeComponent.prototype.transfer = function () {
        alert('transfer');
    };
    HomeComponent.prototype.main = function () {
    };
    HomeComponent.prototype.pageLoaded = function (args) {
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
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "./home/home.component.html",
            styleUrls: ["home/home.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map