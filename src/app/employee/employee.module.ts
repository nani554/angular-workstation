import { NgModule } from '@angular/core';
import { EmployeeComponent } from './components/employee/employee.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeSortDirective } from './directives/employee-sort.directive';
import { EmployeeFilterPipe } from './pipes/employee-filter.pipe';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    EmployeeSortDirective,
    EmployeeFilterPipe
  ],
  imports: [
    SharedModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
