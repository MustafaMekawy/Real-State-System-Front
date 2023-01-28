import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) {
  }
  baseUrl="http://localhost:3000/api/"
//get apies
  //all
   getProjects():Observable<any>{
    return this.http.get(`${this.baseUrl}project/showallprojects`)
   }
   getBuildings():Observable<any>{
    return this.http.get(`${this.baseUrl}build/showAllBuilds`)
   }
   getUints():Observable<any>{
    return this.http.get(`${this.baseUrl}uint/showAllUint`)
   }
   //single
   getSingleProject(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}project/showproject/${id}`)
   }
   getSingleBuild(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}build/showBuild/${id}`)
   }
   getSingleUint(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}uint/showuint/${id}`)
   }
   getProfile():Observable<any>{
    return this.http.get(`${this.baseUrl}user/profile`)
   }
   getAllUintsBought():Observable<any>{
    return this.http.get(`${this.baseUrl}uint/ShowAllUintsBought`)
   }
   getAllUintsAvalible():Observable<any>{
    return this.http.get(`${this.baseUrl}uint/ShowAllUintsAvalible`)
   }
   getMyUints():Observable<any>{
    return this.http.get(`${this.baseUrl}uint/ShowMyUints`)
   }
   getMyPayments():Observable<any>{
    return this.http.get(`${this.baseUrl}uint/ShowMyPayments`)
   }
   ///////////////////////////////////////////////
   //post&&patch apies
   addProject(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}project/createproject`,obj)
  }
  addBuild(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}build/createbuild`,obj)
  }
  addUint(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}uint/createuint`,obj)
  }
  buyUint(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}uint/buyuint`,obj)
  }
  addInstallment(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}uint/addInstallment`,obj)
  }



}
