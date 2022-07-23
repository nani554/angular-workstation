import { NgModule } from '@angular/core';
import { JsCodeSnippetsComponent } from './components/js-code-snippets/js-code-snippets.component';
import { QuickSortComponent } from './components/sort/quick-sort/quick-sort.component';
import { SharedModule } from '../shared/shared.module';
import { JsCodeSnippetsRoutingModule } from './js-code-snippets-routing.module';



@NgModule({
  declarations: [
    JsCodeSnippetsComponent,
    QuickSortComponent
  ],
  imports: [
    SharedModule,
    JsCodeSnippetsRoutingModule
  ]
})
export class JsCodeSnippetsModule { }
