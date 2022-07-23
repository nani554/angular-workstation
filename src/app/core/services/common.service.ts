import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class CommonService {
  replaySubject = new ReplaySubject();

  constructor() { }

  emitSubject(data: number) {
    this.replaySubject.next(data);
  }
}
