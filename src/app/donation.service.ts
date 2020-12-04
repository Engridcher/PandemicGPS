import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  postUserDonation(user) {
    console.log(user)
    return this.http.post('http://localhost:8000/api/donation', user)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
          console.log('Error occurred: ', error);
       });
  }


  async deleteUserDonation(donation: string) {
    this.http.delete('http://localhost:8000/api/donation/' + donation)
      .subscribe(() => {
        console.log('Deleted: ' + donation);
        location.reload();
      });
  }

  getDonation() {
    // subscribe in wrapping function
    return this.http.get('http://localhost:8000/api/donation/');
    location.reload();
  }

  getDonationForUpdate(body) {
    console.log(body);

    return this.http.post('http://localhost:8000/api/donation/forupdate', body);
    //location.reload();
  }

  updateDonation(data: any, id) {
    this.http.put(`http://localhost:8000/api/donation/${id}`, data)
      .subscribe((result) => {
        this.router.navigateByUrl('/getdonationpage');
        return result;
      });
  }

}
