import { HttpClient } from '@angular/common/http';
import { Component, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigatorComponent } from '../shared/navigator/navigator.component';
import { JsonPipe, KeyValuePipe, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'r-blogs',
  standalone: true,
  imports: [NavigatorComponent,
    NgForOf,
    KeyValuePipe,
    JsonPipe
  ],
  templateUrl: './blogs.component.html'
})
export class BlogsComponent {

  blogMap!: Signal<Record<string, string | Record<string, string>>>;

  constructor(private httpClient: HttpClient) {
    const blogs = this.httpClient.get<Record<string, string | Record<string, string>>>('/assets/blogs/map.json');
    this.blogMap = toSignal(blogs, { initialValue: {} });
  }
}
