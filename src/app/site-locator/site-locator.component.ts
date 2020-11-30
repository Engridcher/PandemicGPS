import { Component, OnInit } from '@angular/core';
import {ZipcodeService} from '../zipcode.service';

@Component({
  selector: 'app-site-locator',
  templateUrl: './site-locator.component.html',
  styleUrls: ['./site-locator.component.css']
})
export class SiteLocatorComponent {

  constructor( private zipcodeService: ZipcodeService ) { }

// Properties
  zipCode = "";
  clicked = false;
  mydata = {};
  returnedZips: [];
  
// Functions
  searchZipCode() {
  
    this.mydata = {
      zipCode:this.zipCode
    };

const returnval = this.zipcodeService.postZipcode(this.mydata)
      .subscribe(
        (returndata: []) => {
          console.log('POST Request is successful', returndata);
          this.returnedZips = [...returndata];
          console.log(this.returnedZips)
        }
        , (error) => {
          console.log('Error occurred: ', error);
        }
      );
    console.log(returnval);
    // this.zipcodeService.postZipcode(this.mydata)
  }

  onDelete(zipcode: string) {
    this.zipcodeService.deleteZipCode(zipcode);
  }




}
