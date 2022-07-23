import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-custom-replay-subject',
  templateUrl: './custom-replay-subject.component.html',
  styleUrls: ['./custom-replay-subject.component.scss']
})
export class CustomReplaySubjectComponent implements OnInit, OnDestroy {

  subscriptionList: Subscription[] = [];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    const replaySubjectSubscription = this.commonService.replaySubject.subscribe((data) => {
      console.log("CustomReplaySubject", data);
    });
    this.subscriptionList.push(replaySubjectSubscription);
  }

  emit() {
    this.commonService.emitSubject(Math.random() + 1);
  }

  ngOnDestroy() {
    this.subscriptionList.map(sub => sub.unsubscribe());
  }

}
