import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "../login/login.component";

@NgModule({
  declarations: [AdminLayoutComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/chat', pathMatch: 'full'},
          //{path: 'chat', component: ChatComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule {

}
