/*
* http 拦截
* */
import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import {Observable} from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const token = localStorage.getItem('ngToken')  // 统一请求时加token
    const authReq = req.clone({headers: req.headers.set('xx-token', token)})
    console.log('all request');

    return next.handle(authReq);
  }
}
