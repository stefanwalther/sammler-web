import { DashboardComponent } from './dashboard/dashboard.component';
import { LogsComponent } from './logs/logs.component';
import { JobsComponent } from './jobs/jobs.component';
import { LinksComponent } from './links/links.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './logged-in.guard';


// Todo: Structure for routing is better here: https://github.com/cornflourblue/angular2-jwt-authentication-example/blob/master/app/app.module.ts
export const routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'jobs',
    component: JobsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'logs',
    component: LogsComponent
  },
  {
    path: 'links',
    component: LinksComponent
  }
];
