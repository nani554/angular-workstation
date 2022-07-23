import { RouterModule, Routes } from "@angular/router";
import { JsCodeSnippetsComponent } from "./components/js-code-snippets/js-code-snippets.component";
import { QuickSortComponent } from "./components/sort/quick-sort/quick-sort.component";

const routes: Routes = [
  {
    path: "",
    component: JsCodeSnippetsComponent,
    children: [
      {
        path: "quick-sort",
        component: QuickSortComponent
      }
    ]
  },
];

export const JsCodeSnippetsRoutingModule = RouterModule.forChild(routes);
