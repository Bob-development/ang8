import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: object[] = [];

  private usersRole: any[] = [
    {value: 'Delivery', viewValue: 'Delivery'},
    {value: 'Manager', viewValue: 'Manager'},
    {value: 'User', viewValue: 'User'},
  ];

  constructor() {}

  public getUsers(){
    return this.users;
  }
  
  public getUsersRole(){
    return this.usersRole;
  }

  public addUser(user: {login: string, password: string, role: string}){
    this.users.push(user);

    console.log('users', this.users);
  }
}
