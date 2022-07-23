import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: Employee[], ...args: string[]): Employee[] {
    console.log(employees, args);
    if (!employees) return employees;
    const filterText = args[0] ? args[0] : "";
    return employees.filter(employee => employee.employeeName.toLocaleLowerCase().includes(filterText));
  }

}
