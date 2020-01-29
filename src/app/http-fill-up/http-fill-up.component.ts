import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../Information';
import Swal from 'sweetalert2'
import { UserService } from '../user.service';
// import {Router} from "@angular/router"

@Component({
  selector: 'app-http-fill-up',
  templateUrl: './http-fill-up.component.html',
  styleUrls: ['./http-fill-up.component.css']
})
export class HttpFillUpComponent implements OnInit {
  drive: Array<Info>;
  registration: boolean = true;
  tableList: boolean = false;
  editData: boolean = false;
  info: Info
  data: any
  data_id: number = 0;
  edited_id: number = null;
  edit_checker: boolean = false;

  constructor(private Details: UserService) {
    this.info = new Info();
    this.drive = new Array<Info>();
  }
  ngOnInit() {
    this.Details.getUsers().subscribe((data) => {
      data['id'] = ++this.data_id;
      this.drive = data;
    })
  }
  onSubmit(info: any) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Adding Information',
      showConfirmButton: false,
      timer: 1500
    })

    console.log('to submit >>> ' + this.edited_id);
    this.data_id = (this.data_id === 1) ? this.drive.length : this.data_id;
    var initial_value = info.form.value;
    initial_value['id'] = (!this.edit_checker) ? ++this.data_id : this.edited_id; //if(!this.edit_check === true)...else{ ... }
    if (this.edit_checker) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `You're successfully edited number ${this.edited_id}`,
        showConfirmButton: false,
        timer: 1500
      })
    }
    console.log(this.edit_checker)
    this.drive.push(initial_value);
    info.form.reset();
    this.drive.sort(function (a, b) {
      return a.id - b.id;
    });
    console.log(this.drive);
    this.registration = true;
    this.tableList = true;
    this.editData = false;
    this.edited_id = null;
    this.edit_checker = false;
    // this.router.navigate(['/dashboard'])

  }
  edit(info: any) {
    this.editData = true;
    this.info = info;
    this.edited_id = info.id; //retain the id of info to edit
    this.edit_checker = true;
    this.registration = false;
    this.tableList = false;
    this.drive = this.drive.filter(callback => {
      if (callback != info) {
        return callback;
      }
    })

    console.log('edit >>> ' + this.edited_id);

  }
  // delete(id) {
  //   console.log("deleting");

  //   this.Details.deleteUser(id).subscribe(data=>{
  //     this.drive.splice(id-1, 1)
  //   })
  // this.editData =false;
  // this.registration = false;
  // // this.tableList = true;
  // this.drive = this.drive.filter(callback => {
  //   if( callback.id !== id){ return callback }

  // })
  // this.drive.splice(this.drive.indexOf(id), 1)
  // console.log(id);

  // }
  display() {
    this.registration = true;
    this.tableList = true;
  }

}
