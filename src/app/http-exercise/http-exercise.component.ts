import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Info } from '../Information';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-http-exercise',
  templateUrl: './http-exercise.component.html',
  styleUrls: ['./http-exercise.component.css']
})
export class HttpExerciseComponent implements OnInit {
  @Input() driveStore: Array<Info>
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() add_user_display = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {

  }
  addUser() {
    this.add_user_display.emit();
  }
  Edit(info: any) {
    this.edit.emit(info);
  }
  Delete(id) {

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Deleted!',
      text: `Successfully deleted.`,
      showConfirmButton: false,
      timer: 1500
    })
    {
      this.userService.deleteUser(id).subscribe((dele)=>this.driveStore.splice(id,1))
    }  
    // for (let i = 0; i < this.driveStore.length; ++i) {
    //   if (this.driveStore[i].id === id) {
    //     this.driveStore.splice(i, 1);
    //   }
    // }
    // this.userService.deleteUser(id).subscribe((data) => {
    //  data =this.driveStore;

    // })

    // this.userService.deleteUser(id).subscribe(data => {
    //   this.driveStore.splice(id - 1, 1)
    //   // this.userService.deleteUser(id).subscribe((data) => {
    //   //   data = this.driveStore;

    //   // })
    // })
    console.log(id)
    this.delete.emit(id);
  }

  // onEdit(info: any) {
  //   // alert("You already registered!")
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: 'You already registered!',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  //   this.drive.push(this.info)
  //   console.log(this.info)
  //   this.table= true;
  //   this.editData= false;

  // }
}



