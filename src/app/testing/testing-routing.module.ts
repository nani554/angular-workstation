import { RouterModule } from "@angular/router";
import { BasicCountComponent } from "./components/basic/basic-count/basic-count.component";
import { TestingComponent } from "./components/testing/testing.component";

const routes = [
  {
    path: "",
    component: TestingComponent,
    children: [
      {
        path: "basic-count",
        component: BasicCountComponent
      }
    ]
  }
];
export const TestingRoutingModule = RouterModule.forChild(routes);
