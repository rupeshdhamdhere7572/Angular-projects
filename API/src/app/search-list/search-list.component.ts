import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../policy.service';
import { policy } from '../policy';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  policies: policy = {
    id: '',
    num: '',
    Amount: '',
    userid: '',
    clientId: '',
    description:'',
  }
  id: any;
  constructor(private p:PolicyService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.p.getpolicy(this.id).subscribe((data: any = []) => {
      this.policies = data;
      console.log(data)
      
    })

  }

}
