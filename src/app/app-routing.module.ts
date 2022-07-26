import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListComponent} from "./list/list.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'list', component: ListComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
