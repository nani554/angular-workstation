import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonService } from './services/common.service';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NotFoundComponent
  ],
  providers: [
    CommonService
  ]
})
export class CoreModule { }
