import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
imports {}

@Component({
  selector: 'app-policyadd',
  templateUrl: './policyadd.component.html',
  styleUrls: ['./policyadd.component.css']
})
export class PolicyaddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  addpolicy():
    {
    const data = {
      id: this.book?.id,
      num: this.book?.num,
      amount: this.book?.amount,
      userId: this.book?.userId,
      clientid: this.book?.clientid,
      num: this.description?.description,
      
    }
  }
}
