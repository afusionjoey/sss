import { RouterConfig } from "@angular/router";
import { nsProvideRouter } from "nativescript-angular/router";

import { GameComponent } from "./game/game.component";
import { HomeComponent } from "./home/home.component";
// import { AuthGuard } from "./auth.guard";

export const routes: RouterConfig = [
  { path: "", component: HomeComponent },
  { path: "game", component: GameComponent }
//   { path: "login", component: LoginComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, { enableTracing: false }),
//   AuthGuard
];
