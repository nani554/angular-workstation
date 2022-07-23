import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fnd() {
    const pro = new Promise((resolve, reject) => {
      if (true) {
        resolve("success....");
      } else {
        reject("failure....");
      }
    });
    pro
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
