import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecomponent',
  templateUrl: './pipecomponent.component.html',
  styleUrls: ['./pipecomponent.component.css']
})
export class PipecomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'pipe component'
  todaydate = new Date();
  jsonval = { name: 'Alex', age: '25', address: { a1: 'paris', a2: 'france' } };
  months = ['jan', 'feb', 'march', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];

  people = [
    {
      "name": "roshan",
      "age": 25,
      "country": "usa",
      "gender": "male"
    },
    {
      "name": "roshan",
      "age": 25,
      "country": "usa",
      "gender": "male"
    },
    {
      "name": "roshan",
      "age": 25,
      "country": "usa",
      "gender": "male"
    },
    {
      "name": "roshan",
      "age": 25,
      "country": "usa",
      "gender": "male"
    },

  ]

}
