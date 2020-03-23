import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  constructor(private us: UsersService) { }

  ngOnInit() {
  }
  handleClick() {
    this.us.logIn(this.username, this.password).subscribe((response: any) => {
      console.log(response);
      if (response.status == 1) {
        //everything is good
      } else {
        alert(response.data);
      }
    })
  }
}
