import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  OnChanges,
  AfterViewInit,
  Input,
} from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <h1>Test</h1>
  <ng-template #dynamic></ng-template>
`,
})
export class TestWrapper implements AfterViewInit, OnChanges {
  @Input() testInput: string;

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;

  componentRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    this.loadComponent();
  }

  ngOnChanges(changes) {
    if (this.viewRef) {
      Object.keys(changes).forEach((componentInputKey) => {
        this.componentRef.instance[componentInputKey] =
          changes[componentInputKey].currentValue;
      });
      // setTimeout(() => {
      //   this.componentRef.changeDetectorRef.detectChanges();
      // }, 1000);
    }
  }

  loadComponent() {
    this.viewRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(DynamicComponent);
    this.componentRef = this.viewRef.createComponent(componentFactory);
    // this.componentRef.changeDetectorRef.detectChanges();
  }
}
