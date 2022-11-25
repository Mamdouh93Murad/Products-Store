import { Component, OnInit } from '@angular/core'
import { UsersService } from '../users.service'
import { Router } from '@angular/router'
import { HttpService } from '../http.service'
import { JwtHelperService } from '@auth0/angular-jwt'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  result: object = {}
  decoded: object = {}
  helper = new JwtHelperService()
  constructor(
    private userService: UsersService,
    private route: Router,
    private client: HttpService
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  // Authenticate User Credentials
  async login(): Promise<void> {
    this.result = await this.client.auth(this.username, this.password)
    this.decoded = this.helper.decodeToken(this.result['token'])
    if (
      this.result['username'] === this.decoded['username'] &&
      this.result['password'] === this.decoded['password']
    ) {
      this.userService.user_id = this.result['id']
      this.route.navigate(['products'])
      this.userService.logged = !this.userService.logged
    }
  }
}
