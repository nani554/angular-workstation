import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LodashFunctionalitiesComponent } from './components/lodash-functionalities/lodash-functionalities.component';
import { AllDependenciesComponent } from './components/all-dependencies/all-dependencies.component';
import { SharedModule } from '../shared/shared.module';
import { AllDependenciesRoutingModule } from './all-dependencies-routing.module';



@NgModule({
  declarations: [
    LodashFunctionalitiesComponent,
    AllDependenciesComponent
  ],
  imports: [
    SharedModule,
    AllDependenciesRoutingModule
  ]
})
export class AllDependenciesModule { }
