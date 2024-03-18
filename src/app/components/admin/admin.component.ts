import { Component } from '@angular/core';
import { MyEmailErrorStateMatcher, MyPasswordErrorStateMatcher, isValidData } from '../../../classes/MyErrorStateMatcher';

import {
  FormControl,
  Validators,
} from '@angular/forms';

import { UsersService } from '../../services/users.service';
import { ProductsService } from '../../services/products.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public emailMatcher = new MyEmailErrorStateMatcher();

  public passFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  public passMatcher = new MyPasswordErrorStateMatcher();

  public isValidData: boolean = isValidData();

  public role = new FormControl();

  constructor(
    public usersService: UsersService,
    public productsService: ProductsService
  ){}

  public signUp(){      
    if(this.emailFormControl.value.length !== 0 && this.passFormControl.value.length !== 0 && isValidData() && this.role.value !== null){
      const user = {
        login: this.emailFormControl.value,
        password: this.passFormControl.value,
        role: this.role.value,
      }
      
      this.usersService.addUser(user);

    } else alert('Invalid data!!!')
  }
}
