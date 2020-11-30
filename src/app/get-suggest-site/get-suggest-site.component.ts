import { Component, OnInit } from '@angular/core';
import { SuggestsiteService } from '../suggestsite.service';

@Component({
  selector: 'app-get-suggest-site',
  templateUrl: './get-suggest-site.component.html',
  styleUrls: ['./get-suggest-site.component.css']
})
export class GetSuggestSiteComponent implements OnInit {

  constructor(private suggestSite: SuggestsiteService) { }
  sites: any;

  ngOnInit(): void {
    this.suggestSite.getSuggestSite()
      .subscribe((data) => {
        console.log(data);
        this.sites = data;
      })
  }

}
