import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of, from, Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-basic-fork-join',
  templateUrl: './basic-fork-join.component.html',
  styleUrls: ['./basic-fork-join.component.scss']
})
export class BasicForkJoinComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
    this.printsLastEmittedItemOfEachObservable();
  }
  ngOnInit(): void {

  }

  printsLastEmittedItemOfEachObservable() {
    const observableStream1 = of(1, 2, 3, 4);
    const observableStream2 = from([5, 6, 7, 8]);
    const defaultObservable = new Observable((observer) => {
      observer.next(1);
      observer.next(3);
      observer.next(4);
      observer.complete();
    });
    forkJoin([
      defaultObservable,
      observableStream1,
      observableStream2
    ]).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    forkJoin({
      defaultObservable,
      observableStream1,
      observableStream2
    }).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
