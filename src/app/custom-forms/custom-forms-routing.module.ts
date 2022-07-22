import { RouterModule, Routes } from "@angular/router";
import { BasicReactiveFormsComponent } from "./components/reactiveForms/basic-reactive-forms/basic-reactive-forms.component";

const routes: Routes = [
  {
    path: "",
    component: BasicReactiveFormsComponent
  }
];

export const CustomFormsRoutingModule = RouterModule.forChild(routes);
