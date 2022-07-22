import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StylesComponent } from './components/styles/styles.component';
import { FlexComponent } from './components/flex/flex.component';
import { ScssComponent } from './components/scss/scss.component';
import { GridComponent } from './components/grid/grid.component';
import { StylesRoutingModule } from './styles-routing.module';



@NgModule({
  declarations: [
    StylesComponent,
    FlexComponent,
    ScssComponent,
    GridComponent
  ],
  imports: [
    SharedModule,
    StylesRoutingModule
  ]
})
export class StylesModule { }
