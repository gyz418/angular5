import { Component } from '@angular/core';

// 装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app123456';
  count = 0;
  increment=function () {
    this.count++
  }
}
