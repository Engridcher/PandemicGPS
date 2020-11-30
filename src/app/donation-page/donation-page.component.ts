import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donation-page',
  templateUrl: './donation-page.component.html',
  styleUrls: ['./donation-page.component.css']
})
export class DonationPageComponent implements OnInit {

  constructor(private donationService: DonationService) { }

  fname: string;
  lname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string; 
  a3: string;
  cardname: string;
  cardnumber: string;
  expmonth: string;
  expyear: string;
  cvv: string;
  
  submitted: Boolean;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    let formvalues = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip,
      a3: this.a3,
      cardname: this.cardname,
      cardnumber: this.cardnumber,
      expmonth: this.expmonth,
      expyear: this.expyear,
      cvv: this.cvv,
    };

    this.donationService.postUserDonation(formvalues);
    form.resetForm()
    console.log(this.fname);

  }

}
