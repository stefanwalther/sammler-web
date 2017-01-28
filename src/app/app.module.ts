import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { LogsComponent }        from './logs/logs.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { JobsComponent }        from './jobs/jobs.component';
import { LinksComponent }       from './links/links.component';

import { LogsService }          from './logs/logs.service';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    DashboardComponent,
    JobsComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
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
        component: JobsComponent
      },
      {
        path: 'logs',
        component: LogsComponent
      },
      {
        path: 'links',
        component: LinksComponent
      },


    ])
  ],
  providers: [
    LogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
