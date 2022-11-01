import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prototype-frontend';

  testData = [
    { firstName: 'patrick', lastName: 'ramge' },
    { firstName: 'mark', lastName: 'corazon' },
    { firstName: 'michiel', lastName: 'stornebrink' },
    { firstName: 'wilco', lastName: 'morren' },
    { firstName: 'li-wei', lastName: 'yeh' },
  ];

  capitalizeFirstLetter(string: string) : string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
}
