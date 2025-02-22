import { Component, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigatorComponent } from '../shared/navigator/navigator.component';
import { AsyncPipe, KeyValuePipe, NgForOf, TitleCasePipe } from '@angular/common';
import { BlogsMap } from './blogs.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'r-blogs',
  standalone: true,
  imports: [NavigatorComponent,
    NgForOf,
    KeyValuePipe,
    TitleCasePipe,
    RouterLink,
    RouterOutlet,
    AsyncPipe,
  ],
  templateUrl: './blogs.component.html'
})
export class BlogsComponent implements OnInit {

  blogMap!: BlogsMap;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogMap = this.route.snapshot.data['blogMap'];
  }
}


