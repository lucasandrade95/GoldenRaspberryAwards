import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'login', component: LoginComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
