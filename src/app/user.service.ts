import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Observable } from 'rxjs'
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class UserService {
 authentication = false;
    constructor(private http:HttpClient, private _myService: UserService) {}
    

    // Uses http.get() to load data 
    getUsers() {
        return this.http.get('http://localhost:8000/users');
    }


// Uses http.post() to post data 
addUsers(firstname: string, lastname: string, username:string, email: string,
phonenumber:number, address:string, zipcode:number, password: string) {
this.http.post('http://localhost:8000/users',{ firstname, lastname, username,
email, phonenumber,address, zipcode, password })
.subscribe((responseData) => {
console.log(responseData);
           });
        location.reload();
        }
        
        
        addLogin(username:string, password: string) {
            this.http.post('http://localhost:8000/users',{  username, password })
            .subscribe((responseData) => {
            console.log(responseData);
                       });
                    location.reload();
                    } 


                   

                    addLogout() {
                        this.http.post('http://localhost:8000/users',{ })
                        .subscribe((responseData) => {
                        console.log(responseData);
                                   });
                                location.reload();
                                } 




        deleteUser(userId: string) {
            this.http.delete("http://localhost:8000/users/" + userId)
              .subscribe(() => {
                  console.log('Deleted: ' + userId);
              });
              location.reload();
            }     
            
            updateUser(userId: string,firstname: string, lastname: string,
                username:string, email: string, phonenumber:number, address:string,
                 zipcode:number, password: string) {
                //request path http://localhost:8000/users/5xbd456xx 
                //information will be send as HTTP body parameters 
                    this.http.put("http://localhost:8000/users/" 
                         + userId,{ firstname, lastname, username,
                            email, phonenumber,address, zipcode, password  })
                      .subscribe(() => {
                          console.log('Updated: ' + userId);
                      });
                      location.reload();
                }
            
        
}