import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  OnChanges,
  OnInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'my-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <test [testInput]="testString$ | async"></test>
  `,
})
export class AppComponent implements OnInit {
  testString$ = new BehaviorSubject('Test');

  ngOnInit() {
    setTimeout(() => {
      this.testString$.next('2 second wait');
    }, 2000);
  }
}
