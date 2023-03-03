import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Output() fun:EventEmitter<any> = new EventEmitter()
  // @Input() data: string = ""
  // @Input() stud: any;
  // @Input() stud1: any=[]

  ngOnInit(): void {
    this.fun.emit("Data sending from child to parent")
  }

}
