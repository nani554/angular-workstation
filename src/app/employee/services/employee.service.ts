import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { employees } from 'src/app/shared/mock-data/employees-mock';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee = <Employee>{};
  constructor() { }

  getEmployees() {
    return of(employees);
  }

  get Employee() {
    return this.selectedEmployee;
  }

  set Employee(emp: Employee) {
    this.selectedEmployee = emp;
  }
}
