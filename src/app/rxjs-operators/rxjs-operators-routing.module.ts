import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeComponent } from './components/materialize/materialize.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';

const routes: Routes = [
    {
        path: "",
        component: RxjsOperatorsComponent,
        children: [
            {
                path: "materialize",
                component: MaterializeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxjsOperatorsRoutingModule { }
