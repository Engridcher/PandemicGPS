import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donation-page-get',
  templateUrl: './donation-page-get.component.html',
  styleUrls: ['./donation-page-get.component.css']
})
export class DonationPageGetComponent implements OnInit {

  constructor(private donationService: DonationService) { }

  donationData: any;

  ngOnInit(): void {

  }

  getDonationPage() {
    this.donationService.getDonation()
      .subscribe((data) => {
        console.log('get donation');
        this.donationData = data;
        console.log(data);
       })
  }

}
