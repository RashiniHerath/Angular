import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]> {
   return this.http.get<IEmployee[]>(this._url);
  }
}



// HTTP , Observable and RxJS

//1 step HTTP Get request from EmpServicece
//2 step Observable and cast into it an employee array 
//3 step Subscribe to the obeervable from EmpList and EmpDetails
// Assign the employee array to the local variable














// This provides employee data