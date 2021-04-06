import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about:{sentence:{h1:String,p:String},display:{h1:String,p:String}} = {
    sentence: {
      h1: "Hey, I'm Tal Cohen.",
      p: `I'm 26 years old Israel based Full Stack Developer. 
      I describe myself as a passionate, well organized, problem solver, perfectionist developer with high attention to details and with a huge hunger for programming,
      my luck is I'm also a CrossFit athlete which helps me not getting too fat. 
      After 2 years as a full stack developer in a mobile games company, I'm looking for my next challenge. 
      So if you're looking for a developer who will do anything to give you the best results, I'm the address. 
      Feel free to contact me at `
    },
    display: {
      h1: '',
      p: ''
    }
  }
  displayContact:boolean =  false;

  constructor() { }

  ngOnInit(): void {
    this.displayIntro();
  }

  displayIntro() {
    // this.about.display.h1 = this.about.sentence.h1;
    // this.about.display.p = this.about.sentence.p;
    // return;
    let element = this.about.sentence.h1.length ? 'h1' : this.about.sentence.p.length ? 'p' : null;
    if(element!=null) {
      let _this = this;
      let letter = this.about.sentence[element][0];
      this.about.sentence[element] = this.about.sentence[element].substring(1);
      this.about.display[element]+=letter;
      setTimeout(() => {
        _this.displayIntro();
      }, 40);
    } else {
      this.displayContact = true;
    }
  }

}


  // newText:string = `Hey, I'm Tal Cohen.
  // I'm 26 years old Israel based Full Stack Developer.
  // I describe myself as a passionate, well organized, problem solver, perfectionist developer with high attention to details and with a huge hunger for programming.
  // my luck is I'm also a CrossFit athlete which helps me not getting too fat.
  // after 2 years as a full stack developer in a mobile games company, I'm looking for my next challenge.
  // so if you're looking for a developer who will do anything to give you the best results, I'm the address. 
  // feel free to contact me at "LINK"`