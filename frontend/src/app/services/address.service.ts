import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { LocalStorageService } from 'angular-web-storage'

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  addresses: any
  constructor(private http: HttpClient,private local:LocalStorageService) { }

  addAddress(address:any) {
    //let id = address._userId
    return this.http.post<any>('http://localhost:3000/api/user/add/',address)
    .pipe(map(data => {
      return data
    }))
  }

  
  putAddress(address:any) {
    console.log(address);
    return this.http.put<any>('http://localhost:3000/api/user/put/',address).pipe(map(data => {
      return data
    }))
  }

  
  getAddressById() {
    let userid = this.local.get('user').result.id
    return this.http.get<any>('http://localhost:3000/api/user/get/'+userid).pipe(map(data => {
      return data
    }))
  }
}
