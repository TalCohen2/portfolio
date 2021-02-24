import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  logosPath:string = "../../../assets/images/logos/";
  skillsArray:any[] = [
    {name:'javascript',image:'javascript.png',wikiUrl:'https://en.wikipedia.org/wiki/JavaScript'},
    {name:'typescript',image:'typescript.png',wikiUrl:'https://en.wikipedia.org/wiki/TypeScript'},
    {name:'php',image:'php.png',wikiUrl:'https://en.wikipedia.org/wiki/PHP'},
    {name:'angular',image:'angular.png',wikiUrl:'https://en.wikipedia.org/wiki/Angular_(web_framework)'},
    {name:'nodejs',image:'nodejs.png',wikiUrl:'https://en.wikipedia.org/wiki/Node.js'},
    {name:'html5',image:'html5.png',wikiUrl:'https://en.wikipedia.org/wiki/HTML5'},
    {name:'css3',image:'css3.png',wikiUrl:'https://en.wikipedia.org/wiki/CSS'},
    {name:'jquery',image:'jquery.png',wikiUrl:'https://en.wikipedia.org/wiki/JQuery'},
    {name:'cocos',image:'cocos.png',wikiUrl:'https://en.wikipedia.org/wiki/Cocos2d'},
    {name:'mongoDB',image:'mongoDB.png',wikiUrl:'https://en.wikipedia.org/wiki/MongoDB'},
    {name:'mysql',image:'mysql.png',wikiUrl:'https://en.wikipedia.org/wiki/MySQL'},
    {name:'bootstrap',image:'bootstrap.png',wikiUrl:'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)'},
    {name:'git',image:'git.png',wikiUrl:'https://en.wikipedia.org/wiki/Git'},
    {name:'github',image:'github.png',wikiUrl:'https://en.wikipedia.org/wiki/GitHub'},
    {name:'apache',image:'apache.png',wikiUrl:'https://en.wikipedia.org/wiki/Apache_HTTP_Server'},
    {name:'visualStudioCode',image:'visualStudioCode.png',wikiUrl:'https://en.wikipedia.org/wiki/Visual_Studio_Code'},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
