import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, from, interval, debounceTime, map, switchMap, mergeMap } from 'rxjs';

@Component({
  selector: 'app-basic-operators',
  templateUrl: './basic-operators.component.html',
  styleUrls: ['./basic-operators.component.scss']
})
export class BasicOperatorsComponent implements OnInit {


  ofObs: Observable<number> | undefined;
  fromObservable: Observable<number> | undefined;
  intervalObservable: Observable<number> | undefined;
  counter = 0;
  searchCounter: FormControl = new FormControl();
  @ViewChild("resetBtn") resetBtn: Observable<number> | undefined;;

  constructor() {
    // fromEvent(document, "click")
    //   .pipe(switchMap((event) => interval(1000)))
    //   .subscribe((data) => console.log(data));
  }

  ngOnInit() {
    // console.log("RxjsOperator ngOnInit")
  }

  ngAfterViewInit() {
    this.ofFn();
    // this.btnClick();
  }

  ofFn() {
    this.ofObs = of(1, 2, 3, 4);
    // Observable generators of, from, interval etc.
    // Directly subscribing
    // ofObs.subscribe((data) => console.log(data));
    this.fromObservable = from([1, 2, 3, 4]);
    // fromObservable.subscribe((data) => console.log(data));
    // fromObservable
    //   .pipe(
    //     tap((data) => console.log("Before Updating Number", data)),
    //     map((n) => n + 10)
    //   )
    //   .subscribe((finalData) => console.log(finalData));
    this.intervalObservable = interval(1000);
    // intervalObservable.subscribe((data) => console.log(data));
    this.searchCounter.valueChanges
      .pipe(
        debounceTime(1000),
        map(() => { throw "error custom ..." }),
        switchMap((event) => interval(1000))
      )
      .subscribe({
        next: (data) => {
          this.counter = data;
          console.log("next", data);
        },
        error: (err) => {
          console.log("error cb", err);
        },
        complete: () => {
          console.log("complete");
        }
      });


    // .subscribe((data) => {
    //   this.counter = data;
    //   console.log(data);
    // });
    // .subscribe({
    //   next: (data) => {
    //     this.counter = data;
    //     console.log("next", data);
    //   },
    //   error: (err) => {
    //     console.log("error cb", err);
    //   },
    //   complate: () => {
    //     console.log("complete");
    //   }
    // });

    // fromEvent(this.resetBtn, "click")
    //   .pipe(switchMap((event) => interval(1000)))
    //   .subscribe((data) => console.log(data));
  }

  btnClick() {
    console.log("btnClick");

    // fromEvent(this.resetBtn, "click")
    //   .pipe(switchMap((event) => interval(1000)))
    //   .subscribe((data) => console.log(data));
  }

  mergeM() {
    from(["a", "b", "c"])
      .pipe(mergeMap((x) => interval(1000).pipe(map((index) => x + index))))
      .subscribe((data) => console.log(data));
  }

}
