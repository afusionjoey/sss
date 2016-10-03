import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { GameModule } from "./game/game.module";
import { HomeModule } from "./home/home.module";

@NgModule({
  providers: [
  ],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    GameModule,
    HomeModule
  ],
  declarations: [
      AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
