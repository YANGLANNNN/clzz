import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = '王文军';
  title = 'angular';
  address = {
    province: '福建的',
    city: '厦门'
  };
}
