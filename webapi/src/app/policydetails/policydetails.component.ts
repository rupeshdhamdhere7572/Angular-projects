import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { policy } from 'src/policy';
import { PolicyserviceService } from '../services/policyservice.service';

@Component({
  selector: 'app-policydetails',
  templateUrl: './policydetails.component.html',
  styleUrls: ['./policydetails.component.css']
})
export class PolicydetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private pservice: PolicyserviceService) { }
  id: any;
  policyinfo?: policy;
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pservice.getId(this.id).subscribe(data => {
      this.policyinfo = data;
      )
  }

  console.log(this.id);


}
