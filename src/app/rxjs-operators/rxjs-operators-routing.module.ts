import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperatorsComponent } from './components/basic-operators/basic-operators.component';
import { BasicForkJoinComponent } from './components/fork-join/basic-fork-join/basic-fork-join.component';
import { MaterializeComponent } from './components/materialize/materialize.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { CustomReplaySubjectComponent } from './components/subject/replay-subject/custom-replay-subject/custom-replay-subject.component';

const routes: Routes = [
    {
        path: "",
        component: RxjsOperatorsComponent,
        children: [
            {
                path: "basic-operators",
                component: BasicOperatorsComponent
            },
            {
                path: "materialize",
                component: MaterializeComponent
            },
            {
                path: "basic-fork-join",
                component: BasicForkJoinComponent
            },
            {
                path: "custom-replay-subject",
                component: CustomReplaySubjectComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxjsOperatorsRoutingModule { }
