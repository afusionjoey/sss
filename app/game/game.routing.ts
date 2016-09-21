import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GameComponent } from "./game.component";

const gameRoutes: Routes = [
  { path: "game", component: GameComponent},
];
export const gameRouting: ModuleWithProviders = RouterModule.forChild(gameRoutes);