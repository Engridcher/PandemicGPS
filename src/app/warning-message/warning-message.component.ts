import { Component, OnInit } from '@angular/core' 	//import Component from core package
@Component({				//@ shows that this is a declarator 
    //@Component tells that it is a Component
    selector: 'app-warning-message',		//gives name to the selector that is an html
    //tag that you will use to add component to html
    templateUrl: './warning-message.component.html', //tells where to find the template
    styleUrls: ['./warning-message.component.css'] //tells where to find the style
})
export class WarningMessageComponent implements OnInit { 			//the class
    constructor() { }
    ngOnInit() {
    }
}
