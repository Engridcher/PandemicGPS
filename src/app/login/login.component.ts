import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;

  constructor(private _myService : UserService, private router: Router, private route: ActivatedRoute)
    { }

  onSubmit(){
    console.log("You Login: " + this.username + " "+ this.password );
   this._myService.addLogin(this.username, this.password );

  // this._myService.addLogout(this.username, this.password );

  this.router.navigate(['/']);


  }

  ngOnInit(){

  }

}

