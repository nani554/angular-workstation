import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeComponent } from './components/materialize/materialize.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { SharedModule } from '../shared/shared.module';
import { RxjsOperatorsRoutingModule } from './rxjs-operators-routing.module';
import { BasicOperatorsComponent } from './components/basic-operators/basic-operators.component';
import { BasicForkJoinComponent } from './components/fork-join/basic-fork-join/basic-fork-join.component';
import { CustomReplaySubjectComponent } from './components/subject/replay-subject/custom-replay-subject/custom-replay-subject.component';



@NgModule({
  declarations: [
    MaterializeComponent,
    RxjsOperatorsComponent,
    BasicOperatorsComponent,
    BasicForkJoinComponent,
    CustomReplaySubjectComponent
  ],
  imports: [
    SharedModule,
    RxjsOperatorsRoutingModule
  ]
})
export class RxjsOperatorsModule { }
