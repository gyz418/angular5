import {Component} from '@angular/core';

// 装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 生命周期 初始化
  ngOnInit() {
  }

  // 当组件数据变化时，会触发
  ngDoCheck() {
  }


}
