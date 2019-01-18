### angular 5    后台应用
- angular1版本叫 angularjs   `https://angularjs.org/`
- angular2以上版本统一叫 angular   `https://angular.io/`
- ng2 向下不兼容 ng1
- ng2 需要安装python 
- ng2 需要安装c++编译工具  `npm i --global --production windows-build-tools` 这个好难安装，卡

> `npm i -g @angular/cli@1.6.4`  指定版本

> `npm i -g @angular-devkit/core`  1.6.4版本缺这个 这个应用不用
>  `@angular-devkit/core": "^7.2.1"`  1.6.4 手动加包  
>  `"@types/jasmine": "~2.5.41"`  降低包版本，解决 spec.ts 报错

> `ng -v` 

> `ng new ng5`  创建项目

> `npm start / ng serve`  运行

main.ts 主文件，引入 app.modules.ts 模块文件， 模块文件再加载各组件 app.components.ts

>cmd: `ng generate/g component test`  创建组件

生成路由

>cmd:`ng generate module app-routing --flat --module=app`


## app.module.ts 文件会动态生成数据，不能写注释
1. 双向绑定 `import {FormsModule} from '@angular/forms'`;   `imports:[FormsModule]`
2. bootstrap:[] 启动页
3. imports:[]  依赖模块
4. declarations:[] 自动引入的组件
5. http请求： `import {HttpClientModule} from "@angular/common/http";`  `imports:[HttpClientModule]`
6. http拦截： 
`import {GlobalInterceptor} from './global.interceptor'`

`import {HTTP_INTERCEPTORS} from '@angular/common/http'`

` providers: [{
  provide:HTTP_INTERCEPTORS,
  useClass:GlobalInterceptor,
  multi:true
}],`
## 路由守卫 `auth_guard.service.ts`
1.`app-routing.module.ts` 先引入 `import {AuthGuard} from './auth-guard.service'`

2.在需要的路由处 `canActivate:[AuthGuard],`
   
3.`providers:[AuthGuard],`

