import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You selected department with id = {{departmentId}}</h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goPrevious(): void {
    if (this.departmentId !== undefined) {
      let previousId = this.departmentId - 1;
      this.router.navigate(['/departments', previousId]);
    }
  }

  goNext(): void {
    if (this.departmentId !== undefined) {
      let nextId = this.departmentId + 1;
      this.router.navigate(['/departments', nextId]);
    }
  }
}
