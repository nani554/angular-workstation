import { RouterModule, Routes } from "@angular/router";
import { CustomFormsComponent } from "./components/custom-forms/custom-forms.component";
import { BasicReactiveFormsComponent } from "./components/reactiveForms/basic-reactive-forms/basic-reactive-forms.component";

const routes: Routes = [
  {
    path: "",
    component: CustomFormsComponent,
    children: [
      {
        path: "basic-reactive-form",
        component: BasicReactiveFormsComponent
      }
    ]
  },
];

export const CustomFormsRoutingModule = RouterModule.forChild(routes);
