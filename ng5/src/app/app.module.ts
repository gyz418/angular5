import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {GlobalInterceptor} from './global.interceptor'
import {HTTP_INTERCEPTORS} from '@angular/common/http'

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './/app-routing.module';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ContactsNewComponent} from './contacts-new/contacts-new.component';
import {ContactsEditComponent} from './contacts-edit/contacts-edit.component';
import {MenuComponent} from './menu/menu.component';
import {TagComponent} from './tag/tag.component';
import {TagNewComponent} from './tag-new/tag-new.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LayoutComponent,
    ContactsComponent,
    ContactsNewComponent,
    ContactsEditComponent,
    MenuComponent,
    TagComponent,
    TagNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
