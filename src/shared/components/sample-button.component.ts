import { Component, Input } from '@angular/core';

@Component({
  selector: 'sp-sample-button',
  standalone: true,
  template: `<button class="btn"><ng-content></ng-content></button>`,
  styles: [`.btn { padding: 0.5rem 1rem; background: #1976d2; color: #fff; border: none; border-radius: 4px; }`]
})
export class SampleButtonComponent {}
