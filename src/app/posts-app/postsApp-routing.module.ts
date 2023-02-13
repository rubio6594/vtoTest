import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonApproutingModule } from './../common-app/commonApp-routing.module';
import { AppPageOutletComponent } from './components/app-page-outlet/app-page-outlet.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../common-app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: '',
        component: AppPageOutletComponent,
        children: [
          {path: '', pathMatch: 'full', redirectTo:'home'},
          {path: 'home', component: HomeComponent},
        ],
        canActivate: [AuthGuard]
      },
      {path: '', loadChildren: () => CommonApproutingModule},
    ],
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsAppRoutingModule { }
