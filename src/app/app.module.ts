import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { LoginComponent } from './login/login.component';

import { LogsService } from './logs/logs.service';
import { UserService } from './user.service';
import {LoggedInGuard} from './logged-in.guard';
import { ClarityModule } from 'clarity-angular';

import {routes} from './app.routes';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(routes)
  ],
  providers: [
    LogsService,
    UserService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
