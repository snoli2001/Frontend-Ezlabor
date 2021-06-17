import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('token')) {
      req = req.clone({
        headers: req.headers.set('Authorization', sessionStorage.getItem('token') || "" )
      });
    }
    return next.handle(req);
  }
}
