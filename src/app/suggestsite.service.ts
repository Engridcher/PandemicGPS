import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SuggestsiteService {

  constructor( private http: HttpClient,
    public router: Router
    ) { }

    postSuggestSite(data: any)  {
    this.http.post('http://localhost:8000/api/suggestsite', data)
      .subscribe(
        (mydata) => {
          console.log('POST Request is successful', data);
          location.reload();
        }
        , (error) => {
          console.log('Error occurred: ', error);
        }
        );
  }

  getSuggestSite() {
    return this.http.get('http://localhost:8000/api/suggestsite/');
    location.reload();
  }

   getSuggestSiteForUpdate(body) {
    console.log(body);
    return this.http.post('http://localhost:8000/api/suggestsite/forupdate', body );
    //location.reload();
  }

  deleteSuggestSite(suggestsite: string) {
    this.http.delete('http://localhost:8000/api/suggestsite/' + suggestsite)
      .subscribe(() => {
        console.log('Deleted: ' + suggestsite);
        location.reload();
      });
  }

  updateSuggestSite(data: any, id) {
    this.http.put(`http://localhost:8000/api/suggestsite/${id}`, data)
      .subscribe((result) => {
        this.router.navigateByUrl('/getsuggestsite');
        return result;
       });

  }

}
