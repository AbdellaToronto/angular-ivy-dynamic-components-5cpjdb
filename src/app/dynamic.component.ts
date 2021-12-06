import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>{{ testInput }}</h1>
    <p>Created at {{time | date:'HH:mm:ss'}}</p>
  `,
  styles: [
    `
    :host {
      display: block;
      background-color: #0ff;
      padding: 12px;
      border-radius: 8px
    }
  `,
  ],
})
export class DynamicComponent {
  time = new Date();
  @Input() testInput = 'Hello Dynamic';
}
