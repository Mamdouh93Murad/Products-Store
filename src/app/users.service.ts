import { Injectable } from '@angular/core'
import { HttpService } from './http.service'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user_id: number | string = ''
  logged = false
  constructor(private client: HttpService) {}
}
