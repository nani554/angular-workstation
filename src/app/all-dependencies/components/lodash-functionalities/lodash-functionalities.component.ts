import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-lodash-functionalities',
  templateUrl: './lodash-functionalities.component.html',
  styleUrls: ['./lodash-functionalities.component.scss']
})
export class LodashFunctionalitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.testingForEach();
  }

  testingForEach() {
    _.forEach(Array.from(_.keys(Array(10))), (number) => {
      console.log(number);
    })
  }

}
