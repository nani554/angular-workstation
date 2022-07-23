import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeSortDirective } from '../../directives/employee-sort.directive';
import { Employee } from '../../models/employee';
import { SortEvent } from '../../models/employee-sort';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  allEmployees: Employee[] = [];
  employees: Employee[] = [];
  searchText: string = "";
  employeeSize: number = 0;
  page: number = 1;
  pageSize: number = 4;
  @ViewChildren(EmployeeSortDirective) headers!: QueryList<EmployeeSortDirective>;


  constructor(private employeeService: EmployeeService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      console.log(data);
      this.allEmployees = data;
      this.employees = data;
      this.employeeSize = data.length;
      this.refreshEmployees();
    })
  }

  showEmployeeDetails(emp: Employee) {
    this.employeeService.Employee = emp;
    const modalRef = this.modalService.open(EmployeeDetailsComponent);
    modalRef.componentInstance.name = 'World';
  }

  refreshEmployees() {
    this.employees = this.allEmployees
      .map((employee, i) => ({ id: i + 1, ...employee }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  onSort(elementAttributes?: (SortEvent | Event)) {
    // resetting other headers
    const { column, direction } = <SortEvent>elementAttributes;
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.employees = this.allEmployees;
    } else {
      this.employees = [...this.allEmployees].sort((a, b) => {
        const res = this.compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  compare(v1: string | number | Date, v2: string | number | Date) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

}
