import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigatorComponent } from 'src/app/shared/navigator/navigator.component';

@Component({
  selector: 'r-blog',
  standalone: true,
  imports: [NavigatorComponent],
  templateUrl: './blog.component.html'
})
export class BlogComponent {

  blogHtml: string;
  constructor(private route: ActivatedRoute) {
    this.blogHtml = route.snapshot.data['blogHtml']
  }

  back() {
    history.back();
  }

}
