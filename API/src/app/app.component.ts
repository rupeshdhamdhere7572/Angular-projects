import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from './policy.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API';
  constructor(private p: PolicyService, private router: Router) { }
  ngOnInit() {
    
  }
  
  fun(id: any) {
    this.router.navigate(['/slist/' + id]);

  }
}