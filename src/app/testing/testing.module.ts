import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCountComponent } from './components/basic/basic-count/basic-count.component';
import { TestingComponent } from './components/testing/testing.component';
import { SharedModule } from '../shared/shared.module';
import { TestingRoutingModule } from './testing-routing.module';



@NgModule({
  declarations: [
    BasicCountComponent,
    TestingComponent
  ],
  imports: [
    SharedModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
