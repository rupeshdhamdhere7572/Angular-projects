import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() val: any

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(v: string) {
    this.newItemEvent.emit(v);
  }
  ngOnInit(): void {
  }

}