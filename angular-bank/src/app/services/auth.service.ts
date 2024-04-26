import { Injectable } from '@angular/core';

// interface Customer {
//   username: string,
//   password: string,
//   accountno: number,
//   balance: number,
//   firstname: string,
//   mobileno: number,
//   email: string,
//   city: string
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username = 'user1'
  private password: string = 'user1'
  private accountno: number = 123456789
  private balance: number = 1000
  firstname: string = 'kumar'
  mobileno: number = 9876543211
  email: string = 'kumar@gmail.com'
  city: string = 'madurai'


  // users = {
  //   user1: {
  //     username: 'user1',
  //     password: 'user1',
  //     accountno: 123456789,
  //     balance: 1000,
  //     firstname: 'Kumar',
  //     mobileno: 9876543211,
  //     email: 'kumar@gmail.com',
  //     city: 'Madurai'
  //   },
  //   user2: {
  //     username: 'user2',
  //     password: 'user2',
  //     accountno: 987654321,
  //     balance: 2000,
  //     firstname: 'John',
  //     mobileno: 1234567890,
  //     email: 'john@gmail.com',
  //     city: 'New York'
  //   },
  //   user3: {
  //     username: 'user3',
  //     password: 'user3',
  //     accountno: 456789123,
  //     balance: 500,
  //     firstname: 'Alice',
  //     mobileno: 5555555555,
  //     email: 'alice@gmail.com',
  //     city: 'London'
  //   }  
  // };
  constructor() { }

  getUsername(): string  {
    return this.username;
  }

  getPassword(): string  {
    return this.password;
  }

  getAccountNo(): number {
    return this.accountno;
  }

  getBalance(): number {
    return this.balance;
  }

  getProfile(){
    return {
      firstname: this.firstname,
      mobileno:this.mobileno,
      email: this.email,
      city: this.city
    }
  }
}
