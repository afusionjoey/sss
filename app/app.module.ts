import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { GameModule } from "./game/game.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  providers: [
  ],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    GameModule
  ],
  declarations: [
      AppComponent,
      HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
