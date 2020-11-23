import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-covid-sites',
  templateUrl: './covid-sites.component.html',
  styleUrls: ['./covid-sites.component.css']
})
export class CovidSitesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() sitesToDisplay: [];
  sites: [];

}
