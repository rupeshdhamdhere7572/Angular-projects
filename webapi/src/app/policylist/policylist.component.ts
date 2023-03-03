import { Component, OnInit } from '@angular/core';
import { PolicyserviceService } from '../services/policyservice.service';
import { policy } from 'src/policy';
 import { Router } from '@angular/router';
@Component({
  selector: 'app-policylist',
  templateUrl: './policylist.component.html',
  styleUrls: ['./policylist.component.css']
})
export class PolicylistComponent implements OnInit {

  policies?:policy[];
id:any
  constructor(private pservice:PolicyserviceService,private route:Router) { }


  ngOnInit(): void {
    this.pservice.getPolicyData().subscribe((data: any) => {
      console.log(data);
      this.policies = data;
    
    })
  }
    fun(id:any)
    {
      this.pservice.getId(id).subscribe((books) => {
        this.p = books;
      })
      if (this.p ==)
      {
        this.message = true;
        return;
      }
      else {
        this.router.navigate(['policy'
      }
        
      for(i)
        this.route.navigate(['/policy/' + id])
      }
    }
}
  
