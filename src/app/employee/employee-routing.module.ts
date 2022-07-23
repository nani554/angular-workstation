import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./components/employee/employee.component";
import { EmployeesComponent } from "./components/employees/employees.component";

const routes: Routes = [
  {
    path: "",
    component: EmployeeComponent,
    children: [
      {
        path: "",
        component: EmployeesComponent
      }
    ]
  },
];

export const EmployeeRoutingModule = RouterModule.forChild(routes);
