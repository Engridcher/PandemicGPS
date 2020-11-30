import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuggestsiteService } from '../suggestsite.service';

@Component({
  selector: 'app-suggest-site',
  templateUrl: './suggest-site.component.html',
  styleUrls: ['./suggest-site.component.css']
})
export class SuggestSiteComponent implements OnInit {

  constructor(private suggestSiteService: SuggestsiteService) { }
  covidSite : string;
  siteAddress : string;
  siteCity : string;
  siteState : string;
  sitePhone : string; 
  siteWebsite : string;
  displayError = false;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const data = {
      covidSite: this.covidSite,
      siteAddress: this.siteAddress,
      siteCity: this.siteCity,
      siteState: this.siteState,
      sitePhone: this.sitePhone,
      siteWebsite: this.siteWebsite,
    };

    // tslint:disable-next-line: max-line-length
    if (this.covidSite == null || this.siteAddress == null || this.siteCity == null || this.siteState == null || data.sitePhone === undefined || this.siteWebsite == null) {
      this.displayError = true;
      // tslint:disable-next-line: quotemark
      console.log("Submission Error");
      console.log()
    } else {
      this.displayError = false;

      console.log(data);
      this.suggestSiteService.postSuggestSite(data);
      form.resetForm(); // or form.reset();
    }
  }
  
}
