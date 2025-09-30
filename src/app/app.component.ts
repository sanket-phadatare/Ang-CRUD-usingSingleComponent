import { Component } from '@angular/core';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = [
    { userid: 1, name: 'Sanket', city: 'Pune' },
    { userid: 2, name: 'Rohit', city: 'Mumbai' },
    { userid: 3, name: 'Rahul', city: 'Banglore' },
    { userid: 4, name: 'Karan', city: 'Chennai' }
  ]

  user: User = new User();

  isEdit: boolean = false;


  addUser() {

    this.users.push(this.user);
    // alert("User Added Successfully");
    this.user = new User();
  }

  editUser(id: number) {
    let foundUser: User | any = this.users.find((u) => u.userid == id);
    this.user = foundUser;
    this.isEdit = true;
  }



  updateUser(id: number) {
    let existingUser: User | any = this.users.find(u => u.userid == id);
    let index = this.users.indexOf(existingUser);

    this.users[index].name = this.user.name;
    this.users[index].city = this.user.city;

    this.isEdit = false;
    this.user = new User();
    // alert
    // 
    ("User Updated Successfully");
  }


  deleteUser(id: number) {
    let existingUser: User | any = this.users.find(u => u.userid == id);
    let index = this.users.indexOf(existingUser);

    // alert("User Deleted Successfully");
    if (confirm("Are you sure to delete?")) {
      this.users.splice(index, 1);
      // alert("User Deleted Successfully");
    }

  }




}
