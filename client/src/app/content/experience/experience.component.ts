import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience:{role:string,company:string,date:string,description:string}[] = [{
  role:"Full Stack Developer",
  company: 'Zarzilla Games',
  date: '2018-2020',
  description:`
    As a Full Stack Developer, I was responsible to develop games from scratch, from their initial design to a finished product using NodeJS on the server side, Cocos Creator game engine (Also a JavaScript Framework) on the client side, and MySQL DB.
    During this period, I was involved in the entire process of building games such as algorithms, modeling, performance improvements, UX and UI.
    The main project I was responsible for has been published for IOS and ANDROID under the title “Zarzilla Slots Jackpot Spin”.`
  },{
    role:"Logistics manager",
    company: 'HP',
    date: '2015-2017',
    description:`As part of the job, I was responsible for ordering and delivering goods, managing inventory according to the production line plan, and managing casual workers.
      During this period, I acquired many management skills.`
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
