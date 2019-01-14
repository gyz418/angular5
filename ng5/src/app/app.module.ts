import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
/* ngModel 双向绑定模块*/

import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';

/* 引入组件 */

@NgModule({
  // 组装模块资源：组件、指令、服务
  declarations: [
    AppComponent,
    TestComponent   /* 引入组件*/
  ],
  imports: [  // 依赖模块
    BrowserModule,
    FormsModule    /* 双向绑定模块*/
  ],
  providers: [],
  bootstrap: [AppComponent]  // 指定启动的根组件
})
export class AppModule {
}
