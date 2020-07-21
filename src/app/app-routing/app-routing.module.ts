import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {ChatComponent} from '../chat/chat.component';
import {ServerComponent} from '../server/server.component';




const routes: Routes = [
  {
    path: '/ChatComponent',
    component: ChatComponent,
  },
  {
    path: '/ServerComponent',
    component: ServerComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

