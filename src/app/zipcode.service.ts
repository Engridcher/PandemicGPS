import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeService {

  constructor(private http: HttpClient) { }

  postZipcode(data: any) {
    return this.http.post('http://localhost:8000/api/zipcode', data)
      /* .subscribe(
        (mydata) => {
          console.log('POST Request is successful', data);
          location.reload();
        }
        , (error) => {
          console.log('Error occurred: ', error);
        }
      ); */
    
  }

  async deleteZipCode(zipcode: string) {
    this.http.delete('http://localhost:8000/api/zipcode/' + zipcode)
      .subscribe(() => {
        console.log('Deleted: ' + zipcode);
        location.reload();
      });
  }

  getZipCode() {
    return this.http.get('http://localhost:8000/api/zipcode/');
    location.reload();
   }

}
