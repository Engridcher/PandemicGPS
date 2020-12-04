import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  @Input() firstname: string;
  @Input() lastname: string;
  @Input() username: string;
  @Input() email: string;
  @Input() phonenumber: number;
  @Input() address: string;
  @Input() zipcode: number;
  @Input() password: string;

  public mode = 'Add'; //default mode
  private id: string; //user ID


  constructor(private _myService: UserService, private router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'edit'; /*request had a parameter _id */
        this.id = paramMap.get('_id');
      }
      else {
        this.mode = 'Add';
        this.id = null;
      }
    });
  }

  onSubmit() {
    console.log("You Registered: " + this.firstname + " " + this.lastname + " "
      + this.username + " " + this.email + " " + this.phonenumber + " "
      + this.address + " " + this.zipcode + " " + this.password);

    if (this.mode === 'Add') {
      // tslint:disable-next-line: max-line-length
      this._myService.addUsers(this.firstname, this.lastname, this.username, this.email, this.phonenumber, this.address, this.zipcode, this.password);
      }

    if (this.mode === 'edit') {
      // tslint:disable-next-line: max-line-length
      this._myService.updateUser(this.id, this.firstname, this.lastname, this.username, this.email, this.phonenumber, this.address, this.zipcode, this.password);
      }

    this.router.navigate(['/login']);
  }
}
