import { Component } from '@angular/core';
import { SampleButtonComponent } from '../../shared/components/sample-button.component';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { HighlightDirective } from '../../shared/directives/highlight.directive';

@Component({
  selector: 'sp-home',
  standalone: true,
  imports: [SampleButtonComponent, CapitalizePipe, HighlightDirective],
  template: `<h1>Welcome Home!</h1>
    <sp-sample-button spHighlight>Click Me</sp-sample-button>
    <p>{{ 'angular rocks' | capitalize }}</p>`
})
export class HomeComponent {}
