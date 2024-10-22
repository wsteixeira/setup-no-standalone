import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'setup-no-standalone';

  apiUrl: string = '';

  ngOnInit(): void {
    this.apiUrl = environment.apiUrl;
    console.log('API URL:', this.apiUrl);
  }
}
