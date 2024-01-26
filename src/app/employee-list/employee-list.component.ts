import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: []
})
export class EmployeeListComponent implements OnInit {

  public employees: any[] = []; // Declare the type of employees array

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
  
    this.employees = this._employeeService.getEmployees();
  }
}

//  in the employee.service class has get employees method that returns
// the employee data. in the employee list Component it het hold of an instance of employee service which
// is undescore employee service and call get employees method and design the returned the data to the employees
//  arrya that belongs to the employee list component 