import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {WarningMessageComponent} from './warning-message/warning-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { SelectorComponent } from './selector/selector.component';
import { SiteLocatorComponent } from './site-locator/site-locator.component'
import { HttpClientModule } from '@angular/common/http';
import { SiteLocatorDeleteComponent } from './site-locator-delete/site-locator-delete.component';
import { SiteLocatorGetComponent } from './site-locator-get/site-locator-get.component';
import { SuggestSiteComponent } from './suggest-site/suggest-site.component';
import { CovidSitesComponent } from './covid-sites/covid-sites.component';
import { GetSuggestSiteComponent } from './get-suggest-site/get-suggest-site.component';
import { UpdateSuggestSiteComponent } from './update-suggest-site/update-suggest-site.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningMessageComponent,
    SuccessMessageComponent,
    SelectorComponent,
    SiteLocatorComponent,
    SiteLocatorDeleteComponent,
    SiteLocatorGetComponent,
    SuggestSiteComponent,
    CovidSitesComponent,
    GetSuggestSiteComponent,
    UpdateSuggestSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
