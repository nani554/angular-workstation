import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicReactiveFormsComponent } from './components/reactiveForms/basic-reactive-forms/basic-reactive-forms.component';
import { CustomFormsRoutingModule } from './custom-forms-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    BasicReactiveFormsComponent
  ],
  imports: [
    SharedModule,
    CustomFormsRoutingModule
  ]
})
export class CustomFormsModule { }
