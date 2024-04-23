import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  //name:string='Hello';
  
  staticUser:string = 'pravin';
  staticPassword: string = 'welcome';
  
  login() {
    if (this.username === this.staticUser && this.password === this.staticPassword) {
      alert('Login successful');
    } else {
      alert('Invalid username or password');
    }
  }
  // onchange(event:Event){
  //   this.name=(event.target as HTMLInputElement).value
  // }
}
