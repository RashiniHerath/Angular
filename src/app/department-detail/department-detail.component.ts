import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You selected department with id = {{departmentId}}</h3>
    
    <p>
     <button>(click)="showOverview()"Overview</button>
      <button>(click)=" showContact()"Contact</button>
    </p>
    
    
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   
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

  gotoDepartments(): void {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }

  showOverview(): void {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact(): void {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}

// absolute paths (/)