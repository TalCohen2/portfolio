import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:{display:string,link:string,icon:string}[] = [{
    display: 'talfullstack@gmail.com',
    link: 'mailto:talfullstack@gmail.com',
    icon: 'email.png'
  },{
    display: 'linkedin.com/in/tal-cohen-8666a0162',
    link: 'https://www.linkedin.com/in/tal-cohen-8666a0162/',
    icon: 'linkedin.png'
  },{
    display: 'github.com/TalCohen2',
    link: 'https://github.com/TalCohen2',
    icon: 'purpleGithub.png'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
