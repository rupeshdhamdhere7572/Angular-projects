import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route: Router) { }
  fun() {
    this.route.navigate(['/first']);
  }


  title = 'RoutingApp';
}
