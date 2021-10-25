import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  
  
  intercept(req: HttpRequest<any>, next: HttpHandler){
    const token = localStorage.getItem('jwt');
     let tokenized = req.clone(
       {
         setHeaders:{
           Authorization: `Bearer ${token}`,
         }
       }
     );
     return next.handle(tokenized)
  }
}
