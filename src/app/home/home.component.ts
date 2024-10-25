import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'r-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private httpClient: HttpClient) {
    // httpClient.get('/assets/data/bio.json').subscribe(console.log);
  }
}
