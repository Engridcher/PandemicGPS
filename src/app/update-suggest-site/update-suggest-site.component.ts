import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SuggestsiteService } from '../suggestsite.service';

@Component({
  selector: 'app-update-suggest-site',
  templateUrl: './update-suggest-site.component.html',
  styleUrls: ['./update-suggest-site.component.css']
})
export class UpdateSuggestSiteComponent implements OnInit {

  constructor(private suggestSiteService: SuggestsiteService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    covidSite: string;
  siteAddress: string;
  siteCity: string;
  siteState: string;
  sitePhone: string;
  siteWebsite: string;
  displayError = false;
  id: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
        if (params.has('id')) {
          this.id = params.get('id');
          const body = { id: this.id };
          console.log(body);

          this.suggestSiteService.getSuggestSiteForUpdate(body)
            .subscribe((data: any) => {
              console.log(data);
              this.covidSite = data.covidSite;
              this.siteAddress = data.siteAddress;
              this.siteCity = data.siteCity;
              this.siteState = data.siteState;
              this.sitePhone = data.sitePhone;
              this.siteWebsite = data.siteWebsite;

            });
      } else {
        this.id = null;
      }
    }, (err) => {
      console.log(err);
    });
  }

onSubmit(form: NgForm) {
    const data = {
      id: this.id,
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
      this.suggestSiteService.updateSuggestSite(data, this.id);
      //this.router.navigateByUrl('/getsuggestsite')
     // form.resetForm(); // or form.reset();
    }
  }

}
