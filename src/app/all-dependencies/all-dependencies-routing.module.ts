import { RouterModule } from "@angular/router";
import { AllDependenciesComponent } from "./components/all-dependencies/all-dependencies.component";
import { LodashFunctionalitiesComponent } from "./components/lodash-functionalities/lodash-functionalities.component";

const routes = [
  {
    path: "",
    component: AllDependenciesComponent,
    children: [
      {
        path: "lodash",
        component: LodashFunctionalitiesComponent
      }
    ]
  }
];
export const AllDependenciesRoutingModule = RouterModule.forChild(routes);
