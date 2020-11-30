import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donation-page-update',
  templateUrl: './donation-page-update.component.html',
  styleUrls: ['./donation-page-update.component.css']
})
export class DonationPageUpdateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private donationService: DonationService
    ) { }

  fname: string;
  lname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  id: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        this.id = params.get('id');
        const body = { id: this.id };
        console.log(body);

        this.donationService.getDonationForUpdate(body)
          .subscribe((data: any) => {
            console.log(data);
            this.fname = data.fname;
            this.lname = data.lname;
            this.email = data.email;
            this.address = data.address;
            this.city = data.city;
            this.state = data.state;
            this.zip = data.zip;

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
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip,
    };

    this.donationService.updateDonation(data, this.id);

  }

}
