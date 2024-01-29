import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li *ngFor="let department of departments" [class.selected]="isSelected(department)" (click)="onSelect(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId!: number;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idString = params.get('id'); // Get the id as a string
      if (idString !== null) {
        let id = parseInt(idString); // Parse the string to an integer
        this.selectedId = id;
      }
    });
  }

  onSelect(department: { id: any; }) {
    //this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department: { id: number; }) { 
    return department.id === this.selectedId; 
  }
}
