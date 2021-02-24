import { Component, OnInit } from '@angular/core';
import { UrlService } from './services/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  homeFlag:boolean = false;

  constructor(private urlService:UrlService) { }

  ngOnInit() {
    this.urlService.url.subscribe((url)=>{
      if(url=='HOME') this.homeFlag = true;
      else this.homeFlag = false;
    })
  }

}
