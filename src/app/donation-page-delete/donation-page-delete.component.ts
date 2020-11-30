import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donation-page-delete',
  templateUrl: './donation-page-delete.component.html',
  styleUrls: ['./donation-page-delete.component.css']
})
export class DonationPageDeleteComponent implements OnInit {

  constructor(private donationService: DonationService) { }

  donationDelete : string;

  ngOnInit(): void {
  }

  deleteDonation(donationDelete: string) {
    this.donationService.deleteUserDonation(donationDelete)
}
}
