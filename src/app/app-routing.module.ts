import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(data => data.HomeModule)
  },
  {
    path: "rxjs-operators",
    loadChildren: () => import("./rxjs-operators/rxjs-operators.module").then(data => data.RxjsOperatorsModule)
  },
  {
    path: "custom-forms",
    loadChildren: () => import("./custom-forms/custom-forms.module").then(data => data.CustomFormsModule)
  },
  {
    path: "testing",
    loadChildren: () => import("./testing/testing.module").then(data => data.TestingModule)
  },
  {
    path: "styles",
    loadChildren: () => import("./styles/styles.module").then(data => data.StylesModule)
  },
  {
    path: "js-code-snippets",
    loadChildren: () => import("./js-code-snippets/js-code-snippets.module").then(data => data.JsCodeSnippetsModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
