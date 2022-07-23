import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SortColumn, SortDirection, SortEvent } from '../models/employee-sort';

@Directive({
  selector: '[appEmployeeSort]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotateFn()'
  }
})
export class EmployeeSortDirective {

  constructor() { }
  
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();
  
  rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };

  rotateFn() {
    this.direction = this.rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }

}
