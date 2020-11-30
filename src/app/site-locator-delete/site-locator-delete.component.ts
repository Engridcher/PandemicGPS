import { Component, OnInit } from '@angular/core';
import { ZipcodeService } from '../zipcode.service';

@Component({
  selector: 'app-site-locator-delete',
  templateUrl: './site-locator-delete.component.html',
  styleUrls: ['./site-locator-delete.component.css']
})
export class SiteLocatorDeleteComponent implements OnInit {

  constructor( private zipcodeService: ZipcodeService ) { }

  // Properties
  zipCode = "";

  ngOnInit(): void {
  }

  onDelete(zipcode: string) {
    this.zipcodeService.deleteZipCode(zipcode);
  }

}
