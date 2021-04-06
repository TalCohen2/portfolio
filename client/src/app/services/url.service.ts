import { Injectable } from '@angular/core';
import {NavigationEnd, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url = new Subject<String>();

  constructor(private router:Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((route:Params)=>{    
      let url = route.urlAfterRedirects.substr(1,route.urlAfterRedirects.length-1).toUpperCase();
      this.url.next(url);
    })
   }
}
