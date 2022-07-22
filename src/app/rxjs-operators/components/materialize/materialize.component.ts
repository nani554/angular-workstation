import { Component, OnInit } from '@angular/core';
import { map, of, materialize } from 'rxjs';

@Component({
  selector: 'app-materialize',
  templateUrl: './materialize.component.html',
  styleUrls: ['./materialize.component.scss']
})
export class MaterializeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.printMaterializedValues()
  }

  printMaterializedValues() {
    of("a", "b", "c", "d")
      .pipe(
        map((character) => character.toUpperCase()),
        materialize()
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log("complete");
        }
      });
  }

}
