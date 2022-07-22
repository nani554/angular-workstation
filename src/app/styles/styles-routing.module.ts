import { RouterModule, Routes } from "@angular/router";
import { FlexComponent } from "./components/flex/flex.component";
import { GridComponent } from "./components/grid/grid.component";
import { ScssComponent } from "./components/scss/scss.component";
import { StylesComponent } from "./components/styles/styles.component";

const routes: Routes = [
  {
    path: "",
    component: StylesComponent,
    children: [
      {
        path: "flex",
        component: FlexComponent
      },
      {
        path: "grid",
        component: GridComponent
      },
      {
        path: "scss",
        component: ScssComponent
      }
    ]
  }
];

export const StylesRoutingModule = RouterModule.forChild(routes);
