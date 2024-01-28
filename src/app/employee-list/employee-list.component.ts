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
  
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data)
  }
}
// In here we have an instance of the employee service, we use this to all the getemployee methods
//this returns an observable so to receive the data we need to subscribe to it.
// once we subscribe to the observable the employee data arrives asynchronously.
//we assign that data to class property using the fat arrow syntax