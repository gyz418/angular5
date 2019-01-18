import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'  // 引入路由
import {AuthGuard} from './auth-guard.service'

import {LoginComponent} from './login/login.component'   // 固定名字
import {LayoutComponent} from './layout/layout.component'
import {ContactsComponent} from './contacts/contacts.component'
import {ContactsNewComponent} from './contacts-new/contacts-new.component'
import {ContactsEditComponent} from './contacts-edit/contacts-edit.component'
import {TagComponent} from "./tag/tag.component";
import {TagNewComponent} from "./tag-new/tag-new.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/contacts',  // 重定向
    pathMatch: 'full'  // 路径完全匹配
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },

  {
    // 先显示layout组件，再显示 path 为空的子组件 ContactsComponent
    path: 'contacts',
    component: LayoutComponent,
    canActivate: [AuthGuard],   // 路由守卫
    children: [
      {
        path: '',
        component: ContactsComponent
      },
      {
        path: 'new',
        component: ContactsNewComponent    //   /contacts/new
      },
      {
        path: 'edit/:id',  // 参数
        component: ContactsEditComponent
      }
    ]
  },

  {
    // 先显示标签组件，再显示 path 为空的子组件 TagsComponent
    path: 'tags',
    component: LayoutComponent,
    canActivate: [AuthGuard],   // 路由守卫
    children: [
      {
        path: '',
        component: TagComponent
      },
      {
        path: 'new',
        component: TagNewComponent    //   /tags/new
      },
      {
        path: 'edit/:id',  // 参数
        component: ContactsEditComponent
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})
export class AppRoutingModule {
}
