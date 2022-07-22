import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeComponent } from './components/materialize/materialize.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { SharedModule } from '../shared/shared.module';
import { RxjsOperatorsRoutingModule } from './rxjs-operators-routing.module';



@NgModule({
  declarations: [
    MaterializeComponent,
    RxjsOperatorsComponent
  ],
  imports: [
    SharedModule,
    RxjsOperatorsRoutingModule
  ]
})
export class RxjsOperatorsModule { }
