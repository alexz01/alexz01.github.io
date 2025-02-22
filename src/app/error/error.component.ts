import { Component } from '@angular/core';
import { NavigatorComponent } from '../shared/navigator/navigator.component';

@Component({
  selector: 'error',
  templateUrl: 'error.component.html',
  standalone: true,
  imports: [NavigatorComponent],
})
export class ErrorComponent { }
