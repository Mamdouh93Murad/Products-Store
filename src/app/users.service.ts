import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users : any[] = []
  logged : boolean = true
  constructor(private client : HttpService) {
    this.client.getUsers().subscribe(u => {
      this.users = u
   })

  }

  returnStatus() : boolean {
    return this.logged
  }

  changeStatus() {
    this.logged = !this.logged
  }
}
