// Remove the duplicate import statement for 'OnInit'
// import { OnInit } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}.{{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: []
})
export class EmployeeDetailsComponent implements OnInit {
  
  // Declare the type of employees array
  public employees: { id: number, name: string, age: number }[] = [];

  constructor(@Inject(EmployeeService) private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }
}
