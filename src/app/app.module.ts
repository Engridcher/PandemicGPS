import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import {WarningMessageComponent} from './warning-message/warning-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { SelectorComponent } from './selector/selector.component';
import { SiteLocatorComponent } from './site-locator/site-locator.component';
import { HttpClientModule } from '@angular/common/http';
import { SiteLocatorDeleteComponent } from './site-locator-delete/site-locator-delete.component';
import { SiteLocatorGetComponent } from './site-locator-get/site-locator-get.component';
import { SuggestSiteComponent } from './suggest-site/suggest-site.component';
import { CovidSitesComponent } from './covid-sites/covid-sites.component';
import { GetSuggestSiteComponent } from './get-suggest-site/get-suggest-site.component';
import { UpdateSuggestSiteComponent } from './update-suggest-site/update-suggest-site.component';
import { DonationPageComponent } from './donation-page/donation-page.component';
import { DonationPageDeleteComponent } from './donation-page-delete/donation-page-delete.component';
import { DonationPageGetComponent } from './donation-page-get/donation-page-get.component';
import { DonationPageUpdateComponent } from './donation-page-update/donation-page-update.component';
import { LoginComponent } from './login/login.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserService } from './user.service';

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
    UpdateSuggestSiteComponent,
    DonationPageComponent,
    DonationPageDeleteComponent,
    DonationPageGetComponent,
    DonationPageUpdateComponent,
    LoginComponent,
    NewUserFormComponent,
    ListUsersComponent,
    UserProfileComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
