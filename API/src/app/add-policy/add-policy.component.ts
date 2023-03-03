import { Component, OnInit } from '@angular/core';
import { policy } from '../policy';
import { PolicyService } from '../policy.service';
@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

  constructor(private p:PolicyService) { }
  submitted = false;
  policies: policy = {
    id: '',
    num: '',
    Amount: '',
    userid: '',
    clientId: '',
    description:'',
  }

  ngOnInit(): void {
  }
  savepolicy() {
    const data = {
      id:this.policies.id,
      num:this.policies.num,
      Amount:this.policies.Amount,
      userid:this.policies.userid,
      clientId:this.policies.clientId,
      description:this.policies.description,
    };
    this.p.createPolicy(data).subscribe((data: any)=> {
      this.submitted = true;
    })
}
}
