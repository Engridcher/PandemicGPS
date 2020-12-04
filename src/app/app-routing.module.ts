import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationPageDeleteComponent } from './donation-page-delete/donation-page-delete.component';
import { DonationPageGetComponent } from './donation-page-get/donation-page-get.component';
import { DonationPageUpdateComponent } from './donation-page-update/donation-page-update.component';
import { DonationPageComponent } from './donation-page/donation-page.component';
import { GetSuggestSiteComponent } from './get-suggest-site/get-suggest-site.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { SiteLocatorDeleteComponent } from './site-locator-delete/site-locator-delete.component';
import { SiteLocatorGetComponent } from './site-locator-get/site-locator-get.component';
import { SiteLocatorComponent} from './site-locator/site-locator.component'
import { SuggestSiteComponent } from './suggest-site/suggest-site.component';
import { UpdateSuggestSiteComponent } from './update-suggest-site/update-suggest-site.component';

const routes: Routes = [
  { path: 'addUsers', component: NewUserFormComponent },
  { path: 'login', component: LoginComponent},
  { path: 'searchzipcode', component: SiteLocatorComponent},
  // { path: 'getzipcode', component: SiteLocatorGetComponent},
  { path: 'deletezipcode', component: SiteLocatorDeleteComponent},
  { path: 'suggestsite', component: SuggestSiteComponent},
  { path: 'getsuggestsite', component: GetSuggestSiteComponent },
  { path: 'getsuggestsite', component: GetSuggestSiteComponent },
  { path: 'updatesuggestsite/:id', component: UpdateSuggestSiteComponent },
  { path: 'donationpage', component: DonationPageComponent },
  { path: 'getdonationpage', component: DonationPageGetComponent },
  { path: 'updatedonationpage/:id', component: DonationPageUpdateComponent },
  { path: 'deletedonationpage', component: DonationPageDeleteComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

