import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pandemic GPS';
  list = ['Home', 'About', 'Room', 'People'];
  opened = false;
  // invertebrates;
  // fish;
  // amphibians;
  // reptiles;
  animals;
}
