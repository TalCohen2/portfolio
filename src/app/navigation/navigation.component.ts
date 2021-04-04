import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  displayNav:boolean = false;
  currentRoute:string;

  constructor() { }

  ngOnInit(): void {
  }

  onBurgerClick() {
    this.displayNav = !this.displayNav;
  }

}
