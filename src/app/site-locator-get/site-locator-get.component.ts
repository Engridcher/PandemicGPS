import { Component, OnInit } from '@angular/core';
import { ZipcodeService } from '../zipcode.service';

@Component({
  selector: 'app-site-locator-get',
  templateUrl: './site-locator-get.component.html',
  styleUrls: ['./site-locator-get.component.css']
})
export class SiteLocatorGetComponent implements OnInit {

  constructor( private zipcodeService: ZipcodeService ) { }
    
  // Properties
    zipCode: string;
    mydata;
    clicked = false;
    getData: any;

  ngOnInit(): void {
  }

   // Functions
   fetchZipCode() {
    this.getData = this.zipcodeService.getZipCode();
    console.log(this.getData);
    this.getData.subscribe((data) => {
      console.log('data: ', data);
      this.mydata = data;
      console.log(this.mydata);
     // location.reload();
    });
  }


}
