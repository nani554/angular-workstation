import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-count',
  templateUrl: './basic-count.component.html',
  styleUrls: ['./basic-count.component.scss']
})
export class BasicCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  count: number = 0;
  increaseCount() {
    this.count++;
  }
  decreaseCount() {
    if (this.count === 0) return;
    this.count--;
  }
}
