import { Component } from '@angular/core';

// angular中 组件就是一个类 class

// 装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app123456';
  public count:number = 0;
  increment=function () {
    this.count++
  }
}
