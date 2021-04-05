import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  url:String = '';
  private urlSubscriber:Subscription;

  constructor(private urlService:UrlService) { }

  ngOnInit(): void {
    this.urlSubscriber = this.urlService.url.subscribe((url)=>{
      this.url = url;
    })
  }

  ngOnDestroy() {
    this.urlSubscriber.unsubscribe();
  }

}
