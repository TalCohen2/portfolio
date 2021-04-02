import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:{name:string,techStack:{front:string[],back:string[],Database:string},description:string,links?:{github?:string,website?:string}}[] = [
    {
      name:'Messaging system',
      techStack: {
        front: ['Angular','rxjs','TypeScript','Bootstrap 3','CSS3','HTML5'],
        back:['NodeJS','JavaScript','Express'],
        Database:'mongoDB'
      },
      description:`A Messaging system with a mailbox that includes features such as send messages between users, view and delete sent and received messages.`,
      links: {
        github: 'https://github.com/TalCohen2/Tal-Cohen-27-01-2021',
        website: 'https://messaging-system-project.herokuapp.com/auth'
      }
    },
    {
      name:'Online Supermarket',
      techStack: {
        front: ['Angular','rxjs','TypeScript','Bootstrap 3','CSS3','HTML5'],
        back:['NodeJS','JavaScript','Express','mongoose'],
        Database:'mongoDB'
      },
      description:`An online supermarket store that includes features such as creating a cart, ordering products, coordinating deliveries, and printing a receipt for casual users.
      And an admin panel that includes adding, removing, and editing products for admin users.`,
      links: {
        github: 'https://github.com/TalCohen2/shopping-online',
      }
    },
    {
      name:'College Management System',
      techStack: {
        front: ['JavaScript','Bootstrap 3','CSS3','HTML5'],
        back:['PHP'],
        Database:'MySQL'
      },
      description:`A college management system used to manage employees, students, and courses with features such as adding, editing, removing, and attaching students to a course.`,
      links: {
        github: 'https://github.com/TalCohen2/College-Management-System',
      }
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
