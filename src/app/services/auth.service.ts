import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  islogin=false
  baseUrl="http://localhost:3000/api/"
  login(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}user/login`,obj)
   }
  register(obj:any):Observable<any>{
     return this.http.post(`${this.baseUrl}user/rejester`,obj)
   }
  editpassword(obj:any):Observable<any>{
    return this.http.patch(`${this.baseUrl}user/editpassword`,obj)
  }
   forgetPass(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}user/forgetpassword`,obj)
  }
   resetPass(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}user/resetpassword`,obj)
  }

}
