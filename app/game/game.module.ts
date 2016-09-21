import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { gameRouting } from "./game.routing";
import { GameComponent } from "./game.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    gameRouting
  ],
  declarations: [
    GameComponent
  ]
})
export class GameModule {}