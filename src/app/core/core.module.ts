import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonService } from './services/common.service';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundComponent
  ],
  providers: [
    CommonService
  ]
})
export class CoreModule { }
