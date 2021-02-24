import { Component, OnDestroy, OnInit } from '@angular/core';
import {NavigationEnd, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  url:String = '';
  private urlSubscriber:Subscription;

  constructor(private router:Router, private urlService:UrlService) { }

  ngOnInit(): void {
    console.log(this.urlService.url)
    this.urlSubscriber = this.urlService.url.subscribe((url)=>{
      console.log('url from subscriber: ',url);
      this.url = url;
    })
  }

  ngOnDestroy() {
    this.urlSubscriber.unsubscribe();
  }

}
