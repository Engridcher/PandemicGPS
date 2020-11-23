import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetSuggestSiteComponent } from './get-suggest-site/get-suggest-site.component';
import { SiteLocatorDeleteComponent } from './site-locator-delete/site-locator-delete.component';
import { SiteLocatorGetComponent } from './site-locator-get/site-locator-get.component';
import { SiteLocatorComponent} from './site-locator/site-locator.component'
import { SuggestSiteComponent } from './suggest-site/suggest-site.component';
import { UpdateSuggestSiteComponent } from './update-suggest-site/update-suggest-site.component';

const routes: Routes = [
  { path: 'searchzipcode', component: SiteLocatorComponent}, 
  // { path: 'getzipcode', component: SiteLocatorGetComponent},
  { path: 'deletezipcode', component: SiteLocatorDeleteComponent},
  { path: 'suggestsite', component: SuggestSiteComponent},
  { path: 'getsuggestsite', component: GetSuggestSiteComponent },
  { path: 'getsuggestsite', component: GetSuggestSiteComponent },
  { path: 'updatesuggestsite/:id', component: UpdateSuggestSiteComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

