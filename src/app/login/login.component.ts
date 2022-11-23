import { Component, OnInit } from '@angular/core';
import { user } from '../interfaces/users';
import { UsersService } from '../users.service';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user : user
  users : any[] = []
  constructor(private userService : UsersService, private route : Router, private productService : ProductsService){
    this.user = {
      email : '',
      password : ''
    }

  }
  ngOnInit() : void {

  }
  login() : void {
    // this.userService.changeStatus()
    this.route.navigate(['products'])
  }

}
