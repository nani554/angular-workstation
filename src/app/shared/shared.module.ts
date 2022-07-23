import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { DateLocalePipe } from './pipes/date-locale.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    DateLocalePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbPaginationModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbPaginationModule,
    HeaderComponent,
    DateLocalePipe
  ]
})
export class SharedModule { }
