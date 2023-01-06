import { Component } from '@angular/core';
import { Router, Navigation } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  templateUrl: './not-found-component.component.html',
  styleUrls: ['./not-found-component.component.scss']
})
export class NotFoundComponentComponent {

  ShowPage():void{
    this.router.navigate(['/404'], { 
      skipLocationChange: true,
      state: {
          // Whatever data you need on the 404 page
          source: 'article',
          id: 123456
      }
  });
  }

  constructor(private router: Router) {

    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

}
