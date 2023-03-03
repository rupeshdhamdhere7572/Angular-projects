import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  
  policies: any[] = []
  constructor(private p: PolicyService, private route:ActivatedRoute ,private router:Router ) { }
  ngOnInit() {
    this.p.getpolicies().subscribe((data: any) => {
      console.log(data);
      this.policies = data;
    })
  }


}
