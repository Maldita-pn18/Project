import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Info } from '../Information';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-child-driven',
  templateUrl: './child-driven.component.html',
  styleUrls: ['./child-driven.component.css']
})
export class ChildDrivenComponent implements OnInit {
  @Input() listOfRegistered: Array<Info>;
  // @Input() biodata: Info;
  // @Output() edit_event = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() add_register_display = new EventEmitter();
  // @Output() editClick = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  Edit(info: any) {
    this.edit.emit(info);
  }

  addRegister(){
    this.add_register_display.emit();
  }

  // edit(index:Number) {
  //   this.edit_event.emit([false,true]);
  //   this.editClick.emit(index);
  // }
}
