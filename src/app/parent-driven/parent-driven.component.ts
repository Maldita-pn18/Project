import { Component, OnInit } from '@angular/core';
import { Info } from '../Information';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-parent-driven',
  templateUrl: './parent-driven.component.html',
  styleUrls: ['./parent-driven.component.css']
})
export class ParentDrivenComponent implements OnInit {

  listOfInfo: Array<Info>;
  info: Info;
  registration: boolean = true;
  tableList: boolean = false

  constructor() {
    this.listOfInfo = new Array<Info>();
    this.info = new Info();
  }

  onSubmit(info: any) {
    // alert("You already registered!")
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You already registered!',
      showConfirmButton: false,
      timer: 1500
    })
    this.listOfInfo.push(info.form.value)
    info.form.reset();
    this.registration = false;
    this.tableList = true;
  }

  ngOnInit() {
  }

  edit(info: any) {
    
    this.info = info;
    this.registration = true;
    this.tableList = false;
    this.listOfInfo = this.listOfInfo.filter(callback => {
      if (callback != info) {
        return callback;
      }
      
    })
  }

  display() {
    this.registration = true;
    this.tableList = false;
  }


  // info : Info;
  // fullname : string;
  // email : string;
  // gender: string;
  // phone: string;
  // username: string;
  // password: string;
  // rpassword : string;

  // to_child_informations:Info[]=[]; //array of Info classes (a class in Information.ts)

  // transaction : boolean = false; // boolean varible if for edit or register, if false = registration else for editing 
  // index_to_edit;

  // constructor() {
  //   this.info = new Info();
  // }



  // onsubmit(){
  //   // full_name:string,Email:string,Gender:string,user_name:string,phone_number:string,Password:string
  //   if(this.transaction){
  //     this.to_child_informations[this.index_to_edit].fullname = this.fullname;
  //     this.to_child_informations[this.index_to_edit].email = this.email;
  //     this.to_child_informations[this.index_to_edit].gender = this.gender;
  //     this.to_child_informations[this.index_to_edit].username = this.username;
  //     this.to_child_informations[this.index_to_edit].phoneNo = this.phone;
  //     this.to_child_informations[this.index_to_edit].password = this.password;

  //     this.registration = false;
  //     this.tableList = true; 
  //   }else{
  //     var return_form_INFO_class = this.info.informations(this.fullname,this.email,this.gender,this.username,this.phone,this.password);
  //     this.to_child_informations.push(return_form_INFO_class);
  //     this.registration = false;
  //     this.tableList=true;
  //   }
  // }

  // display(show:boolean[]){
  //   this.registration = show[1];
  //   this.tableList = show[0];
  // }

  // update(index:Number){
  //   this.index_to_edit = index;
  // }
}
