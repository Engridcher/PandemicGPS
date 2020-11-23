import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  constructor() { }
  clicked = false;
  buttonName = 'Click me!';
  firstName = ''

  buttonClicked(){
    this.clicked = true;
    this.buttonName = 'Clicked';
 }

 buttonOnMouseOver(){
  console.log('Press the button');
}

  

  ngOnInit() {
  }
}

