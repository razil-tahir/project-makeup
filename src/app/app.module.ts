import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {MainModule} from './main/main.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AcademyModule} from './academy/academy.module';
import {AcademyService} from '../services/academy.service';
import {DashboardModule} from './dashboard/dashboard.module';
import {MakeupService} from '../services/makeup.service';
import {MakeupModule} from './makeup/makeup.module';
import {MakeupCreatorDialog} from './academy/makeup-creator.dialog';
import {MatDialogRef} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MainModule,
    DashboardModule,
    AcademyModule,
    MakeupModule,
  ],
  providers: [AcademyService, MakeupService, MakeupCreatorDialog],
  bootstrap: [AppComponent]
})
export class AppModule {
}
