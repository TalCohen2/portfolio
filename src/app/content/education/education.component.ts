import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education:{host:string,fieldOfStudy:string,date:string,description:string}[] = [
    {
      host: 'Udemy',
      fieldOfStudy: 'Angular course',
      date:'2020',
      description:''
    },
    {
      host: 'John Bryce – Tel Aviv',
      fieldOfStudy: 'Full Stack WEB development course',
      date:'2017-2018',
      description:''
    },
    {
      host: 'CISCO',
      fieldOfStudy: 'Computer technician',
      date:'2012',
      description:''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
