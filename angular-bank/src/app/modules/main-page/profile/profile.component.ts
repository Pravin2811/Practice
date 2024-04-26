import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  name: string = '';
  mobileno:number = 0;
  email: string = '';
  city: string = '';

  constructor(private authService: AuthService, public router: Router){
    // this.name = this.authService.firstname;
    // this.mobileno = this.authService.mobileno;
    // this.email = this.authService.email;
    // this.city = this.authService.city;
  }

  ngOnInit() {
    // Initialize profile data
    this.name = this.authService.firstname;
    this.mobileno = this.authService.mobileno;
    this.email = this.authService.email;
    this.city = this.authService.city;
  }

  onUpdate(){
    this.router.navigate(['main/update',  JSON.stringify({name: this.name, mobile: this.mobileno})],{skipLocationChange: true})
  }

  onUpdateProfile(eventData: any) {
    // Update profile data
    this.email = eventData.email;
    this.city = eventData.city;

  }
}
