import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor( private _myService: UserService, private router:Router,
  public route: ActivatedRoute)
  {
    
  }
    
  onSubmit(){
    console.log("You Logout: " );
      this._myService.addLogout();
this.router.navigate(['/login']);
  }
  ngOnInit()
  {}
  

}